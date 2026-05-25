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

  public readonly settingsUpdateMessage: string;

  private readonly addNewCountryButton: string;

  private readonly gridPanel: string;

  private readonly gridTableNumberOfTitlesSpan: string;

  private readonly gridTable: string;

  private readonly filterRow: string;

  private readonly filterColumn: (filterBy: string) => string;

  private readonly filterSearchButton: string;

  private readonly filterResetButton: string;

  private readonly tableBody: string;

  private readonly tableBodyRows: string;

  private readonly tableBodyRow: (row: number) => string;

  private readonly tableBodyColumn: (row: number) => string;

  private readonly tableBodyColumnNth: (column: number) => string;

  private readonly tableColumnId: (row: number) => string;

  private readonly tableColumnName: (row: number) => string;

  private readonly tableColumnIsoCode: (row: number) => string;

  private readonly tableColumnCallPrefix: (row: number) => string;

  private readonly tableColumnZoneName: (row: number) => string;

  private readonly tableColumnActive: (row: number) => string;

  private readonly tableColumnActiveStatus: (row: number) => string;

  private readonly tableColumnActions: (row: number) => string;

  private readonly tableColumnActionsEditLink: (row: number) => string;

  private readonly tableColumnActionsToggleButton: (row: number) => string;

  private readonly tableColumnActionsDropdownMenu: (row: number) => string;

  private readonly tableColumnActionsDeleteLink: (row: number) => string;

  private readonly tableHead: string;

  private readonly sortColumnDiv: (column: string) => string;

  private readonly sortColumnSpanButton: (column: string) => string;

  private readonly paginationLimitSelect: string;

  private readonly paginationActiveLabel: string;

  private readonly paginationNextLink: string;

  private readonly paginationPreviousLink: string;

  private readonly deleteModalButtonYes: string;

  private readonly bulkActionBlock: string;

  private readonly bulkActionMenuButton: string;

  private readonly bulkActionDropdownMenu: string;

  private readonly selectAllLink: string;

  private readonly bulkEnableLink: string;

  private readonly bulkDisableLink: string;

  private readonly countryOptionsForm: string;

  private readonly enableRestrictCountriesToggleLabel: (toggle: string) => string;

  private readonly saveOptionsButton: string;

  /**
   * @constructs
   * Setting up texts and selectors to use on countries page
   */
  constructor() {
    super();

    this.pageTitle = 'Countries •';
    this.settingsUpdateMessage = 'Update successful';

    // Header selectors
    this.addNewCountryButton = 'a#page-header-desc-configuration-add';

    // Grid panel
    this.gridPanel = '#country_grid_panel';
    this.gridTableNumberOfTitlesSpan = `${this.gridPanel} .card-header-title`;

    // Table selectors
    this.gridTable = '#country_grid_table';

    // Filter selectors
    this.filterRow = `${this.gridTable} tr.column-filters`;
    this.filterColumn = (filterBy: string) => `${this.filterRow} td[data-column-id="${filterBy}"] input, `
      + `${this.filterRow} td[data-column-id="${filterBy}"] select`;
    this.filterSearchButton = 'button.grid-search-button[name="country[actions][search]"]';
    this.filterResetButton = 'button.js-reset-search[name="country[actions][reset]"]';

    // Table body selectors
    this.tableBody = `${this.gridTable} tbody`;
    this.tableBodyRows = `${this.tableBody} tr`;
    this.tableBodyRow = (row: number) => `${this.tableBodyRows}:nth-child(${row})`;
    this.tableBodyColumn = (row: number) => `${this.tableBodyRow(row)} td`;
    this.tableBodyColumnNth = (column: number) => `${this.tableBodyRows} td:nth-child(${column})`;

    // Column selectors
    this.tableColumnId = (row: number) => `${this.tableBodyColumn(row)}.column-id_country`;
    this.tableColumnName = (row: number) => `${this.tableBodyColumn(row)}.column-name`;
    this.tableColumnIsoCode = (row: number) => `${this.tableBodyColumn(row)}.column-iso_code`;
    this.tableColumnCallPrefix = (row: number) => `${this.tableBodyColumn(row)}.column-call_prefix`;
    this.tableColumnZoneName = (row: number) => `${this.tableBodyColumn(row)}.column-zone_name`;
    this.tableColumnActive = (row: number) => `${this.tableBodyColumn(row)}.column-active`;
    this.tableColumnActiveStatus = (row: number) => `${this.tableColumnActive(row)} .ps-switch`;

    // Row actions selectors
    this.tableColumnActions = (row: number) => `${this.tableBodyColumn(row)}.column-actions`;
    this.tableColumnActionsEditLink = (row: number) => `${this.tableColumnActions(row)} a.grid-edit-row-link`;
    this.tableColumnActionsToggleButton = (row: number) => `${this.tableColumnActions(row)} a.dropdown-toggle`;
    this.tableColumnActionsDropdownMenu = (row: number) => `${this.tableColumnActions(row)} .dropdown-menu`;
    this.tableColumnActionsDeleteLink = (row: number) => `${this.tableColumnActionsDropdownMenu(row)} .grid-delete-row-link`;

    // Sort selectors
    this.tableHead = `${this.gridTable} thead`;
    this.sortColumnDiv = (column: string) => `${this.tableHead} th div[data-sort-col-name="${column}"]`;
    this.sortColumnSpanButton = (column: string) => `${this.sortColumnDiv(column)} span.ps-sort`;

    // Pagination selectors
    this.paginationLimitSelect = '#paginator_select_page_limit';
    this.paginationActiveLabel = 'div.pagination-block .col-form-label';
    this.paginationNextLink = 'div.pagination-block [data-role=next-page-link]';
    this.paginationPreviousLink = 'div.pagination-block [data-role=previous-page-link]';

    // Delete confirmation modal
    this.deleteModalButtonYes = '#country-grid-confirm-modal button.btn-confirm-submit';

    // Bulk actions selectors
    this.bulkActionBlock = '#country_grid';
    this.bulkActionMenuButton = `${this.bulkActionBlock} button.js-bulk-actions-btn`;
    this.bulkActionDropdownMenu = `${this.bulkActionBlock} .dropdown-menu`;
    this.selectAllLink = `${this.bulkActionBlock} tr.column-filters .grid_bulk_action_select_all`;
    this.bulkEnableLink = `${this.bulkActionDropdownMenu} #country_grid_bulk_action_enable_selection`;
    this.bulkDisableLink = `${this.bulkActionDropdownMenu} #country_grid_bulk_action_disable_selection`;

    // Country options form selectors
    this.countryOptionsForm = '#configuration_country_options_form';
    this.enableRestrictCountriesToggleLabel = (toggle: string) => `${this.countryOptionsForm} `
      + `label[for='country_options_block_restrict_country_to_delivery_${toggle === 'on' ? '1' : '0'}']`;
    this.saveOptionsButton = '#save-country-options-button';
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

  /* Filter methods */

  /**
   * Get number of elements in grid
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
      await this.clickAndWaitForURL(page, this.filterResetButton, 'load', 30000, {
        position: {
          x: 2,
          y: 2,
        },
      });
    }
    await this.waitForVisibleSelector(page, this.filterSearchButton, 2000);
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
   * Go to edit country page
   * @param page {Page} Browser tab
   * @param row {number} Row on table to edit
   * @returns {Promise<void>}
   */
  async goToEditCountryPage(page: Page, row: number = 1): Promise<void> {
    await this.clickAndWaitForURL(page, this.tableColumnActionsEditLink(row));
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
        columnSelector = this.tableColumnZoneName(row);
        break;

      default:
        throw new Error(`Column ${columnName} was not found`);
    }

    return this.getTextContent(page, columnSelector);
  }

  /**
   * Get country status
   * @param page {Page} Browser tab
   * @param row {number} Row on table
   * @return {Promise<boolean>}
   */
  async getCountryStatus(page: Page, row: number): Promise<boolean> {
    const inputValue = await this.getAttributeContent(
      page,
      `${this.tableColumnActiveStatus(row)} input:checked`,
      'value',
    );

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
    await this.waitForVisibleSelector(page, this.tableColumnActive(row), 2000);

    if (wantedStatus !== await this.getCountryStatus(page, row)) {
      await page.locator(this.tableColumnActive(row)).click();
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
   * Select / unselect all rows via the bulk actions checkbox
   * @param page {Page} Browser tab
   * @param status {boolean} Select or unselect all
   * @returns {Promise<void>}
   */
  private async bulkSetSelection(page: Page, status: boolean): Promise<void> {
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
   * Bulk set status
   * @param page {Page} Browser tab
   * @param wantedStatus {boolean} True if we need to bulk enable status, false if not
   * @return {Promise<void>}
   */
  async bulkSetStatus(page: Page, wantedStatus: boolean): Promise<void> {
    // Select all rows
    await this.bulkSetSelection(page, true);

    // Click bulk actions button
    await Promise.all([
      page.locator(this.bulkActionMenuButton).click(),
      this.waitForVisibleSelector(page, this.bulkEnableLink),
    ]);

    await this.clickAndWaitForURL(
      page,
      wantedStatus ? this.bulkEnableLink : this.bulkDisableLink,
    );
  }

  /**
   * Delete a country from row actions
   * @param page {Page} Browser tab
   * @param row {number} Row on table
   * @returns {Promise<string>}
   */
  private async deleteCountry(page: Page, row: number): Promise<string> {
    await Promise.all([
      page.locator(this.tableColumnActionsToggleButton(row)).click(),
      this.waitForVisibleSelector(page, this.tableColumnActionsDeleteLink(row)),
    ]);

    await page.locator(this.tableColumnActionsDeleteLink(row)).click();

    // Confirm delete action
    await this.clickAndWaitForURL(page, this.deleteModalButtonYes);

    return this.getAlertSuccessBlockParagraphContent(page);
  }

  /**
   * Delete countries by deleting each visible row one by one
   * (the Symfony grid has no bulk-delete action for countries)
   * @param page {Page} Browser tab
   * @returns {Promise<string>}
   */
  async deleteCountriesByBulkActions(page: Page): Promise<string> {
    const nbRows = await this.getNumberOfElementInGrid(page);
    let textResult: string = '';

    for (let i = 0; i < nbRows; i++) {
      // Always delete the first row: after each delete + redirect the filter is
      // preserved in the session, so the next row becomes row 1.
      textResult = await this.deleteCountry(page, 1);
    }

    return textResult;
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
    let columnName: string;

    switch (sortBy) {
      case 'id_country':
        columnName = 'id_country';
        break;

      case 'name':
        columnName = 'name';
        break;

      case 'iso_code':
        columnName = 'iso_code';
        break;

      case 'call_prefix':
        columnName = 'call_prefix';
        break;

      case 'zone_name':
        columnName = 'zone_name';
        break;

      default:
        throw new Error(`Column ${sortBy} was not found`);
    }

    const sortColumnSpanButton = this.sortColumnSpanButton(columnName);
    const sortColumnDiv = `${this.sortColumnDiv(columnName)}[data-sort-direction="${sortDirection}"]`;

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
   * @param number {number} Pagination number limit to select
   * @returns {Promise<string>}
   */
  async selectPaginationLimit(page: Page, number: number): Promise<string> {
    const currentUrl: string = page.url();
    await Promise.all([
      this.selectByVisibleText(page, this.paginationLimitSelect, number),
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

  // Country options

  /**
   * Enable/disable restrict country
   * @param page {Page} Browser tab
   * @param toEnable {boolean} True if we need to enable, false to disable
   * @returns {Promise<string>}
   */
  async setCountriesRestrictions(page: Page, toEnable: boolean = true): Promise<string> {
    await page.locator(this.enableRestrictCountriesToggleLabel(toEnable ? 'on' : 'off')).click();
    await page.locator(this.saveOptionsButton).click();

    return this.getAlertSuccessBlockParagraphContent(page);
  }
}

const boCountriesPage = new BOCountriesPage();
export {boCountriesPage, BOCountriesPage};
