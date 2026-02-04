import {type BOTagsPageInterface} from '@interfaces/BO/shopParameters/search/tags';
import BOBasePage from '@pages/BO/BOBasePage';
import {type Page} from '@playwright/test';

/**
 * Tags page, contains selectors and functions for the page
 * @class
 * @extends BOBasePage
 */
class BOTagsPage extends BOBasePage implements BOTagsPageInterface {
  public readonly pageTitle: string;

  protected addNewTagLink: string;

  protected gridForm: string;

  protected gridTableHeaderTitle: string;

  protected gridTableNumberOfTitlesSpan: string;

  protected gridTable: string;

  protected filterRow: string;

  protected filterColumn:(filterBy: string) => string;

  protected filterSearchButton: string;

  protected filterResetButton: string;

  protected tableBody: string;

  protected tableBodyRows: string;

  protected tableBodyRow: (row: number) => string;

  protected tableBodyColumn: (row: number) => string;

  protected tableColumnActions: (row: number) => string;

  protected tableColumnActionsEditLink: (row: number) => string;

  protected tableColumnActionsToggleButton: (row: number) => string;

  protected tableColumnActionsDropdownMenu: (row: number) => string;

  protected tableColumnActionsDeleteLink: (row: number) => string;

  protected tableHead: string;

  protected sortColumnDiv: (column: number|string) => string;

  protected deleteModalButtonYes: string;

  protected tableColumnId: (row: number) => string;

  protected tableColumnLanguage: (row: number) => string;

  protected tableColumnName: (row: number) => string;

  protected tableColumnProducts: (row: number) => string;

  protected paginationActiveLabel: string;

  protected paginationDiv: string;

  protected paginationDropdownButton: string;

  protected paginationPreviousLink: string;

  protected paginationNextLink: string;

  protected bulkActionBlock: string;

  protected bulkActionMenuButton: string;

  protected bulkActionDropdownMenu: string;

  protected selectAllLink: string;

  protected bulkDeleteLink: string;

  /**
   * @constructs
   * Setting up titles and selectors to use on tags page
   */
  constructor() {
    super();

    this.successfulMultiDeleteMessage = 'Successful deletion';
    this.alertSuccessBlock = 'div.alert[role=alert] div.alert-text';

    this.pageTitle = 'Tags •';

    // Selectors
    // Header links
    this.addNewTagLink = 'a#page-header-desc-configuration-addTag';

    // Form selectors
    this.gridForm = '#tag_grid_panel';
    this.gridTableHeaderTitle = `${this.gridForm} .card-header`;
    this.gridTableNumberOfTitlesSpan = `${this.gridTableHeaderTitle} .card-header-title`;

    // Table selectors
    this.gridTable = '#tag_grid_table';

    // Filter selectors
    this.filterRow = `${this.gridTable} tr.column-filters`;
    this.filterColumn = (filterBy: string) => `${this.filterRow} [name="tag[${filterBy}]"]`;
    this.filterSearchButton = `${this.filterRow} button.grid-search-button`;
    this.filterResetButton = `${this.filterRow} button.grid-reset-button`;

    // Table body selectors
    this.tableBody = `${this.gridTable} tbody`;
    this.tableBodyRows = `${this.tableBody} tr`;
    this.tableBodyRow = (row: number) => `${this.tableBodyRows}:nth-child(${row})`;
    this.tableBodyColumn = (row: number) => `${this.tableBodyRow(row)} td`;

    // Row actions selectors
    this.tableColumnActions = (row: number) => `${this.tableBodyColumn(row)}.column-actions`;
    this.tableColumnActionsEditLink = (row: number) => `${this.tableColumnActions(row)} a.grid-edit-row-link`;
    this.tableColumnActionsToggleButton = (row: number) => `${this.tableColumnActions(row)} a.dropdown-toggle`;
    this.tableColumnActionsDropdownMenu = (row: number) => `${this.tableColumnActions(row)} .dropdown-menu`;
    this.tableColumnActionsDeleteLink = (row: number) => `${this.tableColumnActionsDropdownMenu(row)} a.grid-delete-row-link`;

    // Sort Selectors
    this.tableHead = `${this.gridTable} thead`;
    this.sortColumnDiv = (column: number|string) => `${this.tableHead} tr.column-headers th `
      + `div.ps-sortable-column[data-sort-col-name="${column}"]`;

    // Confirmation modal
    this.deleteModalButtonYes = '#tag-grid-confirm-modal div.modal-footer button.btn-confirm-submit';

    // Columns selectors
    this.tableColumnId = (row: number) => `${this.tableBodyColumn(row)}.column-id_tag`;
    this.tableColumnLanguage = (row: number) => `${this.tableBodyColumn(row)}.column-language`;
    this.tableColumnName = (row: number) => `${this.tableBodyColumn(row)}.column-name`;
    this.tableColumnProducts = (row: number) => `${this.tableBodyColumn(row)}.column-num_products`;

    // Pagination selectors
    this.paginationDiv = `${this.gridForm} .pagination-block`;
    this.paginationActiveLabel = `${this.paginationDiv} ul.pagination + div .col-form-label`;
    this.paginationDropdownButton = `${this.paginationDiv} #paginator_select_page_limit`;
    this.paginationPreviousLink = `${this.gridForm} a[data-role="previous-page-link"]`;
    this.paginationNextLink = `${this.gridForm} a[data-role="next-page-link"]`;

    // Bulk actions selectors
    this.bulkActionBlock = '#tag_grid .btn-group';
    this.bulkActionMenuButton = `${this.bulkActionBlock} button.js-bulk-actions-btn`;
    this.bulkActionDropdownMenu = `${this.bulkActionBlock} div.dropdown-menu.show`;
    this.selectAllLink = `${this.filterRow} td[data-type="bulk_action"] #tag_grid_bulk_action_select_all`;
    this.bulkDeleteLink = `${this.bulkActionDropdownMenu} #tag_grid_bulk_action_delete_selection`;
  }

  /*
  Methods
   */

  /* Header methods */
  /**
   * Go to add new tag page
   * @param page {Page} Browser tab
   * @returns {Promise<void>}
   */
  async goToAddNewTagPage(page: Page): Promise<void> {
    await this.clickAndWaitForURL(page, this.addNewTagLink);
  }

  /* Filter methods */
  /**
   * Get Number of lines
   * @param page {Page} Browser tab
   * @return {Promise<number>}
   */
  async getNumberOfElementInGrid(page: Page): Promise<number> {
    return this.getNumberFromText(page, this.gridTableNumberOfTitlesSpan);
  }

  /**
   * Reset all filters
   * @param page {Page} Browser tab
   * @return {Promise<void>}
   */
  async resetFilter(page: Page): Promise<void> {
    if (!(await this.elementNotVisible(page, this.filterResetButton, 2000))) {
      await this.clickAndWaitForURL(page, this.filterResetButton);
    }
    await this.waitForVisibleSelector(page, this.filterSearchButton, 2000);
  }

  /**
   * Reset and get number of lines
   * @param page {Page} Browser tab
   * @return {Promise<number>}
   */
  async resetAndGetNumberOfLines(page: Page): Promise<number> {
    await this.resetFilter(page);

    return this.getNumberOfElementInGrid(page);
  }

  /**
   * Filter Table
   * @param page {Page} Browser tab
   * @param filterBy {string} Column to filter with
   * @param value {string} value to filter with
   * @return {Promise<void>}
   */
  async filterTable(page: Page, filterBy: string, value: string = ''): Promise<void> {
    if (filterBy === 'id_lang') {
      await page.locator(this.filterColumn(filterBy)).selectOption({
        label: value,
      });
    } else {
      await this.setValue(page, this.filterColumn(filterBy), value);
    }
    // click on search
    await this.clickAndWaitForURL(page, this.filterSearchButton);
  }

  /* Column methods */
  /**
   * Go to edit page
   * @param page {Page} Browser tab
   * @param row {number} Row on table
   * @return {Promise<void>}
   */
  async gotoEditTagPage(page: Page, row: number): Promise<void> {
    await this.clickAndWaitForURL(page, this.tableColumnActionsEditLink(row));
  }

  /**
   * Get text from column in table
   * @param page {Page} Browser tab
   * @param row {number} Row on table
   * @param columnName {string} Column name to get
   * @return {Promise<string>}
   */
  async getTextColumn(page: Page, row: number, columnName: string): Promise<string> {
    let columnSelector;

    switch (columnName) {
      case 'id_tag':
        columnSelector = this.tableColumnId(row);
        break;

      case 'id_lang':
        columnSelector = this.tableColumnLanguage(row);
        break;

      case 'name':
        columnSelector = this.tableColumnName(row);
        break;

      case 'num_products':
        columnSelector = this.tableColumnProducts(row);
        break;

      default:
        throw new Error(`Column ${columnName} was not found`);
    }

    return this.getTextContent(page, columnSelector);
  }

  /**
   * Delete tag from row
   * @param page {Page} Browser tab
   * @param row {number} Row on table
   * @return {Promise<string>}
   */
  async deleteTag(page: Page, row: number): Promise<string> {
    await Promise.all([
      page.locator(this.tableColumnActionsToggleButton(row)).click(),
      this.waitForVisibleSelector(page, this.tableColumnActionsDeleteLink(row)),
    ]);

    await page.locator(this.tableColumnActionsDeleteLink(row)).click();

    // Confirm delete action
    await this.clickAndWaitForURL(page, this.deleteModalButtonYes);

    // Get successful message
    return this.getAlertSuccessBlockContent(page);
  }

  // Sort methods
  /**
   * Get content from all rows
   * @param page {Page} Browser tab
   * @param columnName {string} Column name to get all rows column content
   * @return {Promise<Array<string>>}
   */
  async getAllRowsColumnContent(page: Page, columnName: string): Promise<string[]> {
    const rowsNumber = await this.getNumberOfElementInGrid(page);
    const allRowsContentTable: string[] = [];

    for (let i = 1; i <= rowsNumber; i++) {
      const rowContent = await this.getTextColumn(page, i, columnName);
      allRowsContentTable.push(rowContent);
    }

    return allRowsContentTable;
  }

  /**
   * Sort table by clicking on column name
   * @param page {Page} Browser tab
   * @param sortBy {string} Column name to sort with
   * @param sortDirection {string} Sort direction by asc or desc
   * @return {Promise<void>}
   */
  async sortTable(page: Page, sortBy: string, sortDirection: string): Promise<void> {
    const sortColumnDiv = `${this.sortColumnDiv(sortBy)}[data-sort-direction="${sortDirection}"]`;

    let i: number = 0;
    while (await this.elementNotVisible(page, sortColumnDiv, 2000) && i < 2) {
      await this.clickAndWaitForURL(page, this.sortColumnDiv(sortBy));
      i += 1;
    }

    await this.waitForVisibleSelector(page, sortColumnDiv, 20000);
  }

  /* Pagination methods */
  /**
   * Get pagination label
   * @param page {Page} Browser tab
   * @return {Promise<string>}
   */
  async getPaginationLabel(page: Page): Promise<string> {
    return this.getTextContent(page, this.paginationActiveLabel);
  }

  /**
   * Select pagination limit
   * @param page {Page} Browser tab
   * @param number {number} Pagination limit number to select
   * @returns {Promise<string>}
   */
  async selectPaginationLimit(page: Page, number: number): Promise<string> {
    await page.locator(this.paginationDropdownButton).selectOption({
      label: number.toString(),
    });
    await page.waitForTimeout(2000);

    return this.getPaginationLabel(page);
  }

  /**
   * Click on next
   * @param page {Page} Browser tab
   * @returns {Promise<string>}
   */
  async paginationNext(page: Page): Promise<string> {
    await this.clickAndWaitForURL(page, this.paginationNextLink);

    return this.getPaginationLabel(page);
  }

  /**
   * Click on previous
   * @param page {Page} Browser tab
   * @returns {Promise<string>}
   */
  async paginationPrevious(page: Page): Promise<string> {
    await this.clickAndWaitForURL(page, this.paginationPreviousLink);

    return this.getPaginationLabel(page);
  }

  /* Bulk actions methods */
  /**
   * Bulk delete tags
   * @param page {Page} Browser tab
   * @return {Promise<string>}
   */
  async bulkDelete(page: Page): Promise<string> {
    // Select all rows
    await page.locator(this.selectAllLink).click();
    // Wait for dropdown
    await page.locator(`${this.bulkActionMenuButton}:not([disabled])`).waitFor({
      state: 'visible',
    });
    // Display bulk menu
    await page.locator(this.bulkActionMenuButton).click();
    await page.locator(this.bulkActionDropdownMenu).waitFor({
      state: 'visible',
    });
    await page.locator(this.bulkDeleteLink).click();

    // Display modal
    await page.locator(this.deleteModalButtonYes).waitFor({
      state: 'visible',
    });
    await page.locator(this.deleteModalButtonYes).click();

    // Return successful message
    return this.getAlertSuccessBlockContent(page);
  }
}

const boTagsPage = new BOTagsPage();
export {boTagsPage, BOTagsPage};
