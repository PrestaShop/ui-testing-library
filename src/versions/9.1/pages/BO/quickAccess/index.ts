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
