// Import pages
import FOBasePage from '@pages/FO/FOBasePage';

// Import data
import FakerAddress from '@data/faker/address';

import type {Page} from 'playwright';

/**
 * Checkout page, contains functions that can be used on the page
 * @class
 * @extends FOBasePage
 */
class CheckoutPage extends FOBasePage {
  public readonly deleteAddressSuccessMessage: string;

  public readonly noCarriersMessage: string;

  private readonly checkoutPageBody: string;

  protected stepFormSuccess: string;

  public readonly messageIfYouSignOut: string;

  public readonly authenticationErrorMessage: string;

  public readonly noPaymentNeededText: string;

  public personalInformationStepForm: string;

  protected forgetPasswordLink: string;

  protected signInHyperLink: string;

  protected checkoutLoginForm: string;

  protected personalInformationContinueButton: string;

  protected personalInformationCustomerIdentity: string;

  protected personalInformationEditLink: string;

  protected loginErrorMessage: string;

  protected addressStepSection: string;

  private readonly addressStepCompanyInput: string;

  private readonly addressStepAddress1Input: string;

  private readonly addressStepPostCodeInput: string;

  private readonly addressStepCityInput: string;

  protected addressStepCountrySelect: string;

  protected readonly addressStepPhoneInput: string;

  protected stateInput: string;

  private readonly addressStepUseSameAddressCheckbox: string;

  private readonly addressStepContinueButton: string;

  private readonly addressStepSubmitButton: string;

  protected addressStepEditButton: string;

  protected addAddressButton: string;

  protected addInvoiceAddressButton: string;

  protected deliveryStepSection: string;

  protected deliveryOptionLabel: (id: number) => string;

  private readonly deliveryMessage: string;

  private readonly deliveryStepContinueButton: string;

  /**
   * @constructs
   * Setting up texts and selectors to use on checkout page
   */
  constructor(theme: string = 'classic') {
    super(theme);
    this.deleteAddressSuccessMessage = 'Address successfully deleted.';
    this.noCarriersMessage = 'Unfortunately, there are no carriers available for your delivery address.';
    this.noPaymentNeededText = 'No payment needed for this order';
    this.messageIfYouSignOut = 'If you sign out now, your cart will be emptied.';
    this.authenticationErrorMessage = 'Authentication failed.';

    // Selectors
    this.checkoutPageBody = 'body#checkout';
    this.stepFormSuccess = '.-complete';

    // Personal information form
    this.personalInformationStepForm = '#checkout-personal-information-step';
    // Sign in selectors
    this.signInHyperLink = `${this.personalInformationStepForm} a[href="#checkout-login-form"]`;
    this.forgetPasswordLink = '#login-form div.forgot-password a[href*=password-recovery]';
    this.checkoutLoginForm = `${this.personalInformationStepForm} #checkout-login-form`;
    this.personalInformationContinueButton = `${this.checkoutLoginForm} #login-form footer button`;
    this.personalInformationCustomerIdentity = `${this.personalInformationStepForm} p.identity`;
    this.personalInformationEditLink = `${this.personalInformationStepForm} span.step-edit.text-muted`;
    this.loginErrorMessage = `${this.checkoutLoginForm} li.alert-danger`;

    // Addresses step selectors
    this.addressStepSection = '#checkout-addresses-step';
    this.addressStepCompanyInput = `${this.addressStepSection} input[name="company"]`;
    this.addressStepAddress1Input = 'input[name="address1"]';
    this.addressStepPostCodeInput = 'input[name="postcode"]';
    this.addressStepCityInput = 'input[name="city"]';
    this.addressStepCountrySelect = 'select[name="id_country"]';
    this.addressStepPhoneInput = 'input[name="phone"]';
    this.stateInput = 'select[name="id_state"]';
    this.addressStepUseSameAddressCheckbox = '#use_same_address';
    this.addressStepContinueButton = `${this.addressStepSection} button[name='confirm-addresses']`;
    this.addressStepSubmitButton = `${this.addressStepSection} button[type=submit]`;
    this.addressStepEditButton = `${this.addressStepSection} span.step-edit`;
    this.addAddressButton = '#checkout-addresses-step p.add-address a';
    this.addInvoiceAddressButton = '#checkout-addresses-step  p.add-address a[href*="invoice"]';

    // Shipping method selectors
    this.deliveryStepSection = '#checkout-delivery-step';
    this.deliveryOptionLabel = (id: number) => `${this.deliveryStepSection} label[for='delivery_option_${id}']`;
    this.deliveryMessage = '#delivery_message';
    this.deliveryStepContinueButton = `${this.deliveryStepSection} button[name='confirmDeliveryOption']`;
  }

  /*
  Methods
   */

  /**
   * Check if we are in checkout Page
   * @param page {Page} Browser tab
   * @return {Promise<boolean>}
   */
  async isCheckoutPage(page: Page): Promise<boolean> {
    return this.elementVisible(page, this.checkoutPageBody, 1000);
  }

  /**
   * Check if step is completed
   * @param page {Page} Browser tab
   * @param stepSelector {string} String of the step to check
   * @returns {Promise<boolean>}
   */
  async isStepCompleted(page: Page, stepSelector: string): Promise<boolean> {
    return this.elementVisible(page, `${stepSelector}${this.stepFormSuccess}`, 1000);
  }

  // Methods for Addresses step
  /**
   * Fill address form, used for delivery and invoice addresses
   * @param page {Page} Browser tab
   * @param address {FakerAddress} Address's information to fill form with
   * @returns {Promise<void>}
   */
  async fillAddressForm(page: Page, address: FakerAddress): Promise<void> {
    await this.setValue(page, this.addressStepPhoneInput, address.phone);
    await this.setValue(page, this.addressStepCompanyInput, address.company);
    // Contact
    await this.setValue(page, this.addressStepPhoneInput, address.phone);

    // Address
    await this.setValue(page, this.addressStepAddress1Input, address.address);
    await this.setValue(page, this.addressStepPostCodeInput, address.postalCode);
    await this.setValue(page, this.addressStepCityInput, address.city);
    await this.selectByVisibleText(page, this.addressStepCountrySelect, address.country);
    if (await this.elementVisible(page, this.stateInput, 1000)) {
      await this.selectByVisibleText(page, this.stateInput, address.state);
    }
  }

  /**
   * Set address step
   * @param page {Page} Browser tab
   * @param deliveryAddress {FakerAddress} Address's information to add (for delivery)
   * @param invoiceAddress {FakerAddress|null} Address's information to add (for invoice)
   * @returns {Promise<boolean>}
   */
  async setAddress(page: Page, deliveryAddress: FakerAddress, invoiceAddress: FakerAddress | null = null): Promise<boolean> {
    // Set delivery address
    await this.fillAddressForm(page, deliveryAddress);

    // Set invoice address if not null
    if (invoiceAddress !== null) {
      await this.setChecked(page, this.addressStepUseSameAddressCheckbox, false);
      await page.locator(this.addressStepContinueButton).click();
      await this.fillAddressForm(page, invoiceAddress);
    } else {
      await this.setChecked(page, this.addressStepUseSameAddressCheckbox, true);
    }

    if (await this.elementVisible(page, this.addressStepContinueButton, 2000)) {
      await page.locator(this.addressStepContinueButton).click();
    } else {
      await page.locator(this.addressStepSubmitButton).click();
    }

    return this.isStepCompleted(page, this.addressStepSection);
  }

  /**
   * Click on new address button
   * @param page {Page} Browser tab
   */
  async clickOnAddNewAddressButton(page: Page): Promise<void> {
    await this.waitForSelectorAndClick(page, this.addAddressButton);
  }

  /**
   * Go to Delivery Step and check that Address step is complete
   * @param page {Page} Browser tab
   * @return {Promise<boolean>}
   */
  async goToDeliveryStep(page: Page): Promise<boolean> {
    await this.clickAndWaitForLoadState(page, this.addressStepContinueButton);

    return this.isStepCompleted(page, this.addressStepSection);
  }

  /**
   * Choose shipping method and add a comment
   * @param page {Page} Browser tab
   * @param shippingMethodID {number} Position of the shipping method
   * @param comment {string} Comment to add after selecting a shipping method
   * @returns {Promise<boolean>}
   */
  async chooseShippingMethodAndAddComment(page: Page, shippingMethodID: number, comment: string = ''): Promise<boolean> {
    await this.waitForSelectorAndClick(page, this.deliveryOptionLabel(shippingMethodID));
    await this.setValue(page, this.deliveryMessage, comment);

    return this.goToPaymentStep(page);
  }

  /**
   * Go to Payment Step and check that delivery step is complete
   * @param page {Page} Browser tab
   * @return {Promise<boolean>}
   */
  async goToPaymentStep(page: Page): Promise<boolean> {
    await this.clickAndWaitForLoadState(page, this.deliveryStepContinueButton);

    return this.isStepCompleted(page, this.deliveryStepSection);
  }
}

const checkoutPage = new CheckoutPage();
export {checkoutPage, CheckoutPage};
