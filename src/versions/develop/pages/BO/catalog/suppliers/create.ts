import type FakerSupplier from '@data/faker/supplier';
import {type BOSuppliersCreatePageInterface} from '@interfaces/BO/catalog/suppliers/create';
import BOBasePage from '@pages/BO/BOBasePage';
import {type Page} from '@playwright/test';

/**
 * Add supplier page, contains functions that can be used on the page
 * @class
 * @extends BOBasePage
 */
class BOSuppliersCreatePage extends BOBasePage implements BOSuppliersCreatePageInterface {
  public readonly pageTitle: string;

  public readonly pageTitleEdit: string;

  protected nameInput: string;

  private readonly descriptionDiv: string;

  private readonly descriptionLangNavItemLink: (lang: string) => string;

  protected descriptionIFrame: (id: number) => string;

  protected homePhoneInput: string;

  protected mobilePhoneInput: string;

  protected addressInput: string;

  protected secondaryAddressInput: string;

  protected postalCodeInput: string;

  protected cityInput: string;

  private readonly countryInput: string;

  protected selectCountryList: string;

  protected searchCountryInput: string;

  protected countrySearchResult: string;

  private readonly stateInput: string;

  protected logoFileInput: string;

  private readonly metaTitleLangButton: string;

  private readonly metaTitleLangSpan: (lang: string) => string;

  protected metaTitleInput: (id: number) => string;

  protected metaDescriptionTextarea: (id: number) => string;

  private readonly metaKeywordsInput: (id: number) => string;

  protected statusToggleInput: (toggle: number) => string;

  private readonly taggableFieldDiv: (lang: string) => string;

  private readonly deleteKeywordLink: (lang: string) => string;

  protected saveButton: string;

  /**
   * @constructs
   * Setting up texts and selectors to use on add supplier page
   */
  constructor() {
    super();

    this.pageTitle = `New supplier • ${global.INSTALL.SHOP_NAME}`;
    this.pageTitleEdit = 'Editing supplier';

    // Selectors
    this.nameInput = '#supplier_name';
    this.descriptionDiv = '#supplier_description';
    this.descriptionLangNavItemLink = (lang: string) => `${this.descriptionDiv} ul li a[data-locale='${lang}']`;
    this.descriptionIFrame = (id: number) => `#supplier_description_${id}_ifr`;
    this.homePhoneInput = '#supplier_phone';
    this.mobilePhoneInput = '#supplier_mobile_phone';
    this.addressInput = '#supplier_address';
    this.secondaryAddressInput = '#supplier_address2';
    this.postalCodeInput = '#supplier_post_code';
    this.cityInput = '#supplier_city';
    this.countryInput = '#supplier_id_country';
    this.selectCountryList = '#select2-supplier_id_country-container';
    this.searchCountryInput = '.select2-search__field';
    this.countrySearchResult = '#select2-supplier_id_country-results li.select2-results__option--highlighted';
    this.stateInput = '#supplier_id_state';
    this.logoFileInput = '#supplier_logo';
    this.metaTitleLangButton = '#supplier_meta_title_dropdown';
    this.metaTitleLangSpan = (lang: string) => 'div.dropdown-menu[aria-labelledby=\'supplier_meta_title_dropdown\']'
      + ` span[data-locale='${lang}']`;
    this.metaTitleInput = (id: number) => `#supplier_meta_title_${id}`;
    this.metaDescriptionTextarea = (id: number) => `#supplier_meta_description_${id}`;
    this.metaKeywordsInput = (id: number) => `#supplier_meta_keyword_${id}-tokenfield`;
    this.statusToggleInput = (toggle: number) => `#supplier_is_enabled_${toggle}`;

    // Selectors for Meta keywords
    this.taggableFieldDiv = (lang: string) => `div.input-group div.js-locale-${lang}`;
    this.deleteKeywordLink = (lang: string) => `${this.taggableFieldDiv(lang)} a.close`;
    this.saveButton = '.card-footer button';
  }

  /*
  Methods
   */

  /**
   * Create or edit Supplier
   * @param page {Page} Browser tab
   * @param supplierData {FakerSupplier} Data to set on new/edit supplier form
   * @return {Promise<string>}
   */
  async createEditSupplier(page: Page, supplierData: FakerSupplier): Promise<string> {
    // Fill Name
    await this.setValue(page, this.nameInput, supplierData.name);

    // Fill Address information
    await this.setValue(page, this.homePhoneInput, supplierData.homePhone);
    await this.setValue(page, this.mobilePhoneInput, supplierData.mobilePhone);
    await this.setValue(page, this.addressInput, supplierData.address);
    await this.setValue(page, this.secondaryAddressInput, supplierData.secondaryAddress);
    await this.setValue(page, this.postalCodeInput, supplierData.postalCode);
    await this.setValue(page, this.cityInput, supplierData.city);

    // Select country
    await Promise.all([
      page.waitForResponse((response) => response.url().includes('states/country-states'), {timeout: 1000}),
      this.selectByVisibleText(page, this.countryInput, supplierData.country),
    ]);

    // Select state
    if (supplierData.state) {
      await this.selectByVisibleText(page, this.stateInput, supplierData.state);
    } else {
      await this.elementNotVisible(page, this.stateInput);
    }

    // Add logo
    await this.uploadFile(page, this.logoFileInput, supplierData.logo);

    // Fill Description, meta title, meta description and meta keywords in english
    await this.changeLanguageForSelectors(page, 'en');
    await this.setValueOnTinymceInput(page, this.descriptionIFrame(1), supplierData.description);
    await this.setValue(page, this.metaTitleInput(1), supplierData.metaTitle);
    await this.setValue(page, this.metaDescriptionTextarea(1), supplierData.metaDescription);

    // Fill Description, meta title, meta description and meta keywords in french
    await this.changeLanguageForSelectors(page, 'fr');
    await this.setValueOnTinymceInput(page, this.descriptionIFrame(2), supplierData.descriptionFr);
    await this.setValue(page, this.metaTitleInput(2), supplierData.metaTitleFr);
    await this.setValue(page, this.metaDescriptionTextarea(2), supplierData.metaDescriptionFr);

    // Set status value
    await this.setChecked(page, this.statusToggleInput(supplierData.enabled ? 1 : 0));

    // Save Supplier
    await this.clickAndWaitForURL(page, this.saveButton);
    return this.getAlertSuccessBlockParagraphContent(page);
  }

  /**
   * Delete all keywords
   * @param page {Page} Browser tab
   * @param lang {string} To specify which input to empty
   * @return {Promise<void>}
   */
  async deleteKeywords(page: Page, lang: string = 'en'): Promise<void> {
    const closeButtonsLocator = page.locator(this.deleteKeywordLink(lang));

    for (let i = (await closeButtonsLocator.count()) - 1; i > 0; i--) {
      await closeButtonsLocator.nth(i).click();
    }
  }

  /**
   * Add keywords
   * @param page {Page} Browser tab
   * @param keywords {array} Array of keywords
   * @param idLang {number} To choose which lang (1 for en, 2 for fr)
   * @return {Promise<void>}
   */
  async addKeywords(page: Page, keywords: string[], idLang: number = 1): Promise<void> {
    for (let i = 0; i < keywords.length; i++) {
      await page.locator(this.metaKeywordsInput(idLang)).fill(keywords[i]);
      await page.keyboard.press('Enter');
    }
  }

  /**
   * Change language for description and meta selectors
   * @param page {Page} Browser tab
   * @param lang {string} To choose which language ('en' or 'fr')
   * @return {Promise<void>}
   */
  async changeLanguageForSelectors(page: Page, lang: string = 'en'): Promise<void> {
    // Change language for Description input
    await Promise.all([
      page.locator(this.descriptionLangNavItemLink(lang)).click(),
      this.waitForVisibleSelector(page, `${this.descriptionLangNavItemLink(lang)}.active`),
    ]);

    // Change language for meta selectors
    await Promise.all([
      page.locator(this.metaTitleLangButton).click(),
      this.waitForVisibleSelector(page, `${this.metaTitleLangButton}[aria-expanded='true']`),
    ]);
    await Promise.all([
      page.locator(this.metaTitleLangSpan(lang)).click(),
      this.waitForVisibleSelector(page, `${this.metaTitleLangButton}[aria-expanded='false']`),
    ]);
  }
}

const createSupplier = new BOSuppliersCreatePage();
export {createSupplier, BOSuppliersCreatePage as CreateSupplier};
