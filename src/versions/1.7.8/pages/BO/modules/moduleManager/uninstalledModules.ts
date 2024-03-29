import {ModuleManagerUninstalledModulesPageInterface} from '@interfaces/BO/modules/moduleManager/uninstalledModules';
import BOBasePage from '@pages/BO/BOBasePage';
import {Page} from '@playwright/test';

/**
 * Module catalog page, contains selectors and functions for the page
 * @class
 * @extends BOBasePage
 */
class UninstalledModules extends BOBasePage implements ModuleManagerUninstalledModulesPageInterface {
  public readonly installMessageSuccessful: (moduleTag: string) => string;

  private readonly subTabUninstalledModules: string;

  private readonly installModuleButton: (moduleName: string) => string;

  /**
   * @constructs
   * Setting up titles and selectors to use on module catalog page
   */
  constructor() {
    super();

    this.installMessageSuccessful = (moduleTag: string) => `Install action on module ${moduleTag} succeeded.`;

    // Selectors
    this.subTabUninstalledModules = '#subtab-AdminPsMboUninstalledModules';
    this.installModuleButton = (moduleTag: string) => `div[data-tech-name="${moduleTag}"] button.module_action_menu_install`;
  }

  /*
  Methods
   */
  /**
   * Go to the "Uninstalled modules" tab
   * @param {Page} page
   * @returns {Promise<void>}
   */
  async goToTabUninstalledModules(page: Page): Promise<void> {
    await this.waitForSelectorAndClick(page, this.subTabUninstalledModules);
    await this.waitForVisibleSelector(page, `${this.subTabUninstalledModules}.active`, 2000);
  }

  /**
   * Install the module and return if installed
   * @param {Page} page
   * @param {string} moduleTag
   * @returns {Promise<boolean>}
   */
  async installModule(page: Page, moduleTag: string): Promise<boolean> {
    await page.locator(this.installModuleButton(moduleTag)).click();

    return this.elementNotVisible(page, this.installModuleButton(moduleTag), 3000);
  }
}

module.exports = new UninstalledModules();
