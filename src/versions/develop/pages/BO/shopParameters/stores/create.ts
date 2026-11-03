import type FakerStore from '@data/faker/store';
import {type BOStoresCreatePageInterface} from '@interfaces/BO/shopParameters/stores/create';
import BOBasePage from '@pages/BO/BOBasePage';
import {type Page} from '@playwright/test';

/**
 * Add store page, contains selectors and functions for the page
 * @class
 * @extends BOBasePage
 */
class BOStoresCreatePage extends BOBasePage implements BOStoresCreatePageInterface {
  public readonly pageTitleCreate: string;

  public readonly pageTitleEdit: string;

  private readonly storeForm: string;

  private readonly nameInput: (languageId: string) => string;

  private readonly address1Input: (languageId: string) => string;

  private readonly address2Input: (languageId: string) => string;

  private readonly postcodeInput: string;

  private readonly cityInput: string;

  private readonly countrySelect: string;

  private readonly stateSelect: string;

  private readonly latitudeInput: string;

  private readonly longitudeInput: string;

  private readonly phoneInput: string;

  private readonly faxInput: string;

  private readonly emailInput: string;

  private readonly noteIframe: (languageId: string) => string;

  private readonly statusToggle: (toggle: string) => string;

  private readonly pictureInput: string;

  private readonly hoursInput: (day: number, languageId: string) => string;

  private readonly saveButton: string;

  /**
   * @constructs
   * Setting up titles and selectors to use on add store page
   */
  constructor() {
    super();

    this.pageTitleCreate = 'New store •';
    this.pageTitleEdit = 'Edit store •';

    // Form selectors
    this.storeForm = 'form[name="store"]';
    this.nameInput = (languageId: string) => `#store_name_${languageId}`;
    this.address1Input = (languageId: string) => `#store_address1_${languageId}`;
    this.address2Input = (languageId: string) => `#store_address2_${languageId}`;
    this.postcodeInput = '#store_postcode';
    this.cityInput = '#store_city';
    this.countrySelect = '#store_id_country';
    this.stateSelect = '#store_id_state';
    this.latitudeInput = '#store_latitude';
    this.longitudeInput = '#store_longitude';
    this.phoneInput = '#store_phone';
    this.faxInput = '#store_fax';
    this.emailInput = '#store_email';
    this.noteIframe = (languageId: string) => `#store_note_${languageId}_ifr`;
    this.statusToggle = (toggle: string) => `${this.storeForm} #store_active_${toggle}`;
    this.pictureInput = '#store_image';
    // Days are 0-indexed in the form (Monday = 0)
    this.hoursInput = (day: number, languageId: string) => `#store_hours_${languageId}_${day - 1}`;
    this.saveButton = '#save-button';
  }

  /* Methods */
  /**
   * Fill creation / edition form for store and save it
   * @param page {Page} Browser tab
   * @param storeData {FakerStore} Data to set on store form
   * @return {Promise<string>}
   */
  async createEditStore(page: Page, storeData: FakerStore): Promise<string> {
    await this.setValue(page, this.nameInput('1'), storeData.name);
    await this.setValue(page, this.address1Input('1'), storeData.address1);
    await this.setValue(page, this.address2Input('1'), storeData.address2);
    await this.setValue(page, this.cityInput, storeData.city);
    // Changing the country reloads the state list through an ajax request
    await Promise.all([
      page.waitForResponse((response) => response.url().includes('/country-states?')),
      this.selectByVisibleText(page, this.countrySelect, storeData.country),
    ]);
    await this.setValue(page, this.postcodeInput, storeData.postcode);
    await this.setValue(page, this.latitudeInput, storeData.latitude);
    await this.setValue(page, this.longitudeInput, storeData.longitude);
    await this.setValue(page, this.phoneInput, storeData.phone);
    await this.setValue(page, this.faxInput, storeData.fax);
    await this.setValue(page, this.emailInput, storeData.email);
    await this.setValueOnTinymceInput(page, this.noteIframe('1'), storeData.note);
    await this.setChecked(page, this.statusToggle(storeData.status ? '1' : '0'));

    if (storeData.picture) {
      await this.uploadFile(page, this.pictureInput, storeData.picture);
    }

    for (let day: number = 1; day <= 7; day++) {
      await this.setValue(page, this.hoursInput(day, '1'), storeData.hours[day - 1]);
    }

    await this.clickAndWaitForURL(page, this.saveButton);

    return this.getAlertSuccessBlockParagraphContent(page);
  }

  /**
   * Get Inputs values
   * @param page {Page}
   * @param inputName {string}
   * @param languageId {string | undefined}
   */
  async getInputValue(page: Page, inputName: string, languageId: string = '1'): Promise<string> {
    const days: string[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    let selector: string;

    switch (inputName) {
      case 'name':
        selector = this.nameInput(languageId);
        break;

      case 'address1':
        selector = this.address1Input(languageId);
        break;

      case 'address2':
        selector = this.address2Input(languageId);
        break;

      case 'postcode':
        selector = this.postcodeInput;
        break;

      case 'city':
        selector = this.cityInput;
        break;

      case 'latitude':
        selector = this.latitudeInput;
        break;

      case 'longitude':
        selector = this.longitudeInput;
        break;

      case 'phone':
        selector = this.phoneInput;
        break;

      case 'fax':
        selector = this.faxInput;
        break;

      case 'email':
        selector = this.emailInput;
        break;

      default:
        if (!days.includes(inputName)) {
          throw new Error(`Field ${inputName} was not found`);
        }
        selector = this.hoursInput(days.indexOf(inputName) + 1, languageId);
    }

    return page.locator(selector).inputValue();
  }

  /**
   * Get value of a select
   * @param page {Page}
   * @param name {string}
   */
  async getSelectValue(page: Page, name: string): Promise<string> {
    let selector: string;

    switch (name) {
      case 'id_country':
        selector = this.countrySelect;
        break;
      case 'id_state':
        selector = this.stateSelect;
        break;
      default:
        throw new Error(`Field ${name} was not found`);
    }

    return page.locator(selector).evaluate((node: HTMLSelectElement) => node.value);
  }

  /**
   * Get Toggle value
   * @param page {Page}
   * @param toggle {string} '1' for enabled, '0' for disabled
   */
  async isActive(page: Page, toggle: string): Promise<boolean> {
    return this.isChecked(page, this.statusToggle(toggle));
  }
}

module.exports = new BOStoresCreatePage();
