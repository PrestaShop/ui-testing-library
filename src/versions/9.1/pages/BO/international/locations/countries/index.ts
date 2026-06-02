import {type BOCountriesPageInterface} from '@interfaces/BO/international/locations/countries';
import {type Page} from '@playwright/test';
import {BOCountriesPage as BOCountriesPageVersion} from '@versions/develop/pages/BO/international/locations/countries';

class BOCountriesPage extends BOCountriesPageVersion implements BOCountriesPageInterface {
  /**
   * @constructs
   */
  constructor() {
    super();

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
}

const boCountriesPage = new BOCountriesPage();
export {boCountriesPage, BOCountriesPage};
