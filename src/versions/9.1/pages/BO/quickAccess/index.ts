import {type BOQuickAccessInterface} from '@interfaces/BO/quickAccess';
import {type Page} from '@playwright/test';
import {BOQuickAccessPage as BOQuickAccessPageVersion} from '@versions/develop/pages/BO/quickAccess';

class BOQuickAccessPage extends BOQuickAccessPageVersion implements BOQuickAccessInterface {
  constructor() {
    super();

    // Selectors
    // Header selectors
    this.addNewQuickAccessButton = 'a[data-role=page-header-desc-quick_access-link]';

    // Panel
    this.gridPanel = '#form-quick_access .panel';
    this.gridTitle = `${this.gridPanel} div.panel-heading span.badge`;

    // Table selectors
    this.gridTable = '#table-quick_access';

    // Filter selectors
    this.filterRow = `${this.gridTable} tr.filter`;
    this.filterColumn = (filterBy: string) => `${this.filterRow} [name='quick_accessFilter_${filterBy}']`;
    this.filterSearchButton = '#submitFilterButtonquick_access';
    this.filterResetButton = 'button[name=\'submitResetquick_access\']';

    // Table body selectors
    // The parent (develop) page object derives these from the Symfony grid table (#quick_access_grid_table),
    // which does not exist on <= 9.1.x (legacy HelperList #table-quick_access). Re-derive them here so that
    // getTextColumn() targets the legacy table. Column order matches the legacy fields_list
    // (checkbox, id_quick_access, name, link, new_window), i.e. the same nth-child as the develop grid.
    this.tableBody = `${this.gridTable} tbody`;
    this.tableBodyRows = `${this.tableBody} tr`;
    this.tableBodyRow = (row: number) => `${this.tableBodyRows}:nth-child(${row})`;
    this.tableBodyColumn = (row: number) => `${this.tableBodyRow(row)} td`;

    // Columns selectors
    this.tableColumnId = (row: number) => `${this.tableBodyColumn(row)}:nth-child(2)`;
    this.tableColumnName = (row: number) => `${this.tableBodyColumn(row)}:nth-child(3)`;
    this.tableColumnLink = (row: number) => `${this.tableBodyColumn(row)}:nth-child(4)`;
    this.tableColumnIsNewWindow = (row: number) => `${this.tableBodyColumn(row)}:nth-child(5)`;

    // Bulk actions selectors
    this.bulkActionBlock = 'div.bulk-actions';
    this.bulkActionMenuButton = '#bulk_action_menu_quick_access';
    this.bulkActionDropdownMenu = `${this.bulkActionBlock} ul.dropdown-menu`;
    this.selectAllLink = `${this.bulkActionDropdownMenu} li:nth-child(1)`;
    this.bulkDeleteLink = `${this.bulkActionDropdownMenu} li:nth-child(4)`;
  }

  /**
   * Bulk delete link
   * @param page {Page} Browser tab
   * @return {Promise<string>}
   */
  async bulkDeleteQuickAccessLink(page: Page): Promise<string> {
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
   * Reset input filters
   * @param page {Page} Browser tab
   * @returns {Promise<void>}
   */
  async resetFilter(page: Page): Promise<void> {
    if (!(await this.elementNotVisible(page, this.filterResetButton, 2000))) {
      await this.clickAndWaitForURL(page, this.filterResetButton);
    }
  }
}

const boQuickAccessPage = new BOQuickAccessPage();
export {boQuickAccessPage, BOQuickAccessPage};
