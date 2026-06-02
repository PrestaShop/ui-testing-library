import {type BOCountriesPageInterface} from '@interfaces/BO/international/locations/countries';
import BOBasePage from '@pages/BO/BOBasePage';
import {type Page} from '@playwright/test';

/**
 * Countries page, contains functions that can be used on the page
 * @class
 * @extends BOBasePage
 */
class BOCountriesPage extends BOBasePage implements BOCountriesPageInterface {
  public readonly pageTitle: string;

  public settingsUpdateMessage: string;

  protected addNewCountryButton: string;

  protected gridForm: string;

  protected gridTableHeaderTitle: string;

  protected gridTableNumberOfTitlesSpan: string;

  protected gridTable: string;

  protected filterRow: string;

  protected filterColumn: (filterBy: string) => string;

  protected filterSearchButton: string;

  protected filterResetButton: string;

  protected tableBody: string;

  protected tableRow: (row: number) => string;

  protected tableColumn: (row: number, column: number) => string;

  protected tableColumnId: (row: number) => string;

  protected tableColumnName: (row: number) => string;

  protected tableColumnIsoCode: (row: number) => string;

  protected tableColumnCallPrefix: (row: number) => string;

  protected tableColumnZone: (row: number) => string;

  protected tableColumnStatusLink: (row: number) => string;

  protected tableColumnStatusEnableLink: (row: number) => string;

  protected tableColumnStatusDisableLink: (row: number) => string;

  protected editRowLink: (row: number) => string;

  protected bulkActionBlock: string;

  protected bulkActionMenuButton: string;

  protected bulkActionDropdownMenu: string;

  protected selectAllLink: string;

  protected bulkEnableLink: string;

  protected bulkDisableLink: string;

  protected bulkDeleteLink: string;

  protected tableHead: string;

  protected sortColumnDiv: (column: string) => string;

  private readonly sortColumnSpanButton: (column: string) => string;

  protected paginationDiv: string;

  private readonly paginationSelect: string;

  private readonly paginationLabel: string;

  protected paginationPreviousLink: string;

  protected paginationNextLink: string;

  protected countryForm: string;

  protected enableRestrictCountriesToggleLabel: (toggle: string) => string;

  protected saveButton: string;

  private readonly gridModal: string;

  private readonly gridModalConfirmBtn: string;

  /**
   * @constructs
   * Setting up texts and selectors to use on countries page
   */
  constructor() {
    super();

    this.pageTitle = 'Countries •';
    this.settingsUpdateMessage = 'Update successful';

    // Selectors
    // Header selectors
    this.addNewCountryButton = 'a#page-header-desc-configuration-add';

    // Form selectors
    this.gridForm = '#country_grid_panel';
    this.gridTableHeaderTitle = `${this.gridForm} .card-header`;
    this.gridTableNumberOfTitlesSpan = `${this.gridTableHeaderTitle} .card-header-title`;
    this.gridTable = '#country_grid_table';

    // Filter selectors
    this.filterRow = `${this.gridTable} tr.column-filters`;
    this.filterColumn = (filterBy: string) => `${this.filterRow} [name='country[${filterBy}]']`;
    this.filterSearchButton = `${this.filterRow} .grid-search-button`;
    this.filterResetButton = `${this.filterRow} div.js-grid-reset-button button.grid-reset-button`;

    // Table rows and columns
    this.tableBody = `${this.gridTable} tbody`;
    this.tableRow = (row: number) => `${this.tableBody} tr:nth-child(${row})`;
    this.tableColumn = (row: number, column: number) => `${this.tableRow(row)} td:nth-child(${column})`;

    // Columns selectors
    this.tableColumnId = (row: number) => `${this.tableRow(row)} td.column-id_country`;
    this.tableColumnName = (row: number) => `${this.tableRow(row)} td.column-name`;
    this.tableColumnIsoCode = (row: number) => `${this.tableRow(row)} td.column-iso_code`;
    this.tableColumnCallPrefix = (row: number) => `${this.tableRow(row)} td.column-call_prefix`;
    this.tableColumnZone = (row: number) => `${this.tableRow(row)} td.column-zone_name`;
    this.tableColumnStatusLink = (row: number) => `${this.tableRow(row)} td.column-active`;
    this.tableColumnStatusEnableLink = (row: number) => `${this.tableColumnStatusLink(row)} .ps-switch`;
    this.tableColumnStatusDisableLink = (row: number) => `${this.tableColumnStatusLink(row)} .ps-switch`;

    // Actions selectors
    this.editRowLink = (row: number) => `${this.tableRow(row)} a.grid-edit-row-link`;

    // Bulk Actions
    this.bulkActionBlock = 'div.btn-group';
    this.bulkActionMenuButton = `${this.gridForm} button.js-bulk-actions-btn`;
    this.bulkActionDropdownMenu = `${this.bulkActionBlock} div.dropdown-menu`;
    this.selectAllLink = `${this.filterRow} .grid_bulk_action_select_all`;
    this.bulkEnableLink = `${this.bulkActionDropdownMenu} #country_grid_bulk_action_enable_selection`;
    this.bulkDisableLink = `${this.bulkActionDropdownMenu} #country_grid_bulk_action_disable_selection`;
    this.bulkDeleteLink = `${this.bulkActionDropdownMenu} #country_grid_bulk_action_delete_selection`;

    // Sort Selectors
    this.tableHead = `${this.gridTable} thead`;
    this.sortColumnDiv = (column: string) => `${this.tableHead} div.ps-sortable-column[data-sort-col-name='${column}']`;
    this.sortColumnSpanButton = (column: string) => `${this.sortColumnDiv(column)} span.ps-sort`;

    // Pagination selectors
    this.paginationDiv = `${this.gridForm} .pagination-block`;
    this.paginationSelect = `${this.paginationDiv} #paginator_select_page_limit`;
    this.paginationLabel = `${this.paginationDiv} .col-form-label`;
    this.paginationPreviousLink = `${this.paginationDiv} a[data-role="previous-page-link"]`;
    this.paginationNextLink = `${this.paginationDiv} a[data-role="next-page-link"]`;

    // Country options selectors
    this.countryForm = '#configuration_country_options_form';
    this.enableRestrictCountriesToggleLabel = (toggle: string) => `${this.countryForm} `
      + `#country-options_restrict_country_to_delivery_${toggle}`;
    this.saveButton = `${this.countryForm} button#save-country-options-button`;

    // Modal
    this.gridModal = '#country-grid-confirm-modal';
    this.gridModalConfirmBtn = `${this.gridModal} div.modal-footer .btn-confirm-submit`;
  }

  /*
  Methods
   */
  /**
   * Go to add new country page
   * @param page {Page} Browser tab
   * @returns {Promise<void>}
   */
  async goToAddNewCountryPage(page: Page): Promise<void> {
    await this.clickAndWaitForURL(page, this.addNewCountryButton);
  }

  /**
   * Reset filter
   * @param page {Page} Browser tab
   * @returns {Promise<void>}
   */
  async resetFilter(page: Page): Promise<void> {
    if (await this.elementVisible(page, this.filterResetButton, 2000)) {
      await page.locator(this.filterResetButton).click();
      await this.elementNotVisible(page, this.filterResetButton, 2000);
    }
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
   * Reset and get number of lines
   * @param page {Page} Browser tab
   * @returns {Promise<number>}
   */
  async resetAndGetNumberOfLines(page: Page): Promise<number> {
    await this.resetFilter(page);
    return this.getNumberOfElementInGrid(page);
  }

  /**
   * Go to edit country page
   * @param page {Page} Browser tab
   * @param row {number} Row on table to edit
   * @returns {Promise<void>}
   */
  async goToEditCountryPage(page: Page, row: number = 1): Promise<void> {
    await this.clickAndWaitForURL(page, this.editRowLink(row));
  }

  /**
   * Get text column from table
   * @param page {Page} Browser tab
   * @param row {number} Row on table
   * @param columnName {string} Column name to get text content
   * @returns {Promise<string>}
   */
  async getTextColumnFromTable(page: Page, row: number, columnName: string): Promise<string> {
    let columnSelector;

    switch (columnName) {
      case 'id_country':
        columnSelector = this.tableColumnId(row);
        break;

      case 'name':
        columnSelector = this.tableColumnName(row);
        break;

      case 'iso_code':
        columnSelector = this.tableColumnIsoCode(row);
        break;

      case 'call_prefix':
        columnSelector = this.tableColumnCallPrefix(row);
        break;

      case 'zone_name':
        columnSelector = this.tableColumnZone(row);
        break;

      default:
        throw new Error(`Column ${columnName} was not found`);
    }

    return this.getTextContent(page, columnSelector);
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
    let textValue: string = value;

    switch (filterType) {
      case 'input':
        await this.setValue(page, this.filterColumn(filterBy), value);
        await this.clickAndWaitForURL(page, this.filterSearchButton);
        break;

      case 'select':
        if (filterBy === 'active') {
          textValue = value === '1' ? 'Yes' : 'No';
        }
        await this.selectByVisibleText(page, this.filterColumn(filterBy), textValue);
        await this.clickAndWaitForURL(page, this.filterSearchButton);
        break;

      default:
        throw new Error(`Filter ${filterBy} was not found`);
    }
  }

  /**
   * Get country status
   * @param page {Page} Browser tab
   * @param row {number} Row on table
   * @return {Promise<boolean>}
   */
  async getCountryStatus(page: Page, row: number): Promise<boolean> {
    // Get value of the check input
    const inputValue = await this.getAttributeContent(
      page,
      `${this.tableColumnStatusEnableLink(row)} input:checked`,
      'value',
    );

    // Return status=false if value='0' and true otherwise
    return (inputValue !== '0');
  }

  /**
   * Set country status
   * @param page {Page} Browser tab
   * @param row {number} Row on table
   * @param wantedStatus {boolean} True if we need to enable status, false if not
   * @return {Promise<void>}
   */
  async setCountryStatus(page: Page, row: number, wantedStatus: boolean): Promise<void> {
    await this.waitForVisibleSelector(page, this.tableColumnStatusLink(row), 2000);

    if (await this.getCountryStatus(page, row) !== wantedStatus) {
      await page.locator(this.tableColumnStatusLink(row)).click();
    }
  }

  /**
   * Get content from all rows
   * @param page {Page} Browser tab
   * @param columnName {string} Column name to get all content
   * @return {Promise<Array<string>>}
   */
  async getAllRowsColumnContent(page: Page, columnName: string): Promise<string[]> {
    const rowsNumber = await this.getNumberOfElementInGrid(page);
    const allRowsContentTable: string[] = [];

    for (let i = 1; i <= rowsNumber; i++) {
      let rowContent = await this.getTextColumnFromTable(page, i, columnName);

      if (rowContent === '-') {
        rowContent = '0';
      }

      allRowsContentTable.push(rowContent);
    }

    return allRowsContentTable;
  }

  /* Bulk actions methods */

  /**
   * Select all rows
   * @param page {Page} Browser tab
   * @return {Promise<void>}
   */
  async bulkSelectRows(page: Page): Promise<void> {
    await page.locator(this.selectAllLink).evaluate((el: HTMLElement) => el.click());
    await page.locator(`${this.bulkActionMenuButton}:not([disabled])`).waitFor({state: 'visible'});
  }

  /**
   * Delete countries by bulk action
   * @param page {Page} Browser tab
   * @returns {Promise<string>}
   */
  async deleteCountriesByBulkActions(page: Page): Promise<string> {
    // Select all rows
    await this.bulkSelectRows(page);

    // Click on Button Bulk actions
    await page.locator(this.bulkActionMenuButton).click();

    // Click on delete
    await page.locator(this.bulkDeleteLink).click();
    await page.locator(this.gridModal).waitFor({state: 'visible'});
    await page.locator(this.gridModalConfirmBtn).click();

    return this.getAlertSuccessBlockParagraphContent(page);
  }

  /**
   * Bulk set status
   * @param page {Page} Browser tab
   * @param wantedStatus {boolean} True if we need to bulk enable status, false if not
   * @return {Promise<void>}
   */
  async bulkSetStatus(page: Page, wantedStatus: boolean): Promise<void> {
    // Select all rows
    await this.bulkSelectRows(page);

    // Set status
    await Promise.all([
      page.locator(this.bulkActionMenuButton).click(),
      this.waitForVisibleSelector(page, this.bulkEnableLink),
    ]);

    await this.clickAndWaitForURL(
      page,
      wantedStatus ? this.bulkEnableLink : this.bulkDisableLink,
    );
  }

  /* Sort table method */

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

  /* Pagination methods */
  /**
   * Get pagination label
   * @param page {Page} Browser tab
   * @return {Promise<string>}
   */
  async getPaginationLabel(page: Page): Promise<string> {
    return this.getTextContent(page, this.paginationLabel);
  }

  /**
   * Select pagination limit
   * @param page {Page} Browser tab
   * @param number {number} Pagination limit number to select
   * @returns {Promise<number>}
   */
  async selectPaginationLimit(page: Page, number: number): Promise<string> {
    await this.selectByVisibleText(page, this.paginationSelect, number);

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

  // Country options
  /**
   * Enable/disable restrict country
   * @param page {Page} Browser tab
   * @param toEnable {boolean} True if we need to enable, false to disable
   * @returns {Promise<string>}
   */
  async setCountriesRestrictions(page: Page, toEnable: boolean = true): Promise<string> {
    await this.setChecked(page, this.enableRestrictCountriesToggleLabel(toEnable ? '1' : '0'));
    await page.locator(this.saveButton).click();
    await this.elementNotVisible(page, this.enableRestrictCountriesToggleLabel(!toEnable ? '1' : '0'));

    return this.getAlertSuccessBlockParagraphContent(page);
  }
}

const boCountriesPage = new BOCountriesPage();
export {boCountriesPage, BOCountriesPage};
