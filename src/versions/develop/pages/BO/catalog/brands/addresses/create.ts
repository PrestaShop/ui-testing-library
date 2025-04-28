import type FakerBrandAddress from '@data/faker/brandAddress';
import {type BOBrandAdressesCreatePageInterface} from '@interfaces/BO/catalog/brands/addresses/create';
import BOBasePage from '@pages/BO/BOBasePage';
import {type Page} from '@playwright/test';

/**
 * Add brand address page, contains selectors and functions for the page
 * @class
 * @extends BOBasePage
 */
class BOBrandAdressesCreatePage extends BOBasePage implements BOBrandAdressesCreatePageInterface {
  public readonly pageTitle: string;

  private readonly brandSelect: string;

  private readonly lastnameInput: string;

  private readonly firstnameInput: string;

  private readonly addressInput: string;

  private readonly secondaryAddressInput: string;

  private readonly postalCodeInput: string;

  private readonly cityInput: string;

  private readonly countrySelect: string;

  private readonly stateSelect: string;

  private readonly homePhoneInput: string;

  private readonly mobilePhoneInput: string;

  private readonly otherInput: string;

  private readonly saveButton: string;

  /**
   * @constructs
   * Setting up titles and selectors to use on add brand address page
   */
  constructor() {
    super();

    this.pageTitle = `New brand address • ${global.INSTALL.SHOP_NAME}`;

    // Selectors
    this.brandSelect = 'select#manufacturer_address_id_manufacturer';
    this.lastnameInput = 'input#manufacturer_address_last_name';
    this.firstnameInput = 'input#manufacturer_address_first_name';
    this.addressInput = 'input#manufacturer_address_address';
    this.secondaryAddressInput = 'input#manufacturer_address_address2';
    this.postalCodeInput = 'input#manufacturer_address_post_code';
    this.cityInput = 'input#manufacturer_address_city';
    this.countrySelect = 'select#manufacturer_address_id_country';
    this.stateSelect = 'select#manufacturer_address_id_state';
    this.homePhoneInput = 'input#manufacturer_address_home_phone';
    this.mobilePhoneInput = 'input#manufacturer_address_mobile_phone';
    this.otherInput = 'input#manufacturer_address_other';
    this.saveButton = '.card-footer button';
  }

  /*
  Methods
   */
  /**
   * Create or edit Brand Address
   * @param page {Page} Browser tab
   * @param brandAddressData {FakerBrandAddress} Data to set in address form
   * @return {Promise<string>}
   */
  async createEditBrandAddress(page: Page, brandAddressData: FakerBrandAddress): Promise<string> {
    // Fill information data
    await this.selectByVisibleText(page, this.brandSelect, brandAddressData.brandName);
    await this.setValue(page, this.lastnameInput, brandAddressData.lastName);
    await this.setValue(page, this.firstnameInput, brandAddressData.firstName);
    await this.setValue(page, this.addressInput, brandAddressData.address);
    await this.setValue(page, this.secondaryAddressInput, brandAddressData.secondaryAddress);
    await this.setValue(page, this.postalCodeInput, brandAddressData.postalCode);
    await this.setValue(page, this.cityInput, brandAddressData.city);

    // Select country
    await Promise.all([
      page.waitForResponse((response) => response.url().includes('states/country-states'), {timeout: 1000}),
      this.selectByVisibleText(page, this.countrySelect, brandAddressData.country),
    ]);

    // Select state
    if (brandAddressData.state) {
      await this.selectByVisibleText(page, this.stateSelect, brandAddressData.state);
    } else {
      await this.elementNotVisible(page, this.stateSelect);
    }

    await this.setValue(page, this.homePhoneInput, brandAddressData.homePhone);
    await this.setValue(page, this.mobilePhoneInput, brandAddressData.mobilePhone);
    await this.setValue(page, this.otherInput, brandAddressData.other);

    // Click on Save button and successful message (the delay makes it more stable when state selector is switched)
    await this.clickAndWaitForURL(page, this.saveButton, 'load', 30000, {delay: 500});
    return this.getAlertSuccessBlockParagraphContent(page);
  }
}

module.exports = new BOBrandAdressesCreatePage();
