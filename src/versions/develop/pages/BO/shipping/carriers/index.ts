import {type BOCarriersPageInterface} from '@interfaces/BO/shipping/carriers';
import BOBasePage from '@pages/BO/BOBasePage';
import type {Page} from '@playwright/test';

/**
 * Carriers page, contains selectors and functions for the page
 * @class
 * @extends BOBasePage
 */
class BOCarriersPage extends BOBasePage implements BOCarriersPageInterface {
  public readonly pageTitle: string;

  public readonly successfulUpdateStatusMessage: string;

  protected addNewCarrierLink: string;

  protected gridForm: string;

  protected gridTableHeaderTitle: string;

  protected gridTableNumberOfTitlesSpan: string;

  protected gridTable: string;

  protected filterRow: string;

  protected filterColumn: (filterBy: string) => string;

  protected filterSearchButton: string;

  protected filterResetButton: string;

  protected tableBody: string;

  protected tableBodyRows: string;

  protected tableBodyRow: (row: number) => string;

  protected tableBodyColumn: (row: number) => string;

  private readonly tableBodyColumnNth: (column: number) => string;

  private readonly tableColumnHandle: (row: number) => string;

  protected tableColumnId: (row: number) => string;

  protected tableColumnName: (row: number) => string;

  protected tableColumnDelay: (row: number) => string;

  protected tableColumnActive: (row: number) => string;

  protected enableColumnValidIcon: (row: number) => string;

  protected tableColumnIsFree: (row: number) => string;

  protected tableColumnIsFreeIcon: (row: number) => string;

  protected tableColumnPosition: (row: number) => string;

  protected tableColumnActions: (row: number) => string;

  protected tableColumnActionsEditLink: (row: number) => string;

  protected tableColumnActionsToggleButton: (row: number) => string;

  protected tableColumnActionsDropdownMenu: (row: number) => string;

  protected tableColumnActionsDeleteLink: (row: number) => string;

  protected readonly tableHead: string;

  private readonly sortColumnDiv: (column: string) => string;

  private readonly sortColumnSpanButton: (column: string) => string;

  private readonly paginationLimitSelect: string;

  protected paginationActiveLabel: string;

  protected paginationPreviousLink: string;

  protected paginationNextLink: string;

  protected deleteModalButtonYes: string;

  protected bulkActionBlock: string;

  protected bulkActionMenuButton: string;

  protected bulkActionDropdownMenu: string;

  protected selectAllLink: string;

  protected bulkEnableLink: string;

  protected bulkDisableLink: string;

  protected bulkDeleteLink: string;

  private readonly bulkDeleteConfirmDeleteModal: string;

  private readonly bulkDeleteConfirmDeleteButton: string;

  /**
   * @constructs
   * Setting up titles and selectors to use on carriers page
   */
  constructor() {
    super();

    this.pageTitle = 'Carriers •';
    this.successfulUpdateStatusMessage = 'The status has been successfully updated.';
    this.successfulMultiDeleteMessage = 'Successful deletion';

    // Selectors
    this.growlMessageBlock = '#growls .growl-message:last-of-type';

    // Header links
    this.addNewCarrierLink = 'a#page-header-desc-configuration-add';

    // Form selectors
    this.gridForm = '#carrier_grid_panel';
    this.gridTableHeaderTitle = '';
    this.gridTableNumberOfTitlesSpan = `${this.gridTableHeaderTitle} h3.card-header-title`;

    // Table selectors
    this.gridTable = '#carrier_grid_table';

    // Filter selectors
    this.filterRow = `${this.gridTable} tr.column-filters`;
    this.filterColumn = (filterBy: string) => `${this.filterRow} td[data-column-id="${filterBy}"] input, `
      + `${this.filterRow} td[data-column-id="${filterBy}"] select`;
    this.filterSearchButton = 'button.grid-search-button[name="carrier[actions][search]"]';
    this.filterResetButton = 'button.js-reset-search[name="carrier[actions][reset]"]';

    // Table body selectors
    this.tableBody = `${this.gridTable} tbody`;
    this.tableBodyRows = `${this.tableBody} tr`;
    this.tableBodyRow = (row: number) => `${this.tableBodyRows}:nth-child(${row})`;
    this.tableBodyColumn = (row: number) => `${this.tableBodyRow(row)} td`;
    this.tableBodyColumnNth = (column: number) => `${this.tableBodyRows} td:nth-child(${column})`;

    // Columns selectors
    this.tableColumnHandle = (row: number) => `${this.tableBodyColumn(row)}.column-position_handle .position-drag-handle`;
    this.tableColumnId = (row: number) => `${this.tableBodyColumn(row)}.column-id_carrier`;
    this.tableColumnName = (row: number) => `${this.tableBodyColumn(row)}.column-name`;
    this.tableColumnDelay = (row: number) => `${this.tableBodyColumn(row)}.column-delay`;
    this.tableColumnActive = (row: number) => `${this.tableBodyColumn(row)}.column-active`;
    this.enableColumnValidIcon = (row: number) => `${this.tableColumnActive(row)} .ps-switch`;
    this.tableColumnIsFree = (row: number) => `${this.tableBodyColumn(row)}.column-is_free`;
    this.tableColumnIsFreeIcon = (row: number) => `${this.tableColumnIsFree(row)} .ps-switch`;
    this.tableColumnPosition = (row: number) => `${this.tableBodyColumn(row)}.column-position`;

    // Row actions selectors
    this.tableColumnActions = (row: number) => `${this.tableBodyColumn(row)}.column-actions`;
    this.tableColumnActionsEditLink = (row: number) => `${this.tableColumnActions(row)} a.grid-edit-row-link`;
    this.tableColumnActionsToggleButton = (row: number) => `${this.tableColumnActions(row)} a.dropdown-toggle`;
    this.tableColumnActionsDropdownMenu = (row: number) => `${this.tableColumnActions(row)} .dropdown-menu`;
    this.tableColumnActionsDeleteLink = (row: number) => `${this.tableColumnActionsDropdownMenu(row)} .grid-delete-row-link`;

    // Sort Selectors
    this.tableHead = `${this.gridTable} thead`;
    this.sortColumnDiv = (column: string) => `${this.tableHead} th div[data-sort-col-name="${column}"]`;
    this.sortColumnSpanButton = (column: string) => `${this.sortColumnDiv(column)} span.ps-sort`;

    // Pagination selectors
    this.paginationLimitSelect = '#paginator_select_page_limit';
    this.paginationActiveLabel = 'div.pagination-block .col-form-label';
    this.paginationNextLink = 'div.pagination-block [data-role=next-page-link]';
    this.paginationPreviousLink = 'div.pagination-block [data-role=previous-page-link]';

    // Confirmation modal
    this.deleteModalButtonYes = '#carrier-grid-confirm-modal button.btn-confirm-submit';

    // Bulk actions selectors
    this.bulkActionBlock = '#carrier_grid';
    this.bulkActionMenuButton = `${this.bulkActionBlock} button.js-bulk-actions-btn`;
    this.bulkActionDropdownMenu = `${this.bulkActionBlock} .dropdown-menu`;
    this.selectAllLink = `${this.bulkActionBlock} tr.column-filters .grid_bulk_action_select_all`;
    this.bulkEnableLink = `${this.bulkActionDropdownMenu} #carrier_grid_bulk_action_enable_selection`;
    this.bulkDisableLink = `${this.bulkActionDropdownMenu} #carrier_grid_bulk_action_disable_selection`;
    this.bulkDeleteLink = `${this.bulkActionDropdownMenu} #carrier_grid_bulk_action_delete_selection`;
    this.bulkDeleteConfirmDeleteModal = '#carrier-grid-confirm-modal';
    this.bulkDeleteConfirmDeleteButton = `${this.bulkDeleteConfirmDeleteModal} button.btn-confirm-submit`;
  }

  /*
  Methods
   */
  /**
   * Go to add new carrier page
   * @param page {Page} Browser tab
   * @returns {Promise<void>}
   */
  async goToAddNewCarrierPage(page: Page): Promise<void> {
    await this.clickAndWaitForURL(page, this.addNewCarrierLink);
  }

  /* Filter methods */

  /**
   * Get Number of carriers
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
   * Reset and get number of image types
   * @param page {Page} Browser tab
   * @return {Promise<number>}
   */
  async resetAndGetNumberOfLines(page: Page): Promise<number> {
    await this.resetFilter(page);
    return this.getNumberOfElementInGrid(page);
  }

  /**
   * Filter carriers table
   * @param page {Page} Browser tab
   * @param filterType {string} Type of the filter (input or select)
   * @param filterBy {string} Value to use for the select type filter
   * @param value {string|number} Value for the select filter
   * @return {Promise<void>}
   */
  async filterTable(page: Page, filterType: string, filterBy: string, value: string): Promise<void> {
    switch (filterType) {
      case 'input':
        await this.setValue(page, this.filterColumn(filterBy), value);
        await this.clickAndWaitForURL(page, this.filterSearchButton);
        break;

      case 'select':
        await this.selectByVisibleText(page, this.filterColumn(filterBy), value === '1' ? 'Yes' : 'No');
        await this.clickAndWaitForURL(page, this.filterSearchButton);
        break;

      default:
        throw new Error(`Filter ${filterBy} was not found`);
    }
  }

  /* Column methods */

  /**
   * Go to edit carrier page
   * @param page {Page} Browser tab
   * @param row {number} Row index in the table
   * @return {Promise<void>}
   */
  async goToEditCarrierPage(page: Page, row: number): Promise<void> {
    await this.clickAndWaitForURL(page, this.tableColumnActionsEditLink(row));
  }

  /**
   * Get text from column in table
   * @param page {Page} Browser tab
   * @param row {number} Row index in the table
   * @param columnName {string} Column name in the table
   * @return {Promise<string>}
   */
  async getTextColumn(page: Page, row: number, columnName: string): Promise<string> {
    let columnSelector;

    switch (columnName) {
      case 'id_carrier':
        columnSelector = this.tableColumnId(row);
        break;

      case 'name':
        columnSelector = this.tableColumnName(row);
        break;

      case 'delay':
        columnSelector = this.tableColumnDelay(row);
        break;

      case 'active':
        columnSelector = this.tableColumnActive(row);
        break;

      case 'is_free':
        columnSelector = this.tableColumnIsFree(row);
        break;

      case 'a!position':
        columnSelector = this.tableColumnPosition(row);
        break;

      default:
        throw new Error(`Column ${columnName} was not found`);
    }

    if ((columnName === 'active') || (columnName === 'is_free')) {
      return (await this.getAttributeContent(
        page,
        `${columnSelector} input[checked]`,
        'value',
      ) === '1' ? 'Enabled' : 'Disabled');
    }
    return this.getTextContent(page, columnSelector);
  }

  /**
   * Delete carrier from row
   * @param page {Page} Browser tab
   * @param row {number} Row index in the table
   * @return {Promise<string>}
   */
  async deleteCarrier(page: Page, row: number): Promise<string> {
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

  // Sort methods
  /**
   * Get content from all rows
   * @param page {Page} Browser tab
   * @param columnName {string} Column name in the table
   * @return {Promise<string[]>}
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
   * @param sortBy {string} column to sort with
   * @param sortDirection {string} asc or desc
   * @return {Promise<void>}
   */
  async sortTable(page: Page, sortBy: string, sortDirection: string): Promise<void> {
    let columnSelector: string;
    let sortColumnSpanButton: string;

    switch (sortBy) {
      case 'id_carrier':
        columnSelector = this.sortColumnDiv('id_carrier');
        sortColumnSpanButton = this.sortColumnSpanButton(sortBy);
        break;

      case 'name':
        columnSelector = this.sortColumnDiv('name');
        sortColumnSpanButton = this.sortColumnSpanButton(sortBy);
        break;

      case 'a!position':
        columnSelector = this.sortColumnDiv('position');
        sortColumnSpanButton = this.sortColumnSpanButton('position');
        break;

      default:
        throw new Error(`Column ${sortBy} was not found`);
    }

    const sortColumnDiv = `${columnSelector}[data-sort-direction="${sortDirection}"]`;

    let i: number = 0;
    while (await this.elementNotVisible(page, sortColumnDiv, 2000) && i < 2) {
      await this.clickAndWaitForURL(page, sortColumnSpanButton);
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
    const label: string = await this.getTextContent(page, this.paginationActiveLabel);
    const regexMatch: RegExpMatchArray | null = label.match(/\(page\s+(\d+)\s+\//);

    if (regexMatch === null) {
      return '';
    }

    return regexMatch[1];
  }

  /**
   * Select pagination limit
   * @param page {Page} Browser tab
   * @param number {Number} The pagination number value
   * @returns {Promise<string>}
   */
  async selectPaginationLimit(page: Page, number: number): Promise<string> {
    const currentUrl: string = page.url();
    await Promise.all([
      this.selectByVisibleText(page, this.paginationLimitSelect, number),
      page.waitForURL((url: URL): boolean => url.toString() !== currentUrl, {waitUntil: 'domcontentloaded'}),
    ]);

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
   * Bulk delete carriers
   * @param page {Page} Browser tab
   * @return {Promise<string>}
   */
  async bulkDeleteCarriers(page: Page): Promise<string> {
    // Click on Select All
    await this.bulkSetSelection(page, true);
    // Click on Button Bulk actions
    await Promise.all([
      page.locator(this.bulkActionMenuButton).click(),
      this.waitForVisibleSelector(page, `${this.bulkActionMenuButton}[aria-expanded='true']`),
    ]);

    // Click on delete and wait for modal
    await Promise.all([
      page.locator(this.bulkDeleteLink).click(),
      this.waitForVisibleSelector(page, `${this.bulkDeleteConfirmDeleteModal}.show`),
    ]);

    await this.clickAndWaitForURL(page, this.bulkDeleteConfirmDeleteButton);

    return this.getAlertSuccessBlockParagraphContent(page);
  }

  /**
   * Select all rows
   * @param page {Page} Browser tab
   * @param status {boolean} Select or Unselect all
   * @returns {Promise<void>}
   */
  async bulkSetSelection(page: Page, status: boolean): Promise<void> {
    let i: number = 0;

    while (await this.elementNotVisible(
      page,
      `${this.bulkActionMenuButton}${status ? ':not([disabled])' : '[disabled]'}`,
      2000,
    ) && i < 2) {
      await page.locator(this.selectAllLink).evaluate((el: HTMLElement) => el.click());
      i += 1;
    }
  }

  /**
   * Returns the number of selected rows
   * @param page {Page} Browser tab
   * @returns {Promise<number>}
   */
  async getSelectedBulkCount(page: Page): Promise<number> {
    return page.locator(`${this.tableBodyColumnNth(1)} input:checked`).count();
  }

  /**
   * Bulk set carriers status
   * @param page {Page} Browser tab
   * @param action {string} The action to perform in bulk
   * @returns {Promise<string>}
   */
  async bulkSetStatus(page: Page, action: string): Promise<string> {
    // Select all rows
    await this.bulkSetSelection(page, true);

    // Perform delete
    await Promise.all([
      page.locator(this.bulkActionMenuButton).click(),
      this.waitForVisibleSelector(page, this.bulkDeleteLink),
    ]);

    if (action === 'Enable') {
      await this.clickAndWaitForURL(page, this.bulkEnableLink);
    } else {
      await this.clickAndWaitForURL(page, this.bulkDisableLink);
    }

    return this.getAlertSuccessBlockParagraphContent(page);
  }

  /**
   * Get carrier status
   * @param page {Page} Browser tab
   * @param row {number} Row index in the table
   * @returns {Promise<boolean>}
   */
  async getStatus(page: Page, row: number): Promise<boolean> {
    // Get value of the check input
    const inputValue = await this.getAttributeContent(
      page,
      `${this.enableColumnValidIcon(row)} input:checked`,
      'value',
    );

    // Return status=false if value='0' and true otherwise
    return (inputValue !== '0');
  }

  /**
   * Is free shipping
   * @param page {Page} Browser tab
   * @param row {number} Row index in the table
   * @returns {Promise<boolean>}
   */
  async isFreeShipping(page: Page, row: number = 1): Promise<boolean> {
    // Get value of the check input
    const inputValue = await this.getAttributeContent(
      page,
      `${this.tableColumnIsFreeIcon(row)} input:checked`,
      'value',
    );

    // Return status=false if value='0' and true otherwise
    return (inputValue !== '0');
  }

  /**
   * Set carriers status
   * @param page {Page} Browser tab
   * @param row {number} Row index in the table
   * @param valueWanted {boolean} The carrier status value
   * @return {Promise<boolean>}, true if click has been performed
   */
  async setStatus(page: Page, row: number = 1, valueWanted: boolean = true): Promise<boolean> {
    await this.waitForVisibleSelector(page, this.tableColumnActive(row), 2000);

    if (await this.getStatus(page, row) !== valueWanted) {
      await page.locator(this.tableColumnActive(row)).click();
      return true;
    }

    return false;
  }

  /**
   * Set free shipping status
   * @param page {Page} Browser tab
   * @param row {number} Row index in the table
   * @param valueWanted {boolean} The carrier status value
   * @return {Promise<boolean>}
   */
  async setFreeShippingStatus(page: Page, row: number = 1, valueWanted: boolean = true): Promise<boolean> {
    await this.waitForVisibleSelector(page, this.tableColumnIsFree(row), 2000);

    if (await this.isFreeShipping(page, row) !== valueWanted) {
      await page.locator(this.tableColumnIsFree(row)).click();
      return true;
    }

    return false;
  }

  /**
   * Change carrier position
   * @param page {Page} Browser tab
   * @param actualPosition {number} The actual row position
   * @param newPosition {number} The new position for the row
   * @return {Promise<string>}
   */
  async changePosition(page: Page, actualPosition: number, newPosition: number): Promise<string | null> {
    await this.dragAndDropSlowly(page, this.tableColumnHandle(actualPosition), this.tableBodyRow(newPosition));
    await page.waitForTimeout(6000);

    return this.getAlertSuccessBlockParagraphContent(page, 3000);
  }
}

const boCarriersPage = new BOCarriersPage();
export {boCarriersPage, BOCarriersPage};
