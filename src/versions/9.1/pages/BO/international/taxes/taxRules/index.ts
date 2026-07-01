import {type BOTaxRulesPageInterface} from '@interfaces/BO/international/taxes/taxRules';
import {Page} from '@playwright/test';
import {BOTaxRulesPage as BOTaxRulesPageVersion} from '@versions/develop/pages/BO/international/taxes/taxRules';

class BOTaxRulesPage extends BOTaxRulesPageVersion implements BOTaxRulesPageInterface {
  private readonly paginationDropdownButton: string;

  private readonly paginationItems: (number: number) => string;

  constructor() {
    super();

    this.successfulMultiDeleteMessage = 'The selection has been successfully deleted.';

    // Selectors
    // HEADER buttons
    this.addNewTaxRulesGroupLink = 'a[data-role=page-header-desc-tax_rules_group-link]';

    // Form selectors
    this.gridTableHeaderTitle = `${this.gridForm} .panel-heading`;
    this.gridTableNumberOfTitlesSpan = `${this.gridTableHeaderTitle} span.badge`;
    this.gridTable = '#table-tax_rules_group';

    // Filter selectors
    this.filterRow = `${this.gridTable} tr.filter`;
    this.filterColumn = (filterBy: string) => `${this.filterRow} [name='tax_rules_groupFilter_${filterBy}']`;
    this.filterSearchButton = '#submitFilterButtontax_rules_group';
    this.filterResetButton = `${this.filterRow} button[name='submitResettax_rules_group']`;

    // Table rows and columns
    this.tableBody = `${this.gridTable} tbody`;
    this.tableRow = (row: number) => `${this.tableBody} tr:nth-child(${row})`;
    this.editRowLink = (row: number) => `${this.tableRow(row)} a.edit`;
    this.tableBodyColumn = (row: number) => `${this.tableRow(row)} td`;

    // Columns selectors
    this.tableColumnId = (row: number) => `${this.tableBodyColumn(row)}:nth-child(2)`;
    this.tableColumnName = (row: number) => `${this.tableBodyColumn(row)}:nth-child(3)`;
    this.tableColumnActive = (row: number) => `${this.tableBodyColumn(row)}:nth-child(4) a`;
    this.tableColumnCheckIcon = (row: number) => `${this.tableColumnActive(row)} i.icon-check`;

    // Bulk actions selectors
    this.toggleDropDown = (row: number) => `${this.tableRow(row)} button[data-toggle='dropdown']`;
    this.deleteRowLink = (row: number) => `${this.tableRow(row)} a.delete`;

    // Confirmation modal
    this.deleteModalButtonYes = '#popup_ok';

    // Sort Selectors
    this.tableHead = `${this.gridTable} thead`;
    this.sortColumnDiv = (column: string) => `${this.tableHead} th:nth-child(${column})`;
    this.sortColumnSpanButton = (column: string) => `${this.sortColumnDiv(column)} span.ps-sort`;

    // Bulk actions selectors
    this.bulkActionBlock = 'div.bulk-actions';
    this.bulkActionMenuButton = '#bulk_action_menu_tax_rules_group';
    this.bulkActionDropdownMenu = `${this.bulkActionBlock} ul.dropdown-menu`;
    this.selectAllLink = `${this.bulkActionDropdownMenu} li:nth-child(1)`;
    this.bulkDeleteLink = `${this.bulkActionDropdownMenu} li:nth-child(7)`;
    this.bulkEnableLink = `${this.bulkActionDropdownMenu} li:nth-child(4)`;
    this.bulkDisableLink = `${this.bulkActionDropdownMenu} li:nth-child(5)`;

    // Pagination selectors
    this.paginationActiveLabel = `${this.gridForm} ul.pagination.pull-right li.active a`;
    this.paginationDiv = `${this.gridForm} .pagination`;
    this.paginationDropdownButton = `${this.paginationDiv} .dropdown-toggle`;
    this.paginationItems = (number: number) => `${this.gridForm} .dropdown-menu a[data-items='${number}']`;
    this.paginationPreviousLink = `${this.gridForm} .icon-angle-left`;
    this.paginationNextLink = `${this.gridForm} .icon-angle-right`;
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
      return this.getAttributeContent(page, columnSelector, 'title');
    }

    return this.getTextContent(page, columnSelector);
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
   * Delete tax rules by bulk action
   * @param page {Page} Browser tab
   * @returns {Promise<string>}
   */
  async bulkDeleteTaxRules(page: Page): Promise<string> {
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

    return this.getTextContent(page, this.alertSuccessBlock);
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
    await this.clickAndWaitForURL(page, this.deleteRowLink(row));
    // Confirm delete action
    await this.clickAndWaitForURL(page, this.deleteModalButtonYes);

    // Get successful message
    return this.getAlertSuccessBlockContent(page);
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
      case 'id_tax_rules_group':
        columnSelector = this.sortColumnDiv('2');
        break;

      case 'name':
        columnSelector = this.sortColumnDiv('3');
        break;

      default:
        throw new Error(`Column ${sortBy} was not found`);
    }

    const sortColumnButton = `${columnSelector} i.icon-caret-${sortDirection}`;
    await this.clickAndWaitForURL(page, sortColumnButton);
  }

  /**
   * Select pagination limit
   * @param page {Page} Browser tab
   * @param number {number} Value of pagination limit to select
   * @returns {Promise<string>}
   */
  async selectPaginationLimit(page: Page, number: number): Promise<string> {
    await this.waitForSelectorAndClick(page, this.paginationDropdownButton);
    await this.clickAndWaitForURL(page, this.paginationItems(number));

    return this.getPaginationLabel(page);
  }

  /**
   * Get value of columns enabled
   * @param page {Page} Browser tab
   * @param row {number} Row on table
   * @return {Promise<boolean>}
   */
  async getStatus(page: Page, row: number): Promise<boolean> {
    await this.waitForVisibleSelector(page, this.tableColumnActive(row), 2000);

    return this.elementVisible(page, this.tableColumnCheckIcon(row), 100);
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
        .locator(`${this.tableColumnActive(row)} i`)
        .first()
        .evaluate((el: HTMLElement) => el.click());

      return true;
    }
    return false;
  }
}

const boTaxRulesPage = new BOTaxRulesPage();
export {boTaxRulesPage, BOTaxRulesPage};
