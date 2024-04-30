import {ModuleManagerSelectionPageInterface} from '@interfaces/BO/modules/moduleManager/selection';
import {Page} from '@playwright/test';
import {SelectionPage} from '@versions/1.7.4/pages/BO/modules/moduleManager/selection';

/**
 * @class
 * @extends BOBasePage
 */
class SelectionPageVersion extends SelectionPage implements ModuleManagerSelectionPageInterface {
  /**
   * @constructs
   * Setting up titles and selectors to use on module catalog page
   */
  constructor() {
    super();

    // Selectors
    this.subTabSelection = '#head_tabs a.tab:nth-child(1)';
    this.subTabInstalledModules = '#head_tabs a.tab:nth-child(2)';
  }

  /**
   * Go to the "Selection" tab
   * @param {Page} page
   * @returns {Promise<void>}
   */
  async goToTabSelection(page: Page): Promise<void> {
    await this.waitForSelectorAndClick(page, this.subTabSelection);
    await this.waitForVisibleSelector(page, `${this.subTabSelection}.current`, 2000);
  }

  /**
   * Go to the "Installed Modules" tab
   * @param {Page} page
   * @returns {Promise<void>}
   */
  async goToTabInstalledModules(page: Page): Promise<void> {
    await this.waitForSelectorAndClick(page, this.subTabInstalledModules);
    await this.waitForVisibleSelector(page, `${this.subTabInstalledModules}.current`, 2000);
  }
}

module.exports = new SelectionPageVersion();
