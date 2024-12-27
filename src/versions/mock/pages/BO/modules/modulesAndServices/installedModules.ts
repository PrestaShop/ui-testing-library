import {InstalledModulesPageInterface} from '@interfaces/BO/modules/modulesAndServices/installedModules';
import BOBasePage from '@pages/BO/BOBasePage';

/**
 * Mock Page for unsupported version
 * @class
 * @extends BOBasePage
 */
class InstalledModulesPage extends BOBasePage implements InstalledModulesPageInterface {
  public readonly pageTitle: string;

  /**
   * @constructs
   * Setting up titles and selectors to use on installed modules page
   */
  constructor() {
    super();

    this.pageTitle = '';
  }

  /*
  Methods
   */
  /**
   * Go to the "Selection" tab
   * @returns {Promise<void>}
   */
  async goToSelectionPage(): Promise<void> {
    // do nothing.
  }

  /**
   * Go to module configuration page
   * @returns {Promise<void>}
   */
  async goToModuleConfigurationPage(): Promise<void> {
    // do nothing.
  }

  /**
   * Return if the module is visible
   * @return {Promise<boolean>}
   */
  async isModuleVisible(): Promise<boolean> {
    return true;
  }

  /**
   * Search Module in Page module Catalog
   * @return {Promise<boolean>}
   */
  async searchModule(): Promise<boolean> {
    return true;
  }
}

module.exports = new InstalledModulesPage();
