import {type BOTagsPageInterface} from '@interfaces/BO/shopParameters/search/tags';
import {type Page} from '@playwright/test';
import {BOTagsPage as BOTagsPageVersion} from '@versions/develop/pages/BO/shopParameters/search/tags';

/**
 * @class
 * @extends BOTagsPageVersion
 */
class BOTagsPage extends BOTagsPageVersion implements BOTagsPageInterface {
  private readonly paginationItems: (number: number) => string;

  constructor() {
    super();

    this.successfulMultiDeleteMessage = 'The selection has been successfully deleted.';
    this.alertSuccessBlock = `${this.alertBlock}.alert-success`;

    // Selectors
    // Header links
    this.addNewTagLink = 'a[data-role=page-header-desc-tag-link]';

    // Form selectors
    this.gridForm = '#form-tag';
    this.gridTableHeaderTitle = `${this.gridForm} .panel-heading`;
    this.gridTableNumberOfTitlesSpan = `${this.gridTableHeaderTitle} span.badge`;

    // Table selectors
    this.gridTable = '#table-tag';

    // Filter selectors
    this.filterRow = `${this.gridTable} tr.filter`;
    this.filterColumn = (filterBy: string) => `${this.filterRow} [name='tagFilter_${filterBy}']`;
    this.filterSearchButton = '#submitFilterButtontag';
    this.filterResetButton = 'button[name=\'submitResettag\']';

    // Table body selectors
    this.tableBody = `${this.gridTable} tbody`;
    this.tableBodyRows = `${this.tableBody} tr`;
    this.tableBodyRow = (row: number) => `${this.tableBodyRows}:nth-child(${row})`;
    this.tableBodyColumn = (row: number) => `${this.tableBodyRow(row)} td`;

    // Row actions selectors
    this.tableColumnActions = (row: number) => `${this.tableBodyColumn(row)} .btn-group-action`;
    this.tableColumnActionsEditLink = (row: number) => `${this.tableColumnActions(row)} a.edit`;
    this.tableColumnActionsToggleButton = (row: number) => `${this.tableColumnActions(row)} button.dropdown-toggle`;
    this.tableColumnActionsDropdownMenu = (row: number) => `${this.tableColumnActions(row)} .dropdown-menu`;
    this.tableColumnActionsDeleteLink = (row: number) => `${this.tableColumnActionsDropdownMenu(row)} a.delete`;

    // Sort Selectors
    this.tableHead = `${this.gridTable} thead`;
    this.sortColumnDiv = (column: number|string) => `${this.tableHead} th:nth-child(${column})`;

    // Confirmation modal
    this.deleteModalButtonYes = '#popup_ok';

    // Columns selectors
    this.tableColumnId = (row: number) => `${this.tableBodyColumn(row)}:nth-child(2)`;
    this.tableColumnLanguage = (row: number) => `${this.tableBodyColumn(row)}:nth-child(3)`;
    this.tableColumnName = (row: number) => `${this.tableBodyColumn(row)}:nth-child(4)`;
    this.tableColumnProducts = (row: number) => `${this.tableBodyColumn(row)}:nth-child(5)`;

    // Pagination selectors
    this.paginationActiveLabel = `${this.gridForm} ul.pagination.pull-right li.active a`;
    this.paginationDiv = `${this.gridForm} .pagination`;
    this.paginationDropdownButton = `${this.paginationDiv} .dropdown-toggle`;
    this.paginationItems = (number: number) => `${this.gridForm} .dropdown-menu a[data-items='${number}']`;
    this.paginationPreviousLink = `${this.gridForm} .icon-angle-left`;
    this.paginationNextLink = `${this.gridForm} .icon-angle-right`;

    // Bulk actions selectors
    this.bulkActionBlock = 'div.bulk-actions';
    this.bulkActionMenuButton = '#bulk_action_menu_tag';
    this.bulkActionDropdownMenu = `${this.bulkActionBlock} ul.dropdown-menu`;
    this.selectAllLink = `${this.bulkActionDropdownMenu} li:nth-child(1)`;
    this.bulkDeleteLink = `${this.bulkActionDropdownMenu} li:nth-child(4)`;
  }

  /* Bulk actions methods */
  /**
   * Bulk delete tags
   * @param page {Page} Browser tab
   * @return {Promise<string>}
   */
  async bulkDelete(page: Page): Promise<string> {
    // To confirm bulk delete action with dialog
    await this.dialogListener(page, true);

    // Select all rows
    await Promise.all([
      page.locator(this.bulkActionMenuButton).click(),
      this.waitForVisibleSelector(page, this.selectAllLink),
    ]);

    await Promise.all([
      page.locator(this.selectAllLink).click(),
      this.waitForHiddenSelector(page, this.selectAllLink),
    ]);

    // Perform delete
    await Promise.all([
      page.locator(this.bulkActionMenuButton).click(),
      this.waitForVisibleSelector(page, this.bulkDeleteLink),
    ]);

    await this.clickAndWaitForURL(page, this.bulkDeleteLink);

    // Return successful message
    return this.getAlertSuccessBlockContent(page);
  }

  /**
   * Filter Table
   * @param page {Page} Browser tab
   * @param filterBy {string} Column to filter with
   * @param value {string} value to filter with
   * @return {Promise<void>}
   */
  async filterTable(page: Page, filterBy: string, value: string = ''): Promise<void> {
    await this.setValue(page, this.filterColumn(filterBy), value);
    // click on search
    await this.clickAndWaitForURL(page, this.filterSearchButton);
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

      case 'l!name':
        columnSelector = this.tableColumnLanguage(row);
        break;

      case 'a!name':
        columnSelector = this.tableColumnName(row);
        break;

      case 'products':
        columnSelector = this.tableColumnProducts(row);
        break;

      default:
        throw new Error(`Column ${columnName} was not found`);
    }

    return this.getTextContent(page, columnSelector);
  }

  /**
   * Select pagination limit
   * @param page {Page} Browser tab
   * @param number {number} Pagination limit number to select
   * @returns {Promise<string>}
   */
  async selectPaginationLimit(page: Page, number: number): Promise<string> {
    await this.waitForSelectorAndClick(page, this.paginationDropdownButton);
    await this.clickAndWaitForURL(page, this.paginationItems(number));

    return this.getPaginationLabel(page);
  }

  /**
   * Sort table by clicking on column name
   * @param page {Page} Browser tab
   * @param sortBy {string} Column name to sort with
   * @param sortDirection {string} Sort direction by asc or desc
   * @return {Promise<void>}
   */
  async sortTable(page: Page, sortBy: string, sortDirection: string): Promise<void> {
    let columnSelector;

    switch (sortBy) {
      case 'id_tag':
        columnSelector = this.sortColumnDiv(2);
        break;

      case 'l!name':
        columnSelector = this.sortColumnDiv(3);
        break;

      case 'a!name':
        columnSelector = this.sortColumnDiv(4);
        break;

      case 'products':
        columnSelector = this.sortColumnDiv(5);
        break;

      default:
        throw new Error(`Column ${sortBy} was not found`);
    }

    const sortColumnButton = `${columnSelector} i.icon-caret-${sortDirection}`;
    await this.clickAndWaitForURL(page, sortColumnButton);
  }
}

const boTagsPage = new BOTagsPage();
export {boTagsPage, BOTagsPage};
