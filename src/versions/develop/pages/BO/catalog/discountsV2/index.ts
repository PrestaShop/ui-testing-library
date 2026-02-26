import {type BODiscountsPageInterface} from '@interfaces/BO/catalog/discountsV2';
import BOBasePage from '@pages/BO/BOBasePage';
import {type Page} from '@playwright/test';

/**
 * Discounts page, contains functions that can be used on the page
 * @class
 * @extends BOBasePage
 */
class BODiscountsPage extends BOBasePage implements BODiscountsPageInterface {
  public readonly pageTitle: string;

  private readonly addNewDiscountButton: string;

  private readonly createDiscountModal: string;

  private readonly discountType: (id: number) => string;

  private readonly createDiscountButton: string;

  private readonly filterColumns: string;

  private readonly discountGridTable: string;

  private readonly filterResetButton: string;

  private readonly filterSearchButton: string;

  private readonly filterColumn: (filterBy: string) => string;

  private readonly tableColumnActions: string;

  private readonly tableColumnActionsRow: (row: number) => string;

  private readonly tableColumnActionsToggleButton: (row: number) => string;

  private readonly tableColumnActionsDeleteLink: (row: number) => string;

  private readonly deleteModalButtonYes: string;

  /**
   * @constructs
   * Setting up texts and selectors to use on discounts
   */
  constructor() {
    super();

    this.pageTitle = `Discounts • ${global.INSTALL.SHOP_NAME}`;

    // Selectors to add discount
    this.addNewDiscountButton = '#page-header-desc-configuration-add_discount';
    this.createDiscountModal = '#createDiscountModal';
    this.discountType = (row: number) => `#discount_type_selector_discount_type_selector div.form-check-radio:nth-child(${row})`;
    this.createDiscountButton = '#discountTypeSubmit';
    // Selector to filter the table
    this.discountGridTable = '#discount_grid_table';
    this.filterColumns = `${this.discountGridTable} tr.column-filters`;
    this.filterResetButton = `${this.filterColumns} button.grid-reset-button`;
    this.filterSearchButton = `${this.filterColumns} button.grid-search-button`;
    this.filterColumn = (filterBy: string) => `#discount_${filterBy}`;
    this.tableColumnActions = `${this.discountGridTable} td.column-actions`;
    this.tableColumnActionsRow = (row: number) => `${this.discountGridTable} tr:nth-child(${row})`;
    this.tableColumnActionsToggleButton = (row: number) => `${this.tableColumnActionsRow(row)} a.btn-link.dropdown-toggle`;
    this.tableColumnActionsDeleteLink = (row: number) => `${this.tableColumnActionsRow(row)} a.grid-delete-row-link`;
    this.deleteModalButtonYes = '#discount-grid-confirm-modal button.btn-confirm-submit';
  }

  // Methods
  /**
   * Click on create discount button
   * @param page {Page} Browser tab
   */
  async clickOnCreateDiscountButton(page: Page): Promise<void> {
    await page.locator(this.addNewDiscountButton).click();
    await page.waitForSelector(this.createDiscountModal);
  }

  /**
   * Select dicount type
   * @param page {Page} Browser tab
   * @param type {string} The type to select
   * @param typeRow {number}
   */
  async selectDiscountType(page: Page, type: string): Promise<void> {
    let i: number;

    switch (type) {
      case 'On cart amount':
        // @ts-ignore
        i = 1;
        break;
      case 'On catalog products':
        // @ts-ignore
        i = 2;
        break;
      case 'Free gift':
        // @ts-ignore
        i = 3;
        break;
      case 'On free shipping':
        // @ts-ignore
        i = 4;
        break;
      default:
        throw new Error(`Type ${type} was not found`);
    }

    await page.locator(this.discountType(i)).click();
    await this.clickAndWaitForURL(page, this.createDiscountButton);
  }

  /**
   * Reset all filters
   * @param page {Page} Browser tab
   * @return {Promise<void>}
   */
  async resetFilter(page: Page): Promise<void> {
    await this.clickAndWaitForLoadState(page, this.filterResetButton);
  }

  /**
   * Filter Discounts
   * @param page {Page} Browser tab
   * @param filterType {string} Input or select to choose method of filter
   * @param filterBy {string} Column to filter
   * @param value {string} Value to filter with
   * @return {Promise<void>}
   */
  async filterDiscount(page: Page, filterType: string, filterBy: string, value: string): Promise<void> {
    await this.resetFilter(page);
    const currentUrl: string = page.url();

    switch (filterType) {
      case 'input':
        await page.locator(this.filterColumn(filterBy)).fill(value);
        await this.clickAndWaitForURL(page, this.filterSearchButton);
        break;
      case 'select':
        await Promise.all([
          page.waitForURL((url: URL): boolean => url.toString() !== currentUrl),
          this.selectByVisibleText(page, this.filterColumn(filterBy), value === '1' ? 'Yes' : 'No'),
        ]);
        break;
      default:
        throw new Error(`Filter ${filterBy} was not found`);
    }
  }

  /**
   * Delete discount
   * @param page {Page} Browser tab
   * @param row {number} Row on table
   * @returns {Promise<string>}
   */
  async deleteDiscount(page: Page, row: number = 1): Promise<string> {
    await page.locator(this.tableColumnActionsToggleButton(row)).click();
    await this.waitForSelectorAndClick(page, this.tableColumnActionsDeleteLink(row));

    // Confirm delete action
    await this.clickAndWaitForURL(page, this.deleteModalButtonYes);

    // Get successful message
    return this.getAlertSuccessBlockParagraphContent(page);
  }
}

module.exports = new BODiscountsPage();
