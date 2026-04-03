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

  private readonly filterLinkGroup: string;

  private readonly activeTab: string;

  private readonly allLink: string;

  private readonly discountTab: (linkGroup: string) => string;

  private readonly createDiscountModal: string;

  private readonly discountType: (type: string) => string;

  private readonly createDiscountButton: string;

  private readonly gridForm: string;

  private readonly gridTableHeaderTitle: string;

  private readonly filterColumns: string;

  private readonly discountGridPanel: string;

  private readonly discountGridHeaderTitle: string;

  private readonly discountGridTable: string;

  private readonly filterResetButton: string;

  private readonly filterSearchButton: string;

  private readonly filterColumn: (filterBy: string) => string;

  private readonly tableColumnActions: string;

  private readonly gridTableRow: (row: number) => string;

  private readonly gridTableColumn: (row: number, column: string) => string;

  private readonly tableColumnActionsToggleButton: (row: number) => string;

  private readonly tableColumnActionsEditLink: (row: number) => string;

  private readonly tableColumnActionsDeleteLink: (row: number) => string;

  private readonly deleteModalButtonYes: string;

  /**
   * @constructs
   * Setting up texts and selectors to use on discounts
   */
  constructor() {
    super();

    this.pageTitle = `Discounts • ${global.INSTALL.SHOP_NAME}`;

    // Discounts tab
    this.filterLinkGroup = '.filter-link-group';
    this.activeTab = `${this.filterLinkGroup} a[aria-pressed="true"]`;
    this.allLink = `${this.filterLinkGroup} a:nth-child(1)`;
    this.discountTab = (linkGroup: string) => `${this.filterLinkGroup} a[data-filter-value='${linkGroup}']`;

    // Selectors to add discount
    this.addNewDiscountButton = '#page-header-desc-configuration-add_discount';
    this.createDiscountModal = '#createDiscountModal';
    this.discountType = (type: string) => '#discount_type_selector_discount_type_selector div.form-check-radio:'
      + `has(input[value='${type}'])`;
    this.createDiscountButton = '#discountTypeSubmit';

    // Form selectors
    this.gridForm = '#discount_grid_panel';
    this.gridTableHeaderTitle = `${this.gridForm} .card-header-title`;

    // Selector to filter the table
    this.discountGridPanel = '#discount_grid_panel';
    this.discountGridHeaderTitle = `${this.discountGridPanel} h3.card-header-title`;
    this.discountGridTable = '#discount_grid_table';
    this.filterColumns = `${this.discountGridTable} thead tr.column-filters`;
    this.filterResetButton = `${this.filterColumns} button.grid-reset-button`;
    this.filterSearchButton = `${this.filterColumns} button.grid-search-button`;
    this.filterColumn = (filterBy: string) => `#discount_${filterBy}`;
    this.tableColumnActions = `${this.discountGridTable} td.column-actions`;
    this.gridTableRow = (row: number) => `${this.discountGridTable} tbody tr:nth-child(${row})`;
    this.gridTableColumn = (row: number, column: string) => `${this.gridTableRow(row)} td.column-${column}`;
    this.tableColumnActionsToggleButton = (row: number) => `${this.gridTableRow(row)} a.btn-link.dropdown-toggle`;
    this.tableColumnActionsEditLink = (row: number) => `${this.gridTableRow(row)} a.grid-edit-row-link`;
    this.tableColumnActionsDeleteLink = (row: number) => `${this.gridTableRow(row)} a.grid-delete-row-link`;
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
   * @return {Promise<void>}
   */
  async selectDiscountType(page: Page, type: string): Promise<void> {
    await page.locator(this.discountType(type)).click();
    await this.clickAndWaitForURL(page, this.createDiscountButton);
  }

  /**
   * Get active tab
   * @param page {Page} Browser tab
   * @return {Promise<string>}
   */
  async getActiveTab(page: Page): Promise<string> {
    return this.getTextContent(page, this.activeTab);
  }

  /**
   * Go to tab All/Active/Scheduled/Expired
   * @param page {Page} Browser tab
   * @param linkGroup {string} Can be All/Active/Scheduled/Expired
   * @return {Promise<void>}
   */
  async goToTab(page: Page, linkGroup: string): Promise<void> {
    if (linkGroup === 'All') {
      await this.clickAndWaitForLoadState(page, this.allLink);
    } else {
      await this.clickAndWaitForLoadState(page, this.discountTab(linkGroup));
    }
  }

  /**
   * Reset all filters
   * @param page {Page} Browser tab
   * @return {Promise<void>}
   */
  async resetFilter(page: Page): Promise<void> {
    if (await this.elementVisible(page, this.filterResetButton, 2000)) {
      await this.clickAndWaitForLoadState(page, this.filterResetButton);
      await this.elementNotVisible(page, this.filterResetButton, 2000);
    }
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

  /**
   * Get number of element in grid
   * @param page {Page} Browser tab
   * @returns {Promise<number>}
   */
  async getNumberOfElementInGrid(page: Page): Promise<number> {
    return this.getNumberFromText(page, this.discountGridHeaderTitle);
  }

  /**
   * Get text from Column
   * @param page {Page} Browser tab
   * @param columnName {string} Column name on table
   * @param row {number} Order row in table
   * @returns {Promise<string>}
   */
  async getTextColumn(page: Page, columnName: string, row: number = 1): Promise<string> {
    return this.getTextContent(page, this.gridTableColumn(row, columnName));
  }

  /**
   * Go to Edit Discount page
   * @param page {Page} Browser tab
   * @param row {number} Row on table
   * @returns {Promise<void>}
   */
  async goToEditDiscountPage(page: Page, row: number): Promise<void> {
    await this.clickAndWaitForURL(page, this.tableColumnActionsEditLink(row));
  }

  /**
   * Reset and get number of lines
   * @param page {Page} Browser tab
   * @returns {Promise<number>}
   */
  async resetAndGetNumberOfLines(page: Page): Promise<number> {
    await this.resetFilter(page);
    return this.getNumberOfElementInGrid(page);
  }
}

module.exports = new BODiscountsPage();
