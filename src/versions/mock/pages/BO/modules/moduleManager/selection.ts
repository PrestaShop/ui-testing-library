import {ModuleManagerSelectionPageInterface} from '@interfaces/BO/modules/moduleManager/selection';
import BOBasePage from '@pages/BO/BOBasePage';

/**
 * Mock Page for unsupported version
 * @class
 * @extends BOBasePage
 */
class SelectionPageMock extends BOBasePage implements ModuleManagerSelectionPageInterface {
  public readonly pageTitle: string;

  public readonly installMessageSuccessful: (moduleTag: string) => string;

  /**
   * @constructs
   * Setting up titles and selectors to use on module catalog page
   */
  constructor() {
    super();

    this.pageTitle = '';
    this.installMessageSuccessful = () => '';
  }

  /*
  Methods
   */
  /**
   * Go to the "Selection" tab
   * @returns {Promise<void>}
   */
  async goToTabSelection(): Promise<void> {
    // do nothing.
  }

  /**
   * Go to the "Installed Modules" tab
   * @returns {Promise<void>}
   */
  async goToTabInstalledModules(): Promise<void> {
    // do nothing.
  }

  /**
   * Install the module and return if installed
   * @returns {Promise<boolean>}
   */
  async installModule(): Promise<boolean> {
    return true;
  }
}

module.exports = new SelectionPageMock();
