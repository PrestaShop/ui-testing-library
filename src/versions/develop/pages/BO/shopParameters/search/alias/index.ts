import {BOSearchAliasPageInterface} from '@interfaces/BO/shopParameters/search/alias';
import BOBasePage from '@pages/BO/BOBasePage';
import type {Page} from 'playwright';

/**
 * Search page, contains selectors and functions for the page
 * @class
 * @extends BOBasePage
 */
class BOSearchAliasPage extends BOBasePage implements BOSearchAliasPageInterface {
  public readonly pageTitle: string;

  public readonly successfulUpdateStatusMessage: string;

  public readonly settingsUpdateMessage: string;

  public updateSuccessMessage: string;

  public readonly errorFillFieldMessage: string;

  public readonly errorMaxWordLengthInvalidMessage: string;

  protected addNewAliasLink: string;

  protected gridForm: string;

  protected gridTableHeaderTitle: string;

  protected gridTableNumberOfTitlesSpan: string;

  protected gridTable: string;

  protected filterRow: string;

  protected filterColumn: (filterBy: string) => string;

  protected filterSearchButton: string;

  protected filterResetButton: string;

  private readonly tableBody: string;

  private readonly tableBodyRows: string;

  private readonly tableBodyRow: (row: number) => string;

  protected tableBodyColumn: (row: number) => string;

  protected tableColumnActions: (row: number) => string;

  protected tableColumnActionsEditLink: (row: number) => string;

  protected tableColumnActionsToggleButton: (row: number) => string;

  protected tableColumnActionsDropdownMenu: (row: number) => string;

  protected tableColumnActionsDeleteLink: (row: number) => string;

  protected deleteModalButtonYes;

  protected tableColumnAliases: (row: number) => string;

  protected tableColumnSearch: (row: number) => string;

  protected bulkActionBlock: string;

  protected bulkActionMenuButton: string;

  protected bulkActionDropdownMenu: string;

  protected selectAllLink: string;

  protected bulkDeleteLink: string;

  private readonly confirmDeleteModal: string;

  private readonly confirmDeleteButton: string;

  protected paginationDiv: string;

  protected paginationLimitSelect: string;

  protected paginationLabel: string;

  protected paginationNextLink: string;

  protected paginationPreviousLink: string;

  protected tableHead: string;

  private readonly sortColumnDiv: (column: string) => string;

  private readonly sortColumnSpanButton: (column: string) => string;

  /**
   * @constructs
   * Setting up titles and selectors to use on search page
   */
  constructor() {
    super();

    this.pageTitle = `Aliases • ${global.INSTALL.SHOP_NAME}`;
    this.successfulCreationMessage = 'Successful creation';
    this.successfulUpdateStatusMessage = 'The status has been successfully updated.';
    this.updateSuccessMessage = 'Successful update';
    this.settingsUpdateMessage = 'The settings have been successfully updated.';
    this.errorFillFieldMessage = 'Please fill in this field.';
    this.errorMaxWordLengthInvalidMessage = 'The Maximum word length (in characters) field is invalid.';

    // Selectors
    // Header links
    this.addNewAliasLink = 'a#page-header-desc-configuration-add';

    // Form selectors
    this.gridForm = '#alias_grid_panel';
    this.gridTableHeaderTitle = '';
    this.gridTableNumberOfTitlesSpan = `${this.gridForm} h3.card-header-title`;

    // Table selectors
    this.gridTable = '#alias_grid_table';

    // Filter selectors
    this.filterRow = `${this.gridTable} tr.column-filters`;
    this.filterColumn = (filterBy: string) => `${this.filterRow} [name='alias[${filterBy}]']`;
    this.filterSearchButton = 'button.grid-search-button[name="alias[actions][search]"]';
    this.filterResetButton = 'button.js-reset-search[name="alias[actions][reset]"]';

    // Table body selectors
    this.tableBody = `${this.gridTable} tbody`;
    this.tableBodyRows = `${this.tableBody} tr`;
    this.tableBodyRow = (row: number) => `${this.tableBodyRows}:nth-child(${row})`;
    this.tableBodyColumn = (row: number) => `${this.tableBodyRow(row)} td`;

    // Row actions selectors
    this.tableColumnActions = (row: number) => `${this.tableBodyColumn(row)} .btn-group-action`;
    this.tableColumnActionsEditLink = (row: number) => `${this.tableColumnActions(row)} a.grid-edit-row-link`;
    this.tableColumnActionsToggleButton = (row: number) => `${this.tableColumnActions(row)} a.dropdown-toggle`;
    this.tableColumnActionsDropdownMenu = (row: number) => `${this.tableColumnActions(row)} .dropdown-menu`;
    this.tableColumnActionsDeleteLink = (row: number) => `${this.tableColumnActionsDropdownMenu(row)} a.grid-delete-row-link`;

    // Confirmation modal
    this.deleteModalButtonYes = '#alias-grid-confirm-modal .modal-footer .btn-confirm-submit';

    // Columns selectors
    this.tableColumnAliases = (row: number) => `${this.tableBodyColumn(row)}.column-aliases`;
    this.tableColumnSearch = (row: number) => `${this.tableBodyColumn(row)}.column-search`;

    // Bulk actions selectors
    this.bulkActionBlock = 'div.bulk-actions';
    this.bulkActionMenuButton = '#alias_grid button.dropdown-toggle';
    this.bulkActionDropdownMenu = `${this.bulkActionBlock} ul.dropdown-menu`;
    this.selectAllLink = `${this.gridForm} tr.column-filters .md-checkbox i`;
    this.bulkDeleteLink = '#alias_grid_bulk_action_delete_selection';
    this.confirmDeleteModal = '#alias-grid-confirm-modal';
    this.confirmDeleteButton = `${this.confirmDeleteModal} button.btn-confirm-submit`;

    // Pagination selectors
    this.paginationDiv = `${this.gridForm} .pagination`;
    this.paginationLimitSelect = `${this.gridForm} #paginator_select_page_limit`;
    this.paginationLabel = `${this.gridForm} .col-form-label`;
    this.paginationNextLink = `${this.paginationDiv} a[data-role="next-page-link"]`;
    this.paginationPreviousLink = `${this.paginationDiv} a[data-role="previous-page-link"]`;

    // Sort Selectors
    this.tableHead = `${this.gridTable} thead`;
    this.sortColumnDiv = (column: string) => `${this.tableHead} div.ps-sortable-column[data-sort-col-name='${column}']`;
    this.sortColumnSpanButton = (column: string) => `${this.sortColumnDiv(column)} span.ps-sort`;
  }

  /*
  Methods
   */

  /* Header methods */
  /**
   * Go to add new alias page
   * @param page {Page} Browser tab
   * @returns {Promise<void>}
   */
  async goToAddNewAliasPage(page: Page): Promise<void> {
    await this.clickAndWaitForURL(page, this.addNewAliasLink);
  }

  /* Filter methods */
  /**
   * Get number of lines
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
   * Filter aliases
   * @param page {Page} Browser tab
   * @param filterType {string} Type of filter (input/select)
   * @param filterBy {string} Column to filter with
   * @param value {string} Value to filter
   * @return {Promise<void>}
   */
  async filterTable(page: Page, filterType: string, filterBy: string, value: string): Promise<void> {
    let filterBySelector: string = '';

    switch (filterType) {
      case 'input':
        switch (filterBy) {
          case 'alias':
          case 'search':
            filterBySelector = filterBy;
            break;
          default:
            throw new Error(`Column ${filterBy} was not found`);
        }
        await this.setValue(page, this.filterColumn(filterBySelector), value);
        await this.clickAndWaitForURL(page, this.filterSearchButton);
        break;

      default:
        throw new Error(`Filter ${filterType} was not found`);
    }
  }

  /* Column methods */
  /**
   * Go to edit page
   * @param page {Page} Browser tab
   * @param row {number} Row on table
   * @return {Promise<void>}
   */
  async gotoEditAliasPage(page: Page, row: number): Promise<void> {
    await this.clickAndWaitForURL(page, this.tableColumnActionsEditLink(row));
  }

  /**
   * Get text from column in table
   * @param page {Page} Browser tab
   * @param row {number} Row on table
   * @param columnName {string} Column name of the value to return
   * @return {Promise<string>}
   */
  async getTextColumn(page: Page, row: number, columnName: string): Promise<string> {
    let columnSelector;

    switch (columnName) {
      case 'alias':
        columnSelector = this.tableColumnAliases(row);
        break;

      case 'search':
        columnSelector = this.tableColumnSearch(row);
        break;

      default:
        throw new Error(`Column ${columnName} was not found`);
    }

    return this.getTextContent(page, columnSelector);
  }

  /**
   * Get content from all rows
   * @param page {Page} Browser tab
   * @param columnName {string} Column name to get all text content
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
   * Delete alias from row
   * @param page {Page} Browser tab
   * @param row {number} Row on table
   * @return {Promise<string>}
   */
  async deleteAlias(page: Page, row: number): Promise<string> {
    await Promise.all([
      page.locator(this.tableColumnActionsToggleButton(row)).click(),
      this.waitForVisibleSelector(page, this.tableColumnActionsDeleteLink(row)),
    ]);

    await page.locator(this.tableColumnActionsDeleteLink(row)).click();

    // Confirm delete action
    await this.clickAndWaitForURL(page, this.deleteModalButtonYes);

    // Get successful message
    return this.getAlertSuccessBlockParagraphContent(page);
  }

  /* Bulk actions methods */
  /**
   * Select all rows
   * @param page {Page} Browser tab
   * @return {Promise<void>}
   */
  async bulkSelectRows(page: Page): Promise<void> {
    await Promise.all([
      page.locator(this.selectAllLink).evaluate((el: HTMLElement) => el.click()),
      this.waitForVisibleSelector(page, `${this.bulkActionMenuButton}:not([disabled])`),
    ]);
  }

  /**
   * Delete by bulk action
   * @param page {Page} Browser tab
   * @returns {Promise<string>}
   */
  async bulkDeleteAliases(page: Page): Promise<string> {
    // Select all rows
    await this.bulkSelectRows(page);
    // Click on Button Bulk actions
    await Promise.all([
      page.locator(this.bulkActionMenuButton).click(),
      this.waitForVisibleSelector(page, `${this.bulkActionMenuButton}[aria-expanded='true']`),
    ]);
    // Click on delete and wait for modal
    await Promise.all([
      page.locator(this.bulkDeleteLink).click(),
      this.waitForVisibleSelector(page, `${this.confirmDeleteModal}.show`),
    ]);

    await page.locator(this.confirmDeleteButton).click();
    await this.elementNotVisible(page, this.confirmDeleteButton, 2000);

    return this.getAlertSuccessBlockParagraphContent(page);
  }

  /**
   * Enable / disable by Bulk Actions
   * @returns {Promise<string>}
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async bulkSetStatus(page: Page, enable: boolean = true): Promise<string> {
    return '';
  }

  /**
   * Get alias status
   * @return {Promise<boolean>}
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getStatus(page: Page, row: number): Promise<boolean> {
    return true;
  }

  /**
   * Quick edit toggle column value
   * @returns {Promise<boolean>} return true if action is done, false otherwise
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async setStatus(page: Page, row: number, valueWanted: boolean = true): Promise<boolean> {
    return true;
  }

  /* Pagination methods */
  /**
   * Get pagination label
   * @param page {Page} Browser tab
   * @return {Promise<string>}
   */
  async getPaginationLabel(page: Page): Promise<string> {
    const label: string = await this.getTextContent(page, this.paginationLabel);
    const regexMatch: RegExpMatchArray | null = label.match(/\(page\s+(\d+)\s+\//);

    if (regexMatch === null) {
      return '';
    }

    return regexMatch[1];
  }

  /**
   * Select pagination limit
   * @param page {Page} Browser tab
   * @param number {number} Value of pagination limit to select
   * @returns {Promise<string>}
   */
  async selectPaginationLimit(page: Page, number: number): Promise<string> {
    await page.locator(this.paginationLimitSelect).selectOption({
      value: number.toString(),
    });

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

  /* Sort methods */
  /**
   * Sort table
   * @param page {Page} Browser tab
   * @param sortBy {string} Column to sort with
   * @param sortDirection {string} Sort direction asc or desc
   * @return {Promise<void>}
   */
  async sortTable(page: Page, sortBy: string, sortDirection: string): Promise<void> {
    const sortColumnDiv = `${this.sortColumnDiv(sortBy)}[data-sort-direction='${sortDirection}']`;
    const sortColumnSpanButton = this.sortColumnSpanButton(sortBy);

    let i: number = 0;
    while (await this.elementNotVisible(page, sortColumnDiv, 2000) && i < 2) {
      await this.clickAndWaitForURL(page, sortColumnSpanButton);
      i += 1;
    }

    await this.waitForVisibleSelector(page, sortColumnDiv, 20000);
  }
}

const boSearchAliasPage = new BOSearchAliasPage();
export {boSearchAliasPage, BOSearchAliasPage};
