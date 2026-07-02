import type FakerCountry from '@data/faker/country';
import {type BOCountriesCreatePageInterface} from '@interfaces/BO/international/locations/countries/create';
import {type Page} from '@playwright/test';
import {
  BOCountriesCreatePage as BOCountriesCreatePageVersion,
} from '@versions/develop/pages/BO/international/locations/countries/create';

class BOCountriesCreatePage extends BOCountriesCreatePageVersion implements BOCountriesCreatePageInterface {
  /**
   * @constructs
   */
  constructor() {
    super();

    this.pageTitleCreate = 'Countries > Add new •';
    this.errorMessageIsoCode = 'This ISO code already exists.You cannot create two countries with the same ISO code.';

    // Selectors
    this.nameInputEn = '#name_1';
    this.nameInputFr = '#name_2';
    this.isoCodeInput = '#iso_code';
    this.callPrefixInput = '#call_prefix';
    this.defaultCurrencySelect = '#id_currency';
    this.zoneSelect = '#id_zone';
    this.needZipCodeLabel = (toggle: string) => `#need_zip_code_${toggle}`;
    this.zipCodeFormatInput = '#zip_code_format';
    this.activeLabel = (toggle: string) => `#active_${toggle}`;
    this.containsStatesLabel = (toggle: string) => `#contains_states_${toggle}`;
    this.needIdentificationNumberLabel = (toggle: string) => `#need_identification_number_${toggle}`;
    this.displayTaxLabel = (toggle: string) => `#display_tax_label_${toggle}`;
    this.saveCountryButton = '#country_form_submit_btn';
  }

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
    await this.setChecked(page, this.needZipCodeLabel(countryData.needZipCode ? 'on' : 'off'));
    await this.setValue(page, this.zipCodeFormatInput, countryData.zipCodeFormat);
    await this.setChecked(page, this.activeLabel(countryData.active ? 'on' : 'off'));
    await this.setChecked(page, this.containsStatesLabel(countryData.containsStates ? 'on' : 'off'));
    await this.setChecked(
      page,
      this.needIdentificationNumberLabel(countryData.needIdentificationNumber ? 'on' : 'off'),
    );
    await this.setChecked(page, this.displayTaxLabel(countryData.displayTaxNumber ? 'on' : 'off'));
    // Save country
    await this.clickAndWaitForURL(page, this.saveCountryButton);

    return this.getTextContent(page, this.alertBlock);
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
        selector = this.activeLabel('on');
        break;
      case 'contains_states':
        selector = this.containsStatesLabel('on');
        break;
      case 'display_tax_label':
        selector = this.displayTaxLabel('on');
        break;
      case 'need_identification_number':
        selector = this.needIdentificationNumberLabel('on');
        break;
      case 'need_zip_code':
        selector = this.needZipCodeLabel('on');
        break;
      default:
        throw new Error(`Field ${input} was not found`);
    }

    return this.isChecked(page, selector);
  }
}

const boCountriesCreatePage = new BOCountriesCreatePage();
export {boCountriesCreatePage, BOCountriesCreatePage};
