import {type BOTaxRulesPageInterface} from '@interfaces/BO/international/taxes/taxRules';
import BOBasePage from '@pages/BO/BOBasePage';
import {type Page} from '@playwright/test';

/**
 * Tax rules page, contains functions that can be used on the page
 * @class
 * @extends BOBasePage
 */
class BOTaxRulesPage extends BOBasePage implements BOTaxRulesPageInterface {
  public readonly pageTitle: string;

  public readonly successfulUpdateStatusMessage: string;

  protected addNewTaxRulesGroupLink: string;

  protected readonly gridForm: string;

  protected gridTableHeaderTitle: string;

  protected gridTableNumberOfTitlesSpan: string;

  protected gridTable: string;

  protected filterRow: string;

  protected filterColumn: (filterBy: string) => string;

  protected filterSearchButton: string;

  protected filterResetButton: string;

  protected tableBody: string;

  protected tableRow: (row: number) => string;

  protected editRowLink: (row: number) => string;

  protected tableBodyColumn: (row: number) => string;

  protected tableColumnId: (row: number) => string;

  protected tableColumnName: (row: number) => string;

  protected tableColumnActive: (row: number) => string;

  protected tableColumnCheckIcon: (row: number) => string;

  protected toggleDropDown: (row: number) => string;

  protected deleteRowLink: (row: number) => string;

  protected deleteModalButtonYes: string;

  protected tableHead: string;

  protected sortColumnDiv: (column: string) => string;

  protected sortColumnSpanButton: (column: string) => string;

  protected paginationActiveLabel: string;

  protected paginationDiv: string;

  protected paginationPreviousLink: string;

  protected paginationNextLink: string;

  protected bulkActionBlock: string;

  protected bulkActionMenuButton: string;

  protected bulkActionDropdownMenu: string;

  protected selectAllLink: string;

  protected bulkDeleteLink: string;

  protected bulkEnableLink: string;

  protected bulkDisableLink: string;

  private readonly modalConfirm: string;

  private readonly modalConfirmBtn: string;

  /**
   * @constructs
   * Setting up texts and selectors to use on tax rules page
   */
  constructor() {
    super();
    this.successfulUpdateStatusMessage = 'The status has been successfully updated.';
    this.successfulMultiDeleteMessage = 'Successful deletion';

    this.pageTitle = 'Tax Rules •';

    // Selectors
    // HEADER buttons
    this.addNewTaxRulesGroupLink = 'a#page-header-desc-configuration-add';

    // Form selectors
    this.gridForm = '#form-tax_rules_group';
    this.gridTableHeaderTitle = '#tax_rules_group_grid_panel .card-header';
    this.gridTableNumberOfTitlesSpan = `${this.gridTableHeaderTitle} .card-header-title`;
    this.gridTable = '#tax_rules_group_grid_table';

    // Filter selectors
    this.filterRow = `${this.gridTable} tr.column-filters`;
    this.filterColumn = (filterBy: string) => `${this.filterRow} [name='tax_rules_group[${filterBy}]']`;
    this.filterSearchButton = `${this.filterRow} .grid-search-button`;
    this.filterResetButton = `${this.filterRow} .grid-reset-button`;

    // Table rows and columns
    this.tableBody = `${this.gridTable} tbody`;
    this.tableRow = (row: number) => `${this.tableBody} tr:nth-child(${row})`;
    this.editRowLink = (row: number) => `${this.tableRow(row)} a.grid-edit-row-link`;
    this.tableBodyColumn = (row: number) => `${this.tableRow(row)} td`;

    // Columns selectors
    this.tableColumnId = (row: number) => `${this.tableBodyColumn(row)}.column-id_tax_rules_group`;
    this.tableColumnName = (row: number) => `${this.tableBodyColumn(row)}.column-name`;
    this.tableColumnActive = (row: number) => `${this.tableBodyColumn(row)}.column-active`;
    this.tableColumnCheckIcon = (row: number) => `${this.tableColumnActive(row)} .ps-switch`;

    // Bulk actions selectors
    this.toggleDropDown = (row: number) => `${this.tableRow(row)} a[data-toggle='dropdown']`;
    this.deleteRowLink = (row: number) => `${this.tableRow(row)} a.grid-delete-row-link`;

    // Confirmation modal
    this.deleteModalButtonYes = '#tax_rules_group-grid-confirm-modal .btn-confirm-submit';

    // Sort Selectors
    this.tableHead = `${this.gridTable} thead`;
    this.sortColumnDiv = (column: string) => `${this.tableHead} div.ps-sortable-column[data-sort-col-name='${column}']`;
    this.sortColumnSpanButton = (column: string) => `${this.sortColumnDiv(column)} span.ps-sort`;

    // Bulk actions selectors
    this.bulkActionBlock = '#tax_rules_group_grid';
    this.bulkActionMenuButton = `${this.bulkActionBlock} .js-bulk-actions-btn`;
    this.bulkActionDropdownMenu = `${this.bulkActionBlock} .dropdown-menu`;
    this.selectAllLink = `${this.filterRow} .grid_bulk_action_select_all`;
    this.bulkDeleteLink = `${this.bulkActionDropdownMenu} #tax_rules_group_grid_bulk_action_delete_selection`;
    this.bulkEnableLink = `${this.bulkActionDropdownMenu} #tax_rules_group_grid_bulk_action_enable_selection`;
    this.bulkDisableLink = `${this.bulkActionDropdownMenu} #tax_rules_group_grid_bulk_action_disable_selection`;

    // Pagination selectors
    this.paginationDiv = '#paginator_select_page_limit';
    this.paginationActiveLabel = `${this.bulkActionBlock} .col-form-label`;
    this.paginationNextLink = `${this.bulkActionBlock} [data-role=next-page-link]`;
    this.paginationPreviousLink = `${this.bulkActionBlock} [data-role=previous-page-link]`;

    // Modal
    this.modalConfirm = '#tax_rules_group-grid-confirm-modal';
    this.modalConfirmBtn = `${this.modalConfirm} .btn-confirm-submit`;
  }

  /*
  Methods
   */

  /**
   * Go to add tax Rules group Page
   * @param page {Page} Browser tab
   * @return {Promise<void>}
   */
  async goToAddNewTaxRulesGroupPage(page: Page): Promise<void> {
    await this.clickAndWaitForURL(page, this.addNewTaxRulesGroupLink);
  }

  /**
   * Go to edit tax rule page
   * @param page {Page} Browser tab
   * @param row {number} Row on table to edit
   * @returns {Promise<void>}
   */
  async goToEditTaxRulePage(page: Page, row: number = 1): Promise<void> {
    await this.clickAndWaitForURL(page, this.editRowLink(row));
  }

  /**
   * Reset filter
   * @param page {Page} Browser tab
   * @returns {Promise<void>}
   */
  async resetFilter(page: Page): Promise<void> {
    if (await this.elementVisible(page, this.filterResetButton, 2000)) {
      await page.locator(this.filterResetButton).click({
        position: {
          x: 2,
          y: 2,
        },
      });
      await this.elementNotVisible(page, this.filterResetButton, 2000);
    }
    await this.waitForVisibleSelector(page, this.filterSearchButton, 2000);
  }

  /**
   * Get number of element in grid
   * @param page {Page} Browser tab
   * @returns {Promise<number>}
   */
  async getNumberOfElementInGrid(page: Page): Promise<number> {
    return this.getNumberFromText(page, this.gridTableNumberOfTitlesSpan);
  }

  /**
   * Get text column from table
   * @param page {Page} Browser tab
   * @param row {number} Row on table
   * @param columnName {string} Column name to get text column from table
   * @returns {Promise<string>}
   */
  async getTextColumnFromTable(page: Page, row: number, columnName: string): Promise<string> {
    let columnSelector;

    switch (columnName) {
      case 'id_tax_rules_group':
        columnSelector = this.tableColumnId(row);
        break;

      case 'name':
        columnSelector = this.tableColumnName(row);
        break;

      case 'active':
        columnSelector = this.tableColumnActive(row);
        break;

      default:
        throw new Error(`Column ${columnName} was not found`);
    }

    if (columnName === 'active') {
      return (await this.getAttributeContent(
        page,
        `${columnSelector} input[checked]`,
        'value',
      ) === '1' ? 'Enabled' : 'Disabled');
    }

    return this.getTextContent(page, columnSelector);
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

  /**
   * Filter table
   * @param page {Page} Browser tab
   * @param filterType {string} Input or select to choose method of filter
   * @param filterBy {string} Column to filter
   * @param value {string} Value to filter with
   * @returns {Promise<void>}
   */
  async filterTable(page: Page, filterType: string, filterBy: string, value: string): Promise<void> {
    switch (filterType) {
      case 'input':
        await this.setValue(page, this.filterColumn(filterBy), value.toString());
        break;
      case 'select':
        await this.selectByVisibleText(page, this.filterColumn(filterBy), value ? 'Yes' : 'No');
        break;
      default:
        throw new Error(`Filter ${filterBy} was not found`);
    }
    // click on search
    await page.locator(this.filterSearchButton).click();
    await this.elementVisible(page, this.filterResetButton, 2000);
  }

  /**
   * Delete Tax Rule
   * @param page {Page} Browser tab
   * @param row {number} Row on table
   * @returns {Promise<string>}
   */
  async deleteTaxRule(page: Page, row: number = 1): Promise<string> {
    // Click on dropDown
    await page.locator(this.toggleDropDown(row)).click();
    // Click on delete
    await page.locator(this.deleteRowLink(row)).click();
    // Confirm delete action
    await this.clickAndWaitForURL(page, this.deleteModalButtonYes);

    // Get successful message
    return this.getAlertSuccessBlockParagraphContent(page);
  }

  // Sort methods
  /**
   * Get content from all rows
   * @param page {Page} Browser tab
   * @param columnName {string} Column name to get all rows column content
   * @return {Promise<string[]>}
   */
  async getAllRowsColumnContent(page: Page, columnName: string): Promise<string[]> {
    const rowsNumber: number = await this.getNumberOfElementInGrid(page);
    const allRowsContentTable: string[] = [];

    for (let i = 1; i <= rowsNumber; i++) {
      const rowContent = await this.getTextColumnFromTable(page, i, columnName);
      allRowsContentTable.push(rowContent);
    }

    return allRowsContentTable;
  }

  /**
   * Sort table by clicking on column name
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
   * @param number {number} Value of pagination limit to select
   * @returns {Promise<string>}
   */
  async selectPaginationLimit(page: Page, number: number): Promise<string> {
    const currentUrl: string = page.url();

    await Promise.all([
      this.selectByVisibleText(page, this.paginationDiv, number),
      page.waitForURL((url: URL): boolean => url.toString() !== currentUrl),
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
   * Delete tax rules by bulk action
   * @param page {Page} Browser tab
   * @returns {Promise<string>}
   */
  async bulkDeleteTaxRules(page: Page): Promise<string> {
    // Select all rows
    await this.bulkSelectRows(page);

    // Click on Button Bulk actions
    await page.locator(this.bulkActionMenuButton).click();

    // Click on delete
    await page.locator(this.bulkDeleteLink).click();

    // Click on modal
    await page.locator(this.modalConfirm).waitFor({state: 'visible'});
    await page.locator(this.modalConfirmBtn).click();

    return this.getAlertSuccessBlockParagraphContent(page);
  }

  /**
   * Enable / disable tax rules by Bulk Actions
   * @param page {Page} Browser tab
   * @param enable {boolean} True if we need to bulk enable status, false if not
   * @returns {Promise<string>}
   */
  async bulkSetStatus(page: Page, enable: boolean = true): Promise<string> {
    // Select all rows
    await this.bulkSelectRows(page);

    // Click on Button Bulk actions
    await page.locator(this.bulkActionMenuButton).click();

    // Click to change status
    await this.clickAndWaitForURL(page, enable ? this.bulkEnableLink : this.bulkDisableLink);

    return this.getAlertSuccessBlockParagraphContent(page);
  }

  /**
   * Get value of columns enabled
   * @param page {Page} Browser tab
   * @param row {number} Row on table
   * @return {Promise<boolean>}
   */
  async getStatus(page: Page, row: number): Promise<boolean> {
    // Get value of the check input
    const inputValue = await this.getAttributeContent(
      page,
      `${this.tableColumnCheckIcon(row)} input:checked`,
      'value',
    );

    // Return status=false if value='0' and true otherwise
    return (inputValue !== '0');
  }

  /**
   * Quick edit toggle column value
   * @param page {Page} Browser tab
   * @param row {number} Row on table
   * @param valueWanted {boolean} True if we need to enable status, false if not
   * @return {Promise<boolean>}, return true if action is done, false otherwise
   */
  async setStatus(page: Page, row: number, valueWanted: boolean = true): Promise<boolean> {
    if (await this.getStatus(page, row) !== valueWanted) {
      await page
        .locator(this.tableColumnCheckIcon(row))
        .first()
        .evaluate((el: HTMLElement) => el.click());

      return true;
    }
    return false;
  }
}

const boTaxRulesPage = new BOTaxRulesPage();
export {boTaxRulesPage, BOTaxRulesPage};
