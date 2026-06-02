import {type BOPaymentPreferencesPageInterface} from '@interfaces/BO/payment/preferences';
import BOBasePage from '@pages/BO/BOBasePage';
import {type Page} from '@playwright/test';

/**
 * BO Payment preferences page, contains texts, selectors and functions to use on the page.
 * @class
 * @extends BOBasePage
 */
class BOPaymentPreferencesPage extends BOBasePage implements BOPaymentPreferencesPageInterface {
  public readonly pageTitle: string;

  private readonly euroCurrencyRestrictionsCheckbox: (paymentModule: string) => string;

  private readonly currencyRestrictionsSaveButton: string;

  private readonly paymentModuleCheckbox: (paymentModule: string, groupID: string) => string;

  private readonly countryRestrictionsCheckbox: (paymentModule: string, countryID: number) => string;

  private readonly groupRestrictionsSaveButton: string;

  private readonly groupRestrictionsTableRow: (row: number) => string;

  private readonly groupRestrictionsTableRows: string;

  private readonly carrierRestrictionsCheckbox: (paymentModule: string, carrierID: number) => string;

  private readonly carrierRestrictionSaveButton: string;

  /**
   * @constructs
   * Setting up texts and selectors to use
   */
  constructor() {
    super();

    this.pageTitle = 'Preferences •';

    // Selectors for currency restrictions
    this.euroCurrencyRestrictionsCheckbox = (paymentModule: string) => `#form_currency_restrictions_${paymentModule}_0`;
    this.currencyRestrictionsSaveButton = '#form-currency-restrictions-save-button';
    // Selectors for group restrictions
    this.paymentModuleCheckbox = (paymentModule: string, groupID: string) => `#form_group_restrictions_${paymentModule}`
      + `_${groupID}`;
    this.countryRestrictionsCheckbox = (paymentModule: string, countryID: number) => 'input[id^="form_country_restrictions_'
      + `${paymentModule}_"][value="${countryID}"]`;
    this.groupRestrictionsSaveButton = '#form-group-restrictions-save-button';
    // One row per customer group in the group restrictions table, the group name being the first cell.
    this.groupRestrictionsTableRows = 'div.card:has(#form-group-restrictions-save-button) table tbody tr';
    this.groupRestrictionsTableRow = (row: number) => `${this.groupRestrictionsTableRows}:nth-child(${row})`;
    // Selectors fot carrier restriction
    this.carrierRestrictionsCheckbox = (paymentModule: string, carrierID: number) => '#form_carrier_restrictions_'
      + `${paymentModule}_${carrierID}`;
    this.carrierRestrictionSaveButton = '#form-carrier-restrictions-save-button';
  }

  /*
  Methods
   */
  /**
   * Set currency restrictions
   * @param page {Page} Browser tab
   * @param paymentModule {string} Name of the module to set restriction on
   * @param valueWanted {boolean} True to allow the module for the currency
   * @returns {Promise<string>}
   */
  async setCurrencyRestriction(page: Page, paymentModule: string, valueWanted: boolean): Promise<string> {
    await this.waitForAttachedSelector(
      page,
      this.euroCurrencyRestrictionsCheckbox(paymentModule),
    );

    await this.setCheckedWithIcon(page, this.euroCurrencyRestrictionsCheckbox(paymentModule), valueWanted);

    await page.locator(this.currencyRestrictionsSaveButton).click();
    return this.getAlertSuccessBlockParagraphContent(page);
  }

  /**
   * Set group restrictions
   * @param page {Page} Browser tab
   * @param group {string} String of the group
   * @param paymentModule {string} Name of the module to set restriction on
   * @param valueWanted {boolean} True to allow the module for the group
   * @returns {Promise<string>}
   */
  async setGroupRestrictions(page: Page, group: string, paymentModule: string, valueWanted: boolean): Promise<string> {
    await this.waitForAttachedSelector(page, `${this.paymentModuleCheckbox(paymentModule, group)} + i`);
    await this.setCheckedWithIcon(page, this.paymentModuleCheckbox(paymentModule, group), valueWanted);

    await page.locator(this.groupRestrictionsSaveButton).click();
    return this.getAlertSuccessBlockParagraphContent(page);
  }

  /**
   * Set country restrictions
   * @param page {Page} Browser tab
   * @param countryID {number} Country position on the table
   * @param paymentModule {string} Name of the module to set restriction on
   * @param valueWanted {boolean} True to allow the module for the country
   * @returns {Promise<string>}
   */
  async setCountryRestriction(page: Page, countryID: number, paymentModule: string, valueWanted: boolean): Promise<string> {
    await this.waitForAttachedSelector(
      page,
      `${this.countryRestrictionsCheckbox(paymentModule, countryID)} + i`,
    );
    await this.setCheckedWithIcon(page, this.countryRestrictionsCheckbox(paymentModule, countryID), valueWanted);

    await page.locator(this.currencyRestrictionsSaveButton).click();
    return this.getAlertSuccessBlockParagraphContent(page);
  }

  /**
   * Set carrier restriction
   * @param page {Page} Browser tab
   * @param carrierID {number} Carrier position on the table
   * @param paymentModule {string} Name of the module to set restriction on
   * @param valueWanted {boolean} True to allow the module for the carrier
   * @return {Promise<string>}
   */
  async setCarrierRestriction(page: Page, carrierID: number, paymentModule: string, valueWanted: boolean): Promise<string> {
    await this.waitForAttachedSelector(
      page,
      `${this.carrierRestrictionsCheckbox(paymentModule, carrierID)} + i`,
    );
    await this.setCheckedWithIcon(page, this.carrierRestrictionsCheckbox(paymentModule, carrierID), valueWanted);

    await page.locator(this.carrierRestrictionSaveButton).click();
    return this.getAlertSuccessBlockParagraphContent(page);
  }

  /**
   * Get the names of the customer groups listed in the group restrictions table.
   * In a multishop context, only the groups of the currently selected shop should be listed.
   * @param page {Page} Browser tab
   * @returns {Promise<string[]>}
   */
  async getGroupRestrictionNames(page: Page): Promise<string[]> {
    await this.waitForVisibleSelector(page, this.groupRestrictionsSaveButton);

    const rowsNumber = await page.locator(this.groupRestrictionsTableRows).count();
    const groupNames: string[] = [];

    for (let row = 1; row <= rowsNumber; row++) {
      groupNames.push(await this.getTextContent(page, `${this.groupRestrictionsTableRow(row)} td:first-child`));
    }

    return groupNames;
  }
}

module.exports = new BOPaymentPreferencesPage();
