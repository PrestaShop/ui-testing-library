import type FakerCountry from '@data/faker/country';
import {type BOCountriesCreatePageInterface} from '@interfaces/BO/international/locations/countries/create';
import BOBasePage from '@pages/BO/BOBasePage';
import {type Page} from '@playwright/test';

/**
 * Add country page, contains functions that can be used on the page
 * @class
 * @extends BOBasePage
 */
class BOCountriesCreatePage extends BOBasePage implements BOCountriesCreatePageInterface {
  public pageTitleCreate: string;

  public readonly pageTitleEdit: string;

  public errorMessageIsoCode: string;

  public readonly errorMessagePrefix: string;

  protected nameInputEn: string;

  protected nameInputFr: string;

  protected isoCodeInput: string;

  protected callPrefixInput: string;

  protected defaultCurrencySelect: string;

  protected zoneSelect: string;

  protected needZipCodeLabel: (toggle: string) => string;

  protected zipCodeFormatInput: string;

  protected activeLabel: (toggle: string) => string;

  protected containsStatesLabel: (toggle: string) => string;

  protected needIdentificationNumberLabel: (toggle: string) => string;

  protected displayTaxLabel: (toggle: string) => string;

  protected saveCountryButton: string;

  /**
   * @constructs
   * Setting up texts and selectors to use on add country page
   */
  constructor() {
    super();

    this.pageTitleCreate = `New country • ${global.INSTALL.SHOP_NAME}`;
    this.pageTitleEdit = 'Edit: ';
    this.errorMessageIsoCode = 'This ISO code already exists. You cannot create two countries with the same ISO code.';
    this.errorMessagePrefix = 'The call_prefix field is invalid.';

    // Selectors
    this.nameInputEn = '#country_name_1';
    this.nameInputFr = '#country_name_2';
    this.isoCodeInput = '#country_iso_code';
    this.callPrefixInput = '#country_call_prefix';
    this.defaultCurrencySelect = '#country_default_currency';
    this.zoneSelect = '#country_zone';
    this.needZipCodeLabel = (toggle: string) => `#country_need_zip_code_${toggle}`;
    this.zipCodeFormatInput = '#country_zip_code_format';
    this.activeLabel = (toggle: string) => `#country_is_enabled_${toggle}`;
    this.containsStatesLabel = (toggle: string) => `#country_contains_states_${toggle}`;
    this.needIdentificationNumberLabel = (toggle: string) => `#country_need_identification_number_${toggle}`;
    this.displayTaxLabel = (toggle: string) => `#country_display_tax_label_${toggle}`;
    this.saveCountryButton = 'form[name="country"] #save-button';
  }

  /*
  Methods
   */
  /**
   * Fill form for add/edit country
   * @param page {Page} Browser tab
   * @param countryData {FakerCountry} Data to set on new country form
   * @returns {Promise<string>}
   */
  async createEditCountry(page: Page, countryData: FakerCountry): Promise<string> {
    await this.setValue(page, this.nameInputEn, countryData.name);
    await this.setValue(page, this.isoCodeInput, countryData.isoCode);
    await this.setValue(page, this.callPrefixInput, countryData.callPrefix.toString());
    await this.selectByVisibleText(page, this.defaultCurrencySelect, countryData.currency);
    await this.selectByVisibleText(page, this.zoneSelect, countryData.zone);
    await this.setChecked(page, this.needZipCodeLabel(countryData.needZipCode ? '1' : '0'));
    await this.setValue(page, this.zipCodeFormatInput, countryData.zipCodeFormat);
    await this.setChecked(page, this.activeLabel(countryData.active ? '1' : '0'));
    await this.setChecked(page, this.containsStatesLabel(countryData.containsStates ? '1' : '0'));
    await this.setChecked(
      page,
      this.needIdentificationNumberLabel(countryData.needIdentificationNumber ? '1' : '0'),
    );
    await this.setChecked(page, this.displayTaxLabel(countryData.displayTaxNumber ? '1' : '0'));
    // Save country
    await page.locator(this.saveCountryButton).click();

    return this.getTextContent(page, this.alertTextBlock);
  }

  /**
   * Get the value of an input
   * @override
   * @param page {Page} Browser tab
   * @param input {string} ID of the input
   * @returns {Promise<string>}
   */
  async getInputValue(page: Page, input: string): Promise<string> {
    let selector: string;

    switch (input) {
      case 'call_prefix':
        selector = this.callPrefixInput;
        break;
      case 'iso_code':
        selector = this.isoCodeInput;
        break;
      case 'zipCodeFormat':
        selector = this.zipCodeFormatInput;
        break;
      case 'nameEn':
        selector = this.nameInputEn;
        break;
      case 'nameFr':
        selector = this.nameInputFr;
        break;
      default:
        throw new Error(`Field ${input} was not found`);
    }

    return super.getInputValue(page, selector);
  }

  /**
   * Get the value of a select
   * @param page {Page} Browser tab
   * @param input {string} ID of the input
   * @returns {Promise<string>}
   */
  async getSelectValue(page: Page, input: string): Promise<string> {
    let selector: string;

    switch (input) {
      case 'id_currency':
        selector = this.defaultCurrencySelect;
        break;
      case 'id_zone':
        selector = this.zoneSelect;
        break;
      default:
        throw new Error(`Field ${input} was not found`);
    }

    return page.locator(selector).evaluate((node: HTMLSelectElement) => node.value);
  }

  /**
   * Get the value of an input
   * @param page {Page} Browser tab
   * @param input {string} ID of the input
   * @returns {Promise<string>}
   */
  async isCheckboxChecked(page: Page, input: string): Promise<boolean> {
    let selector: string;

    switch (input) {
      case 'active':
        selector = this.activeLabel('1');
        break;
      case 'contains_states':
        selector = this.containsStatesLabel('1');
        break;
      case 'display_tax_label':
        selector = this.displayTaxLabel('1');
        break;
      case 'need_identification_number':
        selector = this.needIdentificationNumberLabel('1');
        break;
      case 'need_zip_code':
        selector = this.needZipCodeLabel('1');
        break;
      default:
        throw new Error(`Field ${input} was not found`);
    }

    return this.isChecked(page, selector);
  }
}

const boCountriesCreatePage = new BOCountriesCreatePage();
export {boCountriesCreatePage, BOCountriesCreatePage};
