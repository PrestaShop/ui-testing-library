// Import pages
import FOBasePage from '@pages/FO/FOBasePage';

// Import data
import FakerAddress from '@data/faker/address';
import FakerCustomer from '@data/faker/customer';

import {ProductDetailsBasic} from '@data/types/product';

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

  protected paymentStepSection: string;

  protected paymentOptionInput: (name: string) => string;

  protected paymentOptionAlertDanger: string;

  protected conditionToApproveLabel: string;

  protected shippingValueSpan: string;

  protected discountValueSpan: string;

  protected cartSummaryLine: (line: number) => string;

  protected cartRuleName: (line: number) => string;

  protected itemsNumber: string;

  protected showDetailsLink: string;

  private readonly productList: string;

  protected productRowLink: (productRow: number) => string;

  protected productDetailsImage: (productRow: number) => string;

  protected productDetailsName: (productRow: number) => string;

  protected productDetailsQuantity: (productRow: number) => string;

  protected productDetailsPrice: (productRow: number) => string;

  protected productDetailsAttributes: (productRow: number) => string;

  public readonly noPaymentNeededText: string;

  private readonly promoCodeArea: string;

  public personalInformationStepForm: string;

  protected forgetPasswordLink: string;

  private readonly checkoutGuestForm: string;

  private readonly checkoutGuestGenderInput: (pos: number) => string;

  private readonly checkoutGuestFirstnameInput: string;

  private readonly checkoutGuestLastnameInput: string;

  private readonly checkoutGuestEmailInput: string;

  private readonly createAccountCheckbox: string;

  private readonly checkoutGuestPasswordInput: string;

  private readonly checkoutGuestBirthdayInput: string;

  private readonly checkoutGuestOptinCheckbox: string;

  private readonly checkoutGuestCustomerPrivacyCheckbox: string;

  private readonly checkoutGuestNewsletterCheckbox: string;

  private readonly checkoutGuestGdprCheckbox: string;

  private readonly checkoutGuestContinueButton: string;

  protected signInHyperLink: string;

  protected checkoutSummary: string;

  protected checkoutPromoBlock: string;

  protected checkoutRemoveDiscountLink: (row: number) => string;

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

  private readonly invoiceAddressesBlock: string;

  protected deliveryStepSection: string;

  protected deliveryStepEditButton: string;

  private readonly deliveryStepCarriersList: string;

  protected deliveryOptions: string;

  protected deliveryOptionLabel: (id: number) => string;

  private readonly deliveryOptionNameSpan: (id: number) => string;

  protected deliveryOptionAllNamesSpan: string;

  private readonly deliveryMessage: string;

  private readonly deliveryStepContinueButton: string;

  protected deliveryOption: (carrierID: number) => string;

  protected deliveryStepCarrierName: (carrierID: number) => string;

  protected deliveryStepCarrierDelay: (carrierID: number) => string;

  protected deliveryStepCarrierPrice: (carrierID: number) => string;

  private readonly deliveryAddressBlock: string;

  protected deliveryAddressPosition: (position: number) => string;

  protected invoiceAddressPosition: (position: number) => string;

  protected deliveryAddressEditButton: (addressID: number) => string;

  protected deliveryAddressDeleteButton: (addressID: number) => string;

  private readonly deliveryAddressRadioButton: (addressID: number) => string;

  private readonly invoiceAddressRadioButton: (addressID: number) => string;

  protected cartTotalATI: string;

  private readonly cartSubtotalGiftWrappingDiv: string;

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
    // Order as a guest selectors
    this.checkoutGuestForm = '#checkout-guest-form';
    this.checkoutGuestGenderInput = (pos) => `${this.checkoutGuestForm} input[name='id_gender'][value='${pos}']`;
    this.checkoutGuestFirstnameInput = `${this.checkoutGuestForm} input[name='firstname']`;
    this.checkoutGuestLastnameInput = `${this.checkoutGuestForm} input[name='lastname']`;
    this.checkoutGuestEmailInput = `${this.checkoutGuestForm} input[name='email']`;
    this.createAccountCheckbox = '#password-form__check';
    this.checkoutGuestPasswordInput = `${this.checkoutGuestForm} input[name='password']`;
    this.checkoutGuestBirthdayInput = `${this.checkoutGuestForm} input[name='birthday']`;
    this.checkoutGuestOptinCheckbox = `${this.checkoutGuestForm} input[name='optin']`;
    this.checkoutGuestCustomerPrivacyCheckbox = `${this.checkoutGuestForm} input[name='customer_privacy']`;
    this.checkoutGuestNewsletterCheckbox = `${this.checkoutGuestForm} input[name='newsletter']`;
    this.checkoutGuestGdprCheckbox = `${this.checkoutGuestForm} input[name='psgdpr']`;
    this.checkoutGuestContinueButton = `${this.checkoutGuestForm} button[name='continue']`;
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
    // Delivery address selectors
    this.deliveryAddressBlock = '#delivery-addresses';
    this.deliveryAddressEditButton = (addressID: number) => `#id_address_delivery-address-${addressID} a.edit-address`;
    this.deliveryAddressDeleteButton = (addressID: number) => `#id_address_delivery-address-${addressID} a.delete-address`;
    this.deliveryAddressRadioButton = (addressID: number) => `#id_address_delivery-address-${addressID} `
      + 'input[name="id_address_delivery"]';
    // Invoice address selectors
    this.invoiceAddressesBlock = '#invoice-addresses';
    this.deliveryAddressPosition = (position: number) => `#delivery-addresses article:nth-child(${position})`;
    this.invoiceAddressPosition = (position: number) => `#invoice-addresses article:nth-child(${position})`;
    this.invoiceAddressRadioButton = (addressID: number) => `#id_address_invoice-address-${addressID}`
      + ' input[name="id_address_invoice"]';

    // Shipping method selectors
    this.deliveryStepSection = '#checkout-delivery-step';
    this.deliveryStepEditButton = `${this.deliveryStepSection} span.step-edit`;
    this.deliveryStepCarriersList = `${this.deliveryStepSection} .delivery-options-list`;
    this.deliveryOptions = '#js-delivery div.delivery-options';
    this.deliveryOptionLabel = (id: number) => `${this.deliveryStepSection} label[for='delivery_option_${id}']`;
    this.deliveryOptionNameSpan = (id: number) => `${this.deliveryOptionLabel(id)} span.carrier-name`;
    this.deliveryOptionAllNamesSpan = '#js-delivery .delivery-option .carriere-name-container span.carrier-name';
    this.deliveryMessage = '#delivery_message';
    this.deliveryStepContinueButton = `${this.deliveryStepSection} button[name='confirmDeliveryOption']`;
    this.deliveryOption = (carrierID: number) => `${this.deliveryOptions} label[for=delivery_option_${carrierID}] span.carrier`;
    this.deliveryStepCarrierName = (carrierID: number) => `${this.deliveryOption(carrierID)}-name`;
    this.deliveryStepCarrierDelay = (carrierID: number) => `${this.deliveryOption(carrierID)}-delay`;
    this.deliveryStepCarrierPrice = (carrierID: number) => `${this.deliveryOption(carrierID)}-price`;

    // Payment step selectors
    this.paymentStepSection = '#checkout-payment-step';
    this.paymentOptionInput = (name: string) => `${this.paymentStepSection} input[name='payment-option']`
      + `[data-module-name='${name}']`;
    this.paymentOptionAlertDanger = '.payment-options p.alert-danger';
    this.conditionToApproveLabel = `${this.paymentStepSection} #conditions-to-approve label`;

    // Checkout summary selectors
    this.checkoutSummary = '#js-checkout-summary';
    this.checkoutPromoBlock = `${this.checkoutSummary} div.block-promo`;
    this.checkoutRemoveDiscountLink = (row: number) => `li.cart-summary-line:nth-child(${row})`
      + ' a[data-link-action="remove-voucher"] i';
    this.cartTotalATI = '.cart-summary-totals span.value';
    this.promoCodeArea = '#promo-code';
    this.shippingValueSpan = '#cart-subtotal-shipping span.value';
    this.discountValueSpan = '#cart-subtotal-discount span.value';
    this.cartSummaryLine = (line: number) => `${this.checkoutPromoBlock} li:nth-child(${line}).cart-summary-line`;
    this.cartRuleName = (line: number) => `${this.cartSummaryLine(line)} span.label`;

    // Cart details selectors
    this.itemsNumber = `${this.checkoutSummary} div.cart-summary-products.js-cart-summary-products p:nth-child(1)`;
    this.showDetailsLink = `${this.checkoutSummary} div.cart-summary-products.js-cart-summary-products a.js-show-details`;
    this.productList = '#cart-summary-product-list';
    this.productRowLink = (productRow: number) => `${this.productList} ul li:nth-child(${productRow})`;
    this.productDetailsImage = (productRow: number) => `${this.productRowLink(productRow)} div.media-left a img`;
    this.productDetailsName = (productRow: number) => `${this.productRowLink(productRow)} div span.product-name`;
    this.productDetailsQuantity = (productRow: number) => `${this.productRowLink(productRow)} `
      + 'div.media-body span.product-quantity';
    this.productDetailsPrice = (productRow: number) => `${this.productRowLink(productRow)} div.media-body `
      + 'span.product-price.float-xs-right';
    this.productDetailsAttributes = (productRow: number) => `${this.productRowLink(productRow)} div.media-body `
      + 'div.product-line-info';
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

  /**
   * Click on show details link
   * @param page {Page} Browser tab
   * @returns {Promise<boolean>}
   */
  async clickOnShowDetailsLink(page: Page): Promise<boolean> {
    await this.waitForSelectorAndClick(page, this.showDetailsLink);

    return this.elementVisible(page, `${this.showDetailsLink}[aria-expanded=true]`, 1000);
  }

  /**
   * Get product details
   * @param page {Page} Browser tab
   * @param productRow {number} Product row in details block
   * @returns {Promise<ProductDetailsBasic>}
   */
  async getProductDetails(page: Page, productRow: number): Promise<ProductDetailsBasic> {
    return {
      image: await this.getAttributeContent(page, this.productDetailsImage(productRow), 'src') ?? '',
      name: await this.getTextContent(page, this.productDetailsName(productRow)),
      quantity: await this.getNumberFromText(page, this.productDetailsQuantity(productRow)),
      price: await this.getPriceFromText(page, this.productDetailsPrice(productRow)),
    };
  }

  /**
   * Get product details
   * @param page {Page} Browser tab
   * @param productRow {number} Product row in details block
   * @returns {Promise<string}
   */
  async getProductAttributes(page: Page, productRow: number): Promise<string> {
    return this.getTextContent(page, this.productDetailsAttributes(productRow));
  }

  /**
   * Get product details
   * @param page {Page} Browser tab
   * @param productRow {number} Product row in details block
   * @returns {Promise<void}
   */
  async clickOnProductImage(page: Page, productRow: number): Promise<void> {
    return this.clickAndWaitForURL(page, this.productDetailsImage(productRow));
  }

  /**
   * Get product details
   * @param page {Page} Browser tab
   * @param productRow {number} Product row in details block
   * @returns {Promise<Page}
   */
  async clickOnProductName(page: Page, productRow: number): Promise<Page> {
    return this.openLinkWithTargetBlank(page, this.productDetailsName(productRow));
  }

  /**
   * Get items number
   * @param page {Page} Browser tab
   * @returns {Promise<string}
   */
  async getItemsNumber(page: Page): Promise<string> {
    return this.getTextContent(page, this.itemsNumber);
  }

  // Methods for personal information step
  /**
   * Click on sign in
   * @param page {Page} Browser tab
   * @return {Promise<void>}
   */
  async clickOnSignIn(page: Page): Promise<void> {
    await page.locator(this.signInHyperLink).click();
  }


  /**
   * Fill personal information form and click on continue
   * @param page {Page} Browser tab
   * @param customerData {FakerCustomer} Guest Customer's information to fill on form
   * @return {Promise<boolean>}
   */
  async setGuestPersonalInformation(page: Page, customerData: FakerCustomer): Promise<boolean> {
    await this.setChecked(page, this.checkoutGuestGenderInput(customerData.socialTitle === 'Mr.' ? 1 : 2));

    await this.setValue(page, this.checkoutGuestFirstnameInput, customerData.firstName);
    await this.setValue(page, this.checkoutGuestLastnameInput, customerData.lastName);
    await this.setValue(page, this.checkoutGuestEmailInput, customerData.email);
    if (this.theme === 'hummingbird') {
      await this.setChecked(page, this.createAccountCheckbox, true);
    }
    await this.setValue(page, this.checkoutGuestPasswordInput, customerData.password);

    // Fill birthday input
    await this.setValue(
      page,
      this.checkoutGuestBirthdayInput,
      `${customerData.monthOfBirth.padStart(2, '0')}/`
      + `${customerData.dayOfBirth.padStart(2, '0')}/`
      + `${customerData.yearOfBirth}`,
    );

    if (customerData.partnerOffers) {
      await this.setChecked(page, this.checkoutGuestOptinCheckbox);
    }

    if (customerData.newsletter) {
      await this.setChecked(page, this.checkoutGuestNewsletterCheckbox);
    }

    // Check customer privacy input if visible
    if (await this.elementVisible(page, this.checkoutGuestCustomerPrivacyCheckbox, 500)) {
      await this.setChecked(page, this.checkoutGuestCustomerPrivacyCheckbox);
    }

    // Check gdpr input if visible
    if (await this.elementVisible(page, this.checkoutGuestGdprCheckbox, 500)) {
      await this.setChecked(page, this.checkoutGuestGdprCheckbox);
    }

    // Click on continue
    await page.locator(this.checkoutGuestContinueButton).click();

    return this.isStepCompleted(page, this.personalInformationStepForm);
  }

  // Methods for Addresses step

  /**
   * Get address ID
   * @param page {Page} Browser tab
   * @param row {number} The row of the address
   */
  async getDeliveryAddressID(page: Page, row: number = 1): Promise<number> {
    const addressSelectorValue = await this.getAttributeContent(page, this.deliveryAddressPosition(row), 'id');

    if (addressSelectorValue === '') {
      return 0;
    }
    const text: string = (/\d+/g.exec(addressSelectorValue) ?? '').toString();

    return parseInt(text, 10);
  }

  /**
   * Get invoice address ID
   * @param page  {Page} Browser tab
   * @param row {number} The row of the address
   */
  async getInvoiceAddressID(page: Page, row: number = 1): Promise<number> {
    const addressSelectorValue = await this.getAttributeContent(page, this.invoiceAddressPosition(row), 'id');

    if (addressSelectorValue === '') {
      return 0;
    }
    const text: string = (/\d+/g.exec(addressSelectorValue) ?? '').toString();

    return parseInt(text, 10);
  }

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
