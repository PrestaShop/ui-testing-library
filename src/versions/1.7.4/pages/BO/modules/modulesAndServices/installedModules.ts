import {InstalledModulesPageInterface} from '@interfaces/BO/modules/modulesAndServices/installedModules';
import BOBasePage from '@pages/BO/BOBasePage';
import {Page} from '@playwright/test';
import FakerModule from '@data/faker/module';

/**
 * Installed modules page, contains selectors and functions for the page
 * @class
 * @extends BOBasePage
 */
class InstalledModulesPage extends BOBasePage implements InstalledModulesPageInterface {
  public pageTitle: string;

  private readonly selectionLink: string;

  private readonly configureModuleButton: string;

  protected searchModuleTagInput: string;

  private readonly searchModuleButton: string;

  private readonly moduleItemName: (moduleTag: string) => string;

  private readonly actionsDropdownButton: (moduleTag: string) => string;

  private readonly actionModuleButtonInDropdownList: (action: string) => string;

  /**
   * @constructs
   * Setting up titles and selectors to use on modules catalog page
   */
  constructor() {
    super();

    this.pageTitle = `Manage installed modules • ${global.INSTALL.SHOP_NAME}`;

    // Selectors
    this.selectionLink = '#subtab-AdminModulesCatalog';
    this.configureModuleButton = '.dropdown-menu form[action*=\'configure\']';
    this.searchModuleTagInput = '#search-input-group input.pstaggerAddTagInput';
    this.searchModuleButton = '#module-search-button';
    this.moduleItemName = (moduleTag: string) => `.module-item-list[data-tech-name=${moduleTag}]`;
    // Module actions in dropdown selectors
    this.actionsDropdownButton = (moduleTag: string) => `div[data-tech-name=${moduleTag}] button.dropdown-toggle`;
    this.actionModuleButtonInDropdownList = (action: string) => 'div.btn-group.module-actions.show'
      + ` button.module_action_menu_${action}`;
  }

  /*
  Methods
   */
  /**
   * Go to the "Selection" page
   * @param {Page} page
   * @returns {Promise<void>}
   */
  async goToSelectionPage(page: Page): Promise<void> {
    await this.clickAndWaitForURL(page, this.selectionLink);
  }

  /**
   * Go to module configuration page
   * @param page {Page} page
   * @param moduleTag {string} Technical name of the module
   * @returns {Promise<void>}
   */
  async goToModuleConfigurationPage(page:Page, moduleTag: string):Promise<void> {
    if (await this.elementNotVisible(page, this.configureModuleButton, 1000)) {
      await Promise.all([
        page.locator(this.actionsDropdownButton(moduleTag)).click(),
        this.waitForVisibleSelector(page, `${this.actionsDropdownButton(moduleTag)}[aria-expanded='true']`),
      ]);
    }
    await this.clickAndWaitForURL(page, this.configureModuleButton);
  }

  /**
   * Return if the module is visible
   * @param page {Page} Browser tab
   * @param module {FakerModule} Tag of the Module
   * @return {Promise<boolean>}
   */
  async isModuleVisible(page: Page, module: FakerModule): Promise<boolean> {
    return this.elementVisible(page, this.moduleItemName(module.tag), 10000);
  }

  /**
   * Search Module in Page module Catalog
   * @param page {Page} Browser tab
   * @param module {FakerModule} Tag of the Module
   * @return {Promise<boolean>}
   */
  async searchModule(page: Page, module: FakerModule): Promise<boolean> {
    await page.locator(this.searchModuleTagInput).fill(module.tag);
    await page.locator(this.searchModuleButton).click();

    return this.isModuleVisible(page, module);
  }
}

const installedModulesPage = new InstalledModulesPage();
export {installedModulesPage, InstalledModulesPage};
