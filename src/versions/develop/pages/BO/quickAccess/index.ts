import {type BOQuickAccessInterface} from '@interfaces/BO/quickAccess';
import BOBasePage from '@pages/BO/BOBasePage';
import {type Page} from '@playwright/test';

/**
 * Quick access page, contains functions that can be used on the page
 * @class
 * @extends BOBasePage
 */
class BOQuickAccessPage extends BOBasePage implements BOQuickAccessInterface {
  public readonly pageTitle: string;

  protected addNewQuickAccessButton: string;

  protected gridPanel: string;

  protected gridTitle: string;

  protected gridTable: string;

  protected filterRow: string;

  protected filterColumn: (filterBy: string) => string;

  protected filterSearchButton: string;

  protected filterResetButton: string;

  private readonly tableBody: string;

  private readonly tableBodyRows: string;

  private readonly tableBodyRow: (row: number) => string;

  private readonly tableBodyColumn: (row: number) => string;

  private readonly tableColumnId: (row: number) => string;

  private readonly tableColumnName: (row: number) => string;

  private readonly tableColumnLink: (row: number) => string;

  private readonly tableColumnIsNewWindow: (row: number) => string;

  protected bulkActionBlock: string;

  protected bulkActionMenuButton: string;

  protected bulkActionDropdownMenu: string;

  protected selectAllLink: string;

  protected bulkDeleteLink: string;

  private readonly modalConfirmButton: string;

  /**
   * @constructs
   * Setting up texts and selectors to use on quick access page
   */
  constructor() {
    super();

    this.pageTitle = 'Quick Access •';

    // Selectors
    // Header selectors
    this.addNewQuickAccessButton = 'a#page-header-desc-configuration-add';

    // Panel
    this.gridPanel = '#quick_access_grid_panel';
    this.gridTitle = `${this.gridPanel} h3.card-header-title`;

    // Table selectors
    this.gridTable = '#quick_access_grid_table';

    // Filter selectors
    this.filterRow = `${this.gridTable} tr.column-filters`;
    this.filterColumn = (filterBy: string) => `${this.filterRow} input[name='quick_access[${filterBy}]']`;
    this.filterSearchButton = `${this.filterRow} button.grid-search-button`;
    this.filterResetButton = `${this.filterRow} button.grid-reset-button`;

    // Table body selectors
    this.tableBody = `${this.gridTable} tbody`;
    this.tableBodyRows = `${this.tableBody} tr`;
    this.tableBodyRow = (row: number) => `${this.tableBodyRows}:nth-child(${row})`;
    this.tableBodyColumn = (row: number) => `${this.tableBodyRow(row)} td`;

    // Columns selectors
    this.tableColumnId = (row: number) => `${this.tableBodyColumn(row)}:nth-child(2)`;
    this.tableColumnName = (row: number) => `${this.tableBodyColumn(row)}:nth-child(3)`;
    this.tableColumnLink = (row: number) => `${this.tableBodyColumn(row)}:nth-child(4)`;
    this.tableColumnIsNewWindow = (row: number) => `${this.tableBodyColumn(row)}:nth-child(5)`;

    // Bulk actions selectors
    this.bulkActionBlock = 'div#quick_access_grid';
    this.bulkActionMenuButton = 'button.js-bulk-actions-btn';
    this.bulkActionDropdownMenu = `${this.bulkActionBlock} div.dropdown-menu.show`;
    this.selectAllLink = `${this.filterRow} input#quick_access_grid_bulk_action_select_all`;
    this.bulkDeleteLink = `${this.bulkActionDropdownMenu} button#quick_access_grid_bulk_action_delete_selection`;
    this.modalConfirmButton = '#quick_access-grid-confirm-modal div.modal-footer button.btn-confirm-submit';
  }

  /*
  Methods
   */

  /**
   * Go to add new quick access page
   * @param page {Page} Browser tab
   * @returns {Promise<void>}
   */
  async goToAddNewQuickAccessPage(page: Page): Promise<void> {
    await this.clickAndWaitForURL(page, this.addNewQuickAccessButton);
  }

  /**
   * Get text from column in table
   * @param page {Page} Browser tab
   * @param row {number} Row index in the table
   * @param columnName {string} Column name in the table
   * @return {Promise<string>}
   */
  async getTextColumn(page: Page, row: number, columnName: string): Promise<string> {
    let columnSelector: string;

    switch (columnName) {
      case 'id_quick_access':
        columnSelector = this.tableColumnId(row);
        break;

      case 'name':
        columnSelector = this.tableColumnName(row);
        break;

      case 'link':
        columnSelector = this.tableColumnLink(row);
        break;

      case 'new_window':
        columnSelector = this.tableColumnIsNewWindow(row);
        break;

      default:
        throw new Error(`Column ${columnName} was not found`);
    }

    return this.getTextContent(page, columnSelector);
  }

  /**
   * Filter quick access table
   * @param page {Page} Browser tab
   * @param filterType {string} Type of the filter (input or select)
   * @param filterBy {string} Value to use for the select type filter
   * @param value {string|number} Value for the select filter
   * @return {Promise<void>}
   */
  async filterTable(page: Page, filterType: string, filterBy:string, value: string): Promise<void> {
    const currentUrl: string = page.url();

    switch (filterType) {
      case 'input':
        await this.setValue(page, this.filterColumn(filterBy), value);
        await this.clickAndWaitForURL(page, this.filterSearchButton);
        break;

      case 'select':
        await Promise.all([
          page.waitForURL((url: URL): boolean => url.toString() !== currentUrl),
          this.selectByVisibleText(page, this.filterColumn(filterBy), value ? 'Yes' : 'No'),
        ]);
        break;

      default:
        throw new Error(`Filter ${filterBy} was not found`);
    }
  }

  /**
   * Bulk delete link
   * @param page {Page} Browser tab
   * @return {Promise<string>}
   */
  async bulkDeleteQuickAccessLink(page: Page): Promise<string> {
    await page.locator(this.selectAllLink).click();
    await page.locator(this.bulkActionMenuButton).click();
    await this.waitForVisibleSelector(page, this.bulkActionDropdownMenu);
    await page.locator(this.bulkDeleteLink).click();
    await this.waitForVisibleSelector(page, this.modalConfirmButton);
    await page.locator(this.modalConfirmButton).click();

    // Return successful message
    return this.getAlertSuccessBlockParagraphContent(page);
  }

  /**
   * Reset input filters
   * @param page {Page} Browser tab
   * @returns {Promise<void>}
   */
  async resetFilter(page: Page): Promise<void> {
    if (await this.elementVisible(page, this.filterResetButton, 2000)) {
      await this.clickAndWaitForURL(page, this.filterResetButton);
    }
  }

  /**
   * Get number of elements in grid
   * @param page {Page} Browser tab
   * @returns {Promise<number>}
   */
  async getNumberOfElementInGrid(page: Page): Promise<number> {
    return this.getNumberFromText(page, this.gridTitle);
  }
}

const boQuickAccessPage = new BOQuickAccessPage();
export {boQuickAccessPage, BOQuickAccessPage};
