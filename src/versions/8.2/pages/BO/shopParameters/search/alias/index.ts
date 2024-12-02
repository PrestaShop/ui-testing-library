import {BOSearchAliasPageInterface} from '@interfaces/BO/shopParameters/search/alias';
import {BOSearchAliasPage as BOSearchAliasPageVersion} from '@versions/develop/pages/BO/shopParameters/search/alias';
import type {Page} from 'playwright';

/**
 * Search page, contains selectors and functions for the page
 * @class
 */
class BOSearchAliasPage extends BOSearchAliasPageVersion implements BOSearchAliasPageInterface {
  private readonly tableColumnStatus: (row: number) => string;

  private readonly tableColumnStatusEnabledIcon: (row: number) => string;

  private readonly tableColumnStatusDisabledIcon: (row: number) => string;

  private readonly paginationListOpen: string;

  private readonly paginationNumber: (number: number) => string;

  private readonly paginationRightBlock: string;

  private readonly bulkEnableButton: string;

  private readonly bulkDisableButton: string;

  private readonly sortColumnDivVersion: (column: string, direction: string) => string;

  /**
   * @constructs
   * Setting up titles and selectors to use on search page
   */
  constructor() {
    super();

    this.updateSuccessMessage = 'Update successful';

    // Selectors
    // Header links
    this.addNewAliasLink = 'a[data-role=page-header-desc-alias-link]';

    // Form selectors
    this.gridForm = '#form-alias';
    this.gridTableHeaderTitle = `${this.gridForm} .panel-heading`;
    this.gridTableNumberOfTitlesSpan = `${this.gridTableHeaderTitle} span.badge`;

    // Table selectors
    this.gridTable = '#table-alias';

    // Filter selectors
    this.filterRow = `${this.gridTable} tr.filter`;
    this.filterColumn = (filterBy: string) => `${this.filterRow} [name='aliasFilter_${filterBy}']`;
    this.filterSearchButton = '#submitFilterButtonalias';
    this.filterResetButton = 'button[name=\'submitResetalias\']';

    // Row actions selectors
    this.tableColumnActionsEditLink = (row: number) => `${this.tableColumnActions(row)} a.edit`;
    this.tableColumnActionsToggleButton = (row: number) => `${this.tableColumnActions(row)} button.dropdown-toggle`;
    this.tableColumnActionsDeleteLink = (row: number) => `${this.tableColumnActionsDropdownMenu(row)} a.delete`;

    // Confirmation modal
    this.deleteModalButtonYes = '#popup_ok';

    // Columns selectors
    this.tableColumnStatus = (row: number) => `${this.tableBodyColumn(row)}:nth-child(4) a`;
    this.tableColumnStatusEnabledIcon = (row: number) => `${this.tableColumnStatus(row)}.action-enabled`;
    this.tableColumnStatusDisabledIcon = (row: number) => `${this.tableColumnStatus(row)}.action-disabled`;

    // Bulk actions selectors
    this.bulkActionMenuButton = '#bulk_action_menu_alias';
    this.bulkActionBlock = 'div.bulk-actions';
    this.bulkActionDropdownMenu = `${this.bulkActionBlock} ul.dropdown-menu`;
    this.selectAllLink = `${this.bulkActionDropdownMenu} li:nth-child(1)`;
    this.bulkDeleteLink = `${this.bulkActionDropdownMenu} li:nth-child(7)`;
    this.bulkEnableButton = `${this.bulkActionDropdownMenu} li:nth-child(4)`;
    this.bulkDisableButton = `${this.bulkActionDropdownMenu} li:nth-child(5)`;

    // Pagination selectors
    this.paginationLimitSelect = `${this.paginationDiv}  button.dropdown-toggle`;
    this.paginationListOpen = `${this.paginationDiv}.open`;
    this.paginationNumber = (number: number) => `${this.gridForm} div.row li a[data-items='${number}']`;
    this.paginationRightBlock = `${this.paginationDiv}.pull-right`;
    this.paginationLabel = `${this.paginationRightBlock} li.active a`;
    this.paginationNextLink = `${this.gridForm} i.icon-angle-right`;
    this.paginationPreviousLink = `${this.gridForm} i.icon-angle-left`;

    // Sort Selectors
    this.tableHead = `${this.gridTable} thead`;
    this.sortColumnDivVersion = (column: string, direction: string) => `${this.tableHead
    } a.${direction}-sort-column-${column}-link`;
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

      case 'active':
        columnSelector = this.tableColumnStatus(row);
        break;

      default:
        throw new Error(`Column ${columnName} was not found`);
    }

    if (columnName === 'active') {
      return this.getAttributeContent(page, columnSelector, 'title');
    }

    return this.getTextContent(page, columnSelector);
  }

  /**
   * Get alias status
   * @param page {Page} Browser tab
   * @param row {number} Row on table
   * @return {Promise<boolean>}
   */
  async getStatus(page: Page, row: number): Promise<boolean> {
    return this.elementVisible(page, this.tableColumnStatusEnabledIcon(row), 500);
  }

  /**
   * Quick edit toggle column value
   * @param page {Page} Browser tab
   * @param row {number} Row on table
   * @param valueWanted {boolean} Value wanted in column
   * @returns {Promise<boolean>} return true if action is done, false otherwise
   */
  async setStatus(page: Page, row: number, valueWanted: boolean = true): Promise<boolean> {
    await this.waitForVisibleSelector(page, this.tableColumnStatus(row), 2000);
    if (await this.getStatus(page, row) !== valueWanted) {
      await page.locator(this.tableColumnStatus(row)).click();
      await this.waitForVisibleSelector(
        page,
        (valueWanted ? this.tableColumnStatusEnabledIcon(row) : this.tableColumnStatusDisabledIcon(row)),
      );
      return true;
    }
    return false;
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
    return this.getAlertSuccessBlockContent(page);
  }

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
   * @param number {number} Value of pagination limit to select
   * @returns {Promise<string>}
   */
  async selectPaginationLimit(page: Page, number: number): Promise<string> {
    await page.locator(this.paginationLimitSelect).click();
    await this.waitForVisibleSelector(page, this.paginationListOpen);
    await this.clickAndWaitForURL(page, this.paginationNumber(number));

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
    await this.clickAndWaitForURL(page, `${this.sortColumnDivVersion(sortBy, sortDirection)} i`);
  }

  /**
   * Delete by bulk action
   * @param page {Page} Browser tab
   * @returns {Promise<string>}
   */
  async bulkDeleteAliases(page: Page): Promise<string> {
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
   * Enable / disable by Bulk Actions
   * @param page {Page} Browser tab
   * @param enable {boolean} True if we need to enable status
   * @returns {Promise<string>}
   */
  async bulkSetStatus(page: Page, enable: boolean = true): Promise<string> {
    // Select all rows
    await this.bulkSelectRows(page);

    // Click on Button Bulk actions
    await page.locator(this.bulkActionMenuButton).click();

    // Click on enable/Disable and wait for modal
    await this.clickAndWaitForURL(page, enable ? this.bulkEnableButton : this.bulkDisableButton);

    return this.getTextContent(page, this.alertSuccessBlock);
  }
}

module.exports = new BOSearchAliasPage();
