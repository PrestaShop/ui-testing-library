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
  protected addressStepSection: string;

  private readonly addressStepAliasInput: string;

  private readonly addressStepCompanyInput: string;

  private readonly addressStepAddress1Input: string;

  private readonly addressStepPostCodeInput: string;

  private readonly addressStepCityInput: string;

  protected addressStepCountrySelect: string;

  protected readonly addressStepPhoneInput: string;

  protected stateInput: string;

  protected addressStepEditButton: string;

  protected addAddressButton: string;

  protected addInvoiceAddressButton: string;

  /**
   * @constructs
   * Setting up texts and selectors to use on checkout page
   */
  constructor(theme: string = 'classic') {
    super(theme);

    // Addresses step selectors
    this.addressStepSection = '#checkout-addresses-step';
    this.addressStepAliasInput = '#field-alias';
    this.addressStepCompanyInput = `${this.addressStepSection} input[name="company"]`;
    this.addressStepAddress1Input = 'input[name="address1"]';
    this.addressStepPostCodeInput = 'input[name="postcode"]';
    this.addressStepCityInput = 'input[name="city"]';
    this.addressStepCountrySelect = 'select[name="id_country"]';
    this.addressStepPhoneInput = 'input[name="phone"]';
    this.stateInput = 'select[name="id_state"]';
    this.addressStepEditButton = `${this.addressStepSection} span.step-edit`;
    this.addAddressButton = '#checkout-addresses-step p.add-address a';
    this.addInvoiceAddressButton = '#checkout-addresses-step  p.add-address a[href*="invoice"]';
  }

  /*
  Methods
   */

  /**
   * Fill address form, used for delivery and invoice addresses
   * @param page {Page} Browser tab
   * @param address {FakerAddress} Address's information to fill form with
   * @returns {Promise<void>}
   */
  async fillAddressForm(page: Page, address: FakerAddress): Promise<void> {
    if (await this.elementVisible(page, this.addressStepAliasInput, 500)) {
      await this.setValue(page, this.addressStepAliasInput, address.alias);
    }
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

}

const checkoutPage = new CheckoutPage();
export {checkoutPage, CheckoutPage};
