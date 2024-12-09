import type SearchWeight from '@data/types/search';
import {BOSearchPageInterface} from '@interfaces/BO/shopParameters/search';
import BOBasePage from '@pages/BO/BOBasePage';
import type {Page} from 'playwright';

/**
 * Search page, contains selectors and functions for the page
 * @class
 * @extends BOBasePage
 */
class BOSearchPage extends BOBasePage implements BOSearchPageInterface {
  public readonly pageTitle: string;

  public readonly successfulUpdateStatusMessage: string;

  public readonly settingsUpdateMessage: string;

  public readonly updateSuccessMessage: string;

  public readonly errorFillFieldMessage: string;

  public readonly errorMaxWordLengthInvalidMessage: string;

  private readonly aliasTabLink: string;

  private readonly tagsTabLink: string;

  private readonly indexingForm: string;

  private readonly indexationLabel: (status: string) => string;

  private readonly indexedProducts: string;

  private readonly addMissingProductsLink: string;

  private readonly rebuildEntireIndexLink: string;

  private readonly rebuildEntireIndexCronJobLink: string;

  private readonly aliasForm: string;

  private readonly searchWithinWordInput: (status: string) => string;

  private readonly searchExactEndMatchLabel: (status: string) => string;

  private readonly fuzzySearchLabel: (status: string) => string;

  private readonly maximumApproximateWordsInput: string;

  private readonly maximumWordLengthInput: string;

  private readonly minimumWordLengthInput: string;

  private readonly blacklistedWordsTextarea: (idLang: number) => string;

  private readonly saveFormButton: string;

  private readonly weightForm: string;

  private readonly weightInputValue: (field: string) => string;

  private readonly weightSaveFormButton: string;

  /**
   * @constructs
   * Setting up titles and selectors to use on search page
   */
  constructor() {
    super();

    this.pageTitle = 'Search •';
    this.successfulCreationMessage = 'Successful creation';
    this.successfulUpdateStatusMessage = 'The status has been successfully updated.';
    this.updateSuccessMessage = 'Update successful';
    this.settingsUpdateMessage = 'The settings have been successfully updated.';
    this.errorFillFieldMessage = 'Please fill in this field.';
    this.errorMaxWordLengthInvalidMessage = 'The Maximum word length (in characters) field is invalid.';

    // Selectors
    // Tabs
    this.aliasTabLink = '#subtab-AdminAliases';
    this.tagsTabLink = '#subtab-AdminTags';

    // Indexing form
    this.indexingForm = '#alias_fieldset_indexation';
    this.indexationLabel = (status: string) => `#PS_SEARCH_INDEXATION_${status}`;
    this.indexedProducts = `${this.indexingForm} div p strong`;
    this.addMissingProductsLink = `${this.indexingForm} a.btn-link`
      + '[href*="controller=AdminSearch&action=searchCron&ajax=1&token"]';
    this.rebuildEntireIndexLink = `${this.indexingForm} a.btn-link`
      + '[href*="controller=AdminSearch&action=searchCron&ajax=1&full=1&token"]';
    this.rebuildEntireIndexCronJobLink = `${this.indexingForm} a:not(.btn-link)`
      + '[href*="controller=AdminSearch&action=searchCron&ajax=1&full=1&token"]';

    // Search form
    this.aliasForm = '#alias_fieldset_search';
    this.searchWithinWordInput = (status: string) => `#PS_SEARCH_START_${status}`;
    this.searchExactEndMatchLabel = (status: string) => `#PS_SEARCH_END_${status}`;
    this.fuzzySearchLabel = (status: string) => `#PS_SEARCH_FUZZY_${status}`;
    this.maximumApproximateWordsInput = 'input[name="PS_SEARCH_FUZZY_MAX_LOOP"]';
    this.maximumWordLengthInput = 'input[name="PS_SEARCH_MAX_WORD_LENGTH"]';
    this.minimumWordLengthInput = 'input[name="PS_SEARCH_MINWORDLEN"]';
    this.blacklistedWordsTextarea = (idLang: number) => `textarea[name="PS_SEARCH_BLACKLIST_${idLang}"]`;
    this.saveFormButton = `${this.aliasForm} button[name='submitOptionsalias']`;

    // Weight form
    this.weightForm = '#alias_fieldset_relevance';
    this.weightInputValue = (field: string) => `${this.weightForm} input[name="PS_SEARCH_WEIGHT_${field}"]`;
    this.weightSaveFormButton = `${this.weightForm} button[name='submitOptionsalias']`;
  }

  /*
  Methods
   */

  /* Header methods */
  /**
   * Go to aliases page
   * @param page {Page} Browser tab
   * @returns {Promise<void>}
   */
  async goToAliasesPage(page: Page): Promise<void> {
    await this.clickAndWaitForURL(page, this.aliasTabLink);
  }

  /**
   * Go to tags page
   * @param page {Page} Browser tab
   * @returns {Promise<void>}
   */
  async goToTagsPage(page: Page): Promise<void> {
    await this.clickAndWaitForURL(page, this.tagsTabLink);
  }

  // Methods for Indexing form
  /**
   * Returns the number of indexed products
   * @param page {Page} Browser tab
   * @return {Promise<number>}
   */
  async getNumIndexedProducts(page: Page): Promise<number> {
    const text = await this.getTextContent(page, this.indexedProducts);
    const regexIndexedProducts: RegExp = /([0-9]+)\s\/\s/;
    const regexMatch: RegExpMatchArray|null = text.match(regexIndexedProducts);

    if (regexMatch === null) {
      return 0;
    }

    return parseInt(regexMatch[1], 10);
  }

  /**
   * Returns the number of total products
   * @param page {Page} Browser tab
   * @return {Promise<number>}
   */
  async getNumTotalProducts(page: Page): Promise<number> {
    const text = await this.getTextContent(page, this.indexedProducts);
    const regexIndexedProducts: RegExp = /\s\/\s([0-9]+)/;
    const regexMatch: RegExpMatchArray|null = text.match(regexIndexedProducts);

    if (regexMatch === null) {
      return 0;
    }

    return parseInt(regexMatch[1], 10);
  }

  /**
   * Enable/Disable indexing
   * @param page {Page} Browser tab
   * @param toEnable {boolean} True if we need to enable indexing
   * @returns {Promise<string>}
   */
  async setIndexing(page: Page, toEnable: boolean = true): Promise<string> {
    await this.setChecked(page, this.indexationLabel(toEnable ? 'on' : 'off'));
    await this.clickAndWaitForLoadState(page, this.saveFormButton);
    await this.elementNotVisible(page, this.indexationLabel(!toEnable ? 'on' : 'off'), 2000);

    return this.getAlertSuccessBlockContent(page);
  }

  /**
   * Click "Add missing products to the index"
   * @param page {Page} Browser tab
   * @returns {Promise<string>}
   */
  async clickAddMissingProductsToIndex(page: Page): Promise<string> {
    await page.locator(this.addMissingProductsLink).click();

    return this.getAlertSuccessBlockContent(page);
  }

  /**
   * Click "Re-build the entire index"
   * @param page {Page} Browser tab
   * @returns {Promise<string>}
   */
  async clickRebuildEntireIndex(page: Page): Promise<string> {
    await page.locator(this.rebuildEntireIndexLink).click();

    return this.getAlertSuccessBlockContent(page);
  }

  /**
   * Click on the cron jon link for "Re-build the entire index"
   * @param page {Page} Browser tab
   * @returns {Promise<void>}
   */
  async clickRebuildEntireIndexCronJobLink(page: Page): Promise<void> {
    await page.locator(this.rebuildEntireIndexCronJobLink).click({
      button: 'middle',
    });
  }

  // Methods for search form
  /**
   * Returns if Search exact end match is checked
   * @param page {Page} Browser tab
   * @returns {Promise<boolean>}
   */
  async getSearchExactEndMatchStatus(page: Page): Promise<boolean> {
    return this.isChecked(page, this.searchExactEndMatchLabel('on'));
  }

  /**
   * Enable/Disable Search within word
   * @param page {Page} Browser tab
   * @param toEnable {boolean} True if we need to enable Search within word
   * @returns {Promise<string>}
   */
  async setSearchWithinWord(page: Page, toEnable: boolean = true): Promise<string> {
    await this.setChecked(page, this.searchWithinWordInput(toEnable ? 'on' : 'off'));
    await this.clickAndWaitForLoadState(page, this.saveFormButton);

    return this.getAlertSuccessBlockContent(page);
  }

  /**
   * Enable/Disable Search exact end match
   * @param page {Page} Browser tab
   * @param toEnable {boolean} True if we need to enable Search exact end match
   * @returns {Promise<string>}
   */
  async setSearchExactEndMatch(page: Page, toEnable: boolean = true): Promise<string> {
    await this.setChecked(page, this.searchExactEndMatchLabel(toEnable ? 'on' : 'off'));
    await this.clickAndWaitForLoadState(page, this.saveFormButton);
    await this.elementNotVisible(page, this.searchExactEndMatchLabel(!toEnable ? 'on' : 'off'), 2000);

    return this.getAlertSuccessBlockContent(page);
  }

  /**
   * Enable/Disable fuzzy search
   * @param page {Page} Browser tab
   * @param toEnable {boolean} True if we need to enable fuzzy search
   * @returns {Promise<string>}
   */
  async setFuzzySearch(page: Page, toEnable: boolean = true): Promise<string> {
    await this.setChecked(page, this.fuzzySearchLabel(toEnable ? 'on' : 'off'));
    await this.clickAndWaitForLoadState(page, this.saveFormButton);
    await this.elementNotVisible(page, this.fuzzySearchLabel(!toEnable ? 'on' : 'off'), 2000);

    return this.getAlertSuccessBlockContent(page);
  }

  /**
   * Returns the maximum approximate words allowed by fuzzy search
   * @param page {Page} Browser tab
   * @returns {Promise<number>}
   */
  async getMaximumApproximateWords(page: Page): Promise<number> {
    return parseInt(await this.getInputValue(page, this.maximumApproximateWordsInput), 10);
  }

  /**
   * Define the maximum approximate words allowed by fuzzy search
   * @param page {Page} Browser tab
   * @param maxWords {number} Maximum approximate words
   * @returns {Promise<string>}
   */
  async setMaximumApproximateWords(page: Page, maxWords: number): Promise<string> {
    await this.setValue(page, this.maximumApproximateWordsInput, maxWords.toString());
    await this.clickAndWaitForLoadState(page, this.saveFormButton);

    return this.getAlertSuccessBlockContent(page);
  }

  /**
   * Returns the maximum word length (in characters)
   * @param page {Page} Browser tab
   * @returns {Promise<number>}
   */
  async getMaximumWordLength(page: Page): Promise<number> {
    return parseInt(await this.getInputValue(page, this.maximumWordLengthInput), 10);
  }

  /**
   * Define the maximum word length (in characters)
   * @param page {Page} Browser tab
   * @param length {number|string} Length
   * @returns {Promise<string>}
   */
  async setMaximumWordLength(page: Page, length: number|string): Promise<string> {
    await this.setValue(page, this.maximumWordLengthInput, length.toString());
    await this.clickAndWaitForLoadState(page, this.saveFormButton);

    const validationMessage = await page
      .locator(this.maximumWordLengthInput)
      .evaluate((element: HTMLInputElement) => element.validationMessage);

    if (validationMessage.length > 0) {
      return validationMessage;
    }

    return this.getTextContent(page, this.alertBlock);
  }

  /**
   * Returns the minimum word length (in characters)
   * @param page {Page} Browser tab
   * @returns {Promise<number>}
   */
  async getMinimumWordLength(page: Page): Promise<number> {
    return parseInt(await this.getInputValue(page, this.minimumWordLengthInput), 10);
  }

  /**
   * Define the minimum word length (in characters)
   * @param page {Page} Browser tab
   * @param length {number} Length
   * @returns {Promise<string>}
   */
  async setMinimumWordLength(page: Page, length: number): Promise<string> {
    await this.setValue(page, this.minimumWordLengthInput, length.toString());
    await this.clickAndWaitForLoadState(page, this.saveFormButton);

    return this.getAlertSuccessBlockContent(page);
  }

  /**
   * Returns blacklisted words in specific lang
   * @param page {Page} Browser tab
   * @param idLang {number} ID Lang
   * @returns {Promise<string>}
   */
  async getBlacklistedWords(page: Page, idLang: number): Promise<string> {
    return this.getTextContent(page, this.blacklistedWordsTextarea(idLang), false);
  }

  /**
   * Define the blacklisted words value in specific lang
   * @param page {Page} Browser tab
   * @param idLang {number} ID Lang
   * @param words {string} ID Lang
   * @returns {Promise<string>}
   */
  async setBlacklistedWords(page: Page, idLang: number, words: string): Promise<string> {
    await this.setValue(page, this.blacklistedWordsTextarea(idLang), words);
    await this.clickAndWaitForLoadState(page, this.saveFormButton);

    return this.getAlertSuccessBlockContent(page);
  }

  /**
   * Returns the field configuration depending the field label
   * @param field {SearchWeight}
   * @returns {string}
   */
  protected getWeightSelector(field: SearchWeight): string {
    let selField: string = '';

    switch (field) {
      case 'Product name weight':
        selField = 'PNAME';
        break;
      case 'Reference weight':
        selField = 'REF';
        break;
      case 'Short description weight':
        selField = 'SHORTDESC';
        break;
      case 'Description weight':
        selField = 'DESC';
        break;
      case 'Category weight':
        selField = 'CNAME';
        break;
      case 'Brand weight':
        selField = 'MNAME';
        break;
      case 'Tags weight':
        selField = 'TAG';
        break;
      case 'Attributes weight':
        selField = 'ATTRIBUTE';
        break;
      case 'Features weight':
        selField = 'FEATURE';
        break;
      default:
        throw new Error(`The field "${field}" is not managed`);
    }

    return selField;
  }

  /**
   * Get Weight Input Value
   * @param page {Page} Browser tab
   * @param field {SearchWeight} Name of the field
   * @returns {Promise<number>}
   */
  async getWeightInputValue(page: Page, field: SearchWeight): Promise<number> {
    return parseInt(await this.getInputValue(page, this.weightInputValue(this.getWeightSelector(field))), 10);
  }

  /**
   * Set Weight Input Value
   * @param page {Page} Browser tab
   * @param field {SearchWeight} Name of the field
   * @param value {number} Value of the field
   * @returns {Promise<string>}
   */
  async setWeightInputValue(page: Page, field: SearchWeight, value: number): Promise<string> {
    await this.setInputValue(page, this.weightInputValue(this.getWeightSelector(field)), value.toString());
    await page.locator(this.weightSaveFormButton).click();

    return this.getAlertSuccessBlockContent(page);
  }
}

const boSearchPage = new BOSearchPage();
export {boSearchPage, BOSearchPage};
