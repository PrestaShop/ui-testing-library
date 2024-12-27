// Import pages
import type {InstalledModulesPageInterface} from '@interfaces/BO/modules/modulesAndServices/installedModules';
import {InstalledModulesPage} from '@versions/1.7.4/pages/BO/modules/modulesAndServices/installedModules';
import {Page} from '@playwright/test';
import FakerModule from '@data/faker/module';

/**
 * Bo installed modules page, contains functions that can be used on the page
 * @class
 * @extends ProductsPage
 */
class InstalledModulesVersion extends InstalledModulesPage implements InstalledModulesPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use on installed modules page
   */
  constructor() {
    super();

    // Selectors
    this.searchModuleTagInput = 'div.module-top-menu input.pstaggerAddTagInput';
  }

  /**
   * Search Module in Page module Catalog
   * @param page {Page} Browser tab
   * @param module {FakerModule} Tag of the Module
   * @return {Promise<boolean>}
   */
  async searchModule(page: Page, module: FakerModule): Promise<boolean> {
    await page.locator(this.searchModuleTagInput).fill(module.tag);
    await page.keyboard.press('Enter');

    return this.isModuleVisible(page, module);
  }
}

const installedModulesPage = new InstalledModulesVersion();
export {installedModulesPage, InstalledModulesVersion as InstalledModulesPage};
