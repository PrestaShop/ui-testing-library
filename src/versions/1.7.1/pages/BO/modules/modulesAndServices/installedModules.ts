// Import pages
import type {InstalledModulesPageInterface} from '@interfaces/BO/modules/modulesAndServices/installedModules';
import {InstalledModulesPage} from '@versions/1.7.2/pages/BO/modules/modulesAndServices/installedModules';
import {Page} from '@playwright/test';

/**
 * Bo installed Modules page, contains functions that can be used on the page
 * @class
 * @extends ProductsPage
 */
class InstalledModulesVersion extends InstalledModulesPage implements InstalledModulesPageInterface {
  private readonly pageTitleSelector: string;

  /**
   * @constructs
   * Setting up texts and selectors to use on InstalledModules page
   */
  constructor() {
    super();

    this.pageTitle = 'Manage installed modules';

    // Selectors
    this.pageTitleSelector = '#main-div div.header-toolbar h2';
  }

  /**
   * Get page title
   * @param page {Page} Browser tab
   * @returns {Promise<string>}
   */
  async getPageTitle(page: Page): Promise<string> {
    return this.getTextContent(page, this.pageTitleSelector);
  }
}

const installedModulesPage = new InstalledModulesVersion();
export {installedModulesPage, InstalledModulesVersion as InstalledModulesPage};
