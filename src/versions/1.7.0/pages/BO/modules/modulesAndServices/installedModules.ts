// Import pages
import type {InstalledModulesPageInterface} from '@interfaces/BO/modules/modulesAndServices/installedModules';
import {InstalledModulesPage} from '@versions/1.7.1/pages/BO/modules/modulesAndServices/installedModules';
import {Page} from '@playwright/test';

/**
 * Bo installed Modules page, contains functions that can be used on the page
 * @class
 * @extends ProductsPage
 */
class InstalledModulesVersion extends InstalledModulesPage implements InstalledModulesPageInterface {
  /**
   * Uninstall module
   * @param page {Page} page
   * @param moduleTag {string} Technical name of the module
   * @returns {Promise<void>}
   */
  async uninstallModule(page: Page, moduleTag: string): Promise<string | null> {
    if (await this.elementNotVisible(page, this.uninstallModuleButton, 1000)) {
      await Promise.all([
        page.locator(this.actionsDropdownButton(moduleTag)).click(),
        this.waitForVisibleSelector(page, `${this.actionsDropdownButton(moduleTag)}[aria-expanded='true']`),
      ]);
    }
    await page.locator(this.uninstallModuleButton).click();

    return this.getTextContent(page, `${this.alertSuccessBlock} li`);
  }
}

const installedModulesPage = new InstalledModulesVersion();
export {installedModulesPage, InstalledModulesVersion as InstalledModulesPage};
