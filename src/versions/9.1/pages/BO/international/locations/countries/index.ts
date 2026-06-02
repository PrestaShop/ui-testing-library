import {type BOCountriesPageInterface} from '@interfaces/BO/international/locations/countries';
import {type Page} from '@playwright/test';
import {BOCountriesPage as BOCountriesPageVersion} from '@versions/develop/pages/BO/international/locations/countries';

class BOCountriesPage extends BOCountriesPageVersion implements BOCountriesPageInterface {
  private readonly paginationActiveLabel: string;

  private readonly paginationDropdownButton: string;

  private readonly paginationItems: (number: number) => string;

  /**
   * @constructs
   */
  constructor() {
    super();

    this.settingsUpdateMessage = 'The settings have been successfully updated.';

    // Selectors
    // Header selectors
    this.addNewCountryButton = 'a[data-role=page-header-desc-country-link]';

    // Form selectors
    this.gridForm = '#form-country';
    this.gridTableHeaderTitle = `${this.gridForm} .panel-heading`;
    this.gridTableNumberOfTitlesSpan = `${this.gridTableHeaderTitle} span.badge`;
    this.gridTable = '#table-country';

    // Filter selectors
    this.filterRow = `${this.gridTable} tr.filter`;
    this.filterColumn = (filterBy: string) => `${this.filterRow} [name='countryFilter_${filterBy}']`;
    this.filterSearchButton = '#submitFilterButtoncountry';
    this.filterResetButton = 'button[name=\'submitResetcountry\']';

    // Table rows and columns
    this.tableBody = `${this.gridTable} tbody`;
    this.tableRow = (row: number) => `${this.tableBody} tr:nth-child(${row})`;
    this.tableColumn = (row: number, column: number) => `${this.tableRow(row)} td:nth-child(${column})`;

    // Columns selectors
    this.tableColumnId = (row: number) => this.tableColumn(row, 2);
    this.tableColumnName = (row: number) => this.tableColumn(row, 3);
    this.tableColumnIsoCode = (row: number) => this.tableColumn(row, 4);
    this.tableColumnCallPrefix = (row: number) => this.tableColumn(row, 5);
    this.tableColumnZone = (row: number) => this.tableColumn(row, 6);
    this.tableColumnStatusLink = (row: number) => `${this.tableColumn(row, 7)} a`;
    this.tableColumnStatusEnableLink = (row: number) => `${this.tableColumnStatusLink(row)}.action-enabled`;
    this.tableColumnStatusDisableLink = (row: number) => `${this.tableColumnStatusLink(row)}.action-disabled`;

    // Actions selectors
    this.editRowLink = (row: number) => `${this.tableRow(row)} a.edit`;

    // Bulk actions
    this.bulkActionBlock = 'div.bulk-actions';
    this.bulkActionMenuButton = `${this.gridForm} button.dropdown-toggle`;
    this.bulkActionDropdownMenu = `${this.bulkActionBlock} ul.dropdown-menu`;
    this.selectAllLink = `${this.bulkActionDropdownMenu} li:nth-child(1)`;
    this.bulkEnableLink = `${this.bulkActionDropdownMenu} li:nth-child(4)`;
    this.bulkDisableLink = `${this.bulkActionDropdownMenu} li:nth-child(5)`;
    this.bulkDeleteLink = `${this.bulkActionDropdownMenu} li:nth-child(7)`;

    // Sort selectors
    this.sortColumnDiv = (column: string) => `${this.tableHead} th:nth-child(${column})`;

    // Pagination selectors
    this.paginationActiveLabel = `${this.gridForm} ul.pagination.pull-right li.active a`;
    this.paginationDiv = `${this.gridForm} .pagination`;
    this.paginationDropdownButton = `${this.paginationDiv} .dropdown-toggle`;
    this.paginationItems = (number: number) => `${this.gridForm} .dropdown-menu a[data-items='${number}']`;
    this.paginationPreviousLink = `${this.gridForm} .icon-angle-left`;
    this.paginationNextLink = `${this.gridForm} .icon-angle-right`;

    // Country options selectors
    this.countryForm = '#country_form';
    this.enableRestrictCountriesToggleLabel = (toggle: string) => `${this.countryForm} `
      + `#PS_RESTRICT_DELIVERED_COUNTRIES_${toggle}`;
    this.saveButton = `${this.countryForm} button[name='submitOptionscountry']`;
  }

  /**
   * Select all rows
   * @param page {Page} Browser tab
   * @return {Promise<void>}
   */
  async bulkSelectRows(page: Page): Promise<void> {
    await page.locator(this.bulkActionMenuButton).click();

    await Promise.all([
      page.locator(this.selectAllLink).click(),
      this.waitForHiddenSelector(page, this.selectAllLink),
    ]);
  }

  /**
   * Delete countries by bulk action
   * @param page {Page} Browser tab
   * @returns {Promise<string>}
   */
  async deleteCountriesByBulkActions(page: Page): Promise<string> {
    await this.dialogListener(page, true);
    // Select all rows
    await this.bulkSelectRows(page);

    // Click on Button Bulk actions
    await page.locator(this.bulkActionMenuButton).click();

    // Click on delete
    await this.clickAndWaitForURL(page, this.bulkDeleteLink);
    return this.getAlertSuccessBlockContent(page);
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
    const currentUrl: string = page.url();
    let textValue: string = value;

    switch (filterType) {
      case 'input':
        await super.filterTable(page, filterType, filterBy, value);
        break;

      case 'select':
        if (filterBy === 'a!active') {
          textValue = value === '1' ? 'Yes' : 'No';
        }
        await Promise.all([
          this.selectByVisibleText(page, this.filterColumn(filterBy), textValue),
          page.waitForURL((url: URL): boolean => url.toString() !== currentUrl),
        ]);

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
    return this.elementVisible(page, this.tableColumnStatusEnableLink(row), 1000);
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

      case 'b!name':
        columnSelector = this.tableColumnName(row);
        break;

      case 'iso_code':
        columnSelector = this.tableColumnIsoCode(row);
        break;

      case 'call_prefix':
        columnSelector = this.tableColumnCallPrefix(row);
        break;

      case 'z!id_zone':
        columnSelector = this.tableColumnZone(row);
        break;

      default:
        throw new Error(`Column ${columnName} was not found`);
    }

    return this.getTextContent(page, columnSelector);
  }

  /**
   * Set country status
   * @param page {Page} Browser tab
   * @param row {number} Row on table
   * @param wantedStatus {boolean} True if we need to enable status, false if not
   * @return {Promise<void>}
   */
  async setCountryStatus(page: Page, row: number, wantedStatus: boolean): Promise<void> {
    if (wantedStatus !== await this.getCountryStatus(page, row)) {
      await page.locator(this.tableColumnStatusLink(row)).click();
    }
  }

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
   * @param number {number} Pagination number limit to select
   * @returns {Promise<string>}
   */
  async selectPaginationLimit(page: Page, number: number): Promise<string> {
    await this.waitForSelectorAndClick(page, this.paginationDropdownButton);
    await this.clickAndWaitForURL(page, this.paginationItems(number));

    return this.getPaginationLabel(page);
  }

  /**
   * Sort table
   * @param page {Page} Browser tab
   * @param sortBy {string} Column to sort with
   * @param sortDirection {string} Sort direction asc or desc
   * @return {Promise<void>}
   */
  async sortTable(page: Page, sortBy: string, sortDirection: string): Promise<void> {
    let columnSelector;

    switch (sortBy) {
      case 'id_country':
        columnSelector = this.sortColumnDiv('2');
        break;

      case 'b!name':
        columnSelector = this.sortColumnDiv('3');
        break;

      case 'iso_code':
        columnSelector = this.sortColumnDiv('4');
        break;

      case 'call_prefix':
        columnSelector = this.sortColumnDiv('5');
        break;

      case 'z!id_zone':
        columnSelector = this.sortColumnDiv('6');
        break;

      default:
        throw new Error(`Column ${sortBy} was not found`);
    }

    const sortColumnButton = `${columnSelector} i.icon-caret-${sortDirection}`;
    await this.clickAndWaitForURL(page, sortColumnButton);
  }

  // Country options
  /**
   * Enable/disable restrict country
   * @param page {Page} Browser tab
   * @param toEnable {boolean} True if we need to enable, false to disable
   * @returns {Promise<string>}
   */
  async setCountriesRestrictions(page: Page, toEnable: boolean = true): Promise<string> {
    await this.setChecked(page, this.enableRestrictCountriesToggleLabel(toEnable ? 'on' : 'off'));
    await page.locator(this.saveButton).click();
    await this.elementNotVisible(page, this.enableRestrictCountriesToggleLabel(!toEnable ? 'on' : 'off'));

    return this.getAlertSuccessBlockContent(page);
  }
}

const boCountriesPage = new BOCountriesPage();
export {boCountriesPage, BOCountriesPage};
