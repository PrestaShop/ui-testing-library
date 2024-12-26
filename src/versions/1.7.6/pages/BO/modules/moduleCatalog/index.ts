import {ModuleCatalogPageInterface} from '@interfaces/BO/modules/moduleCatalog';
import BOBasePage from '@pages/BO/BOBasePage';
import {Page} from '@playwright/test';

/**
 * Module catalog page, contains selectors and functions for the page
 * @class
 * @extends BOBasePage
 */
class ModuleCatalogPage extends BOBasePage implements ModuleCatalogPageInterface {
  public readonly pageTitle: string;

  public readonly installMessageSuccessful: (moduleTag: string) => string;

  private readonly searchModuleInput: string;

  private readonly searchButton: string;

  private readonly installModuleButton: (moduleName: string) => string;

  /**
   * @constructs
   * Setting up titles and selectors to use on module catalog page
   */
  constructor() {
    super();

    this.pageTitle = `Modules catalog • ${global.INSTALL.SHOP_NAME}`;
    this.installMessageSuccessful = (moduleTag: string) => `Install action on module ${moduleTag} succeeded.`;

    // Selectors
    this.searchModuleInput = '.pstaggerAddTagInput';
    this.searchButton = '#module-search-button';
    this.installModuleButton = (moduleTag: string) => `div[data-tech-name="${moduleTag}"] button.module_action_menu_install`;
  }

  /*
  Methods
   */

  /**
   * Install the module and return if installed
   * @param {Page} page
   * @param {string} moduleTag
   * @returns {Promise<string>}
   */
  async installModule(page: Page, moduleTag: string): Promise<string | null> {
    await page.locator(this.searchModuleInput).fill(moduleTag);
    await page.locator(this.searchButton).click();
    await page.locator(this.installModuleButton(moduleTag)).click();

    return this.getGrowlMessageContent(page);
  }
}

module.exports = new ModuleCatalogPage();
