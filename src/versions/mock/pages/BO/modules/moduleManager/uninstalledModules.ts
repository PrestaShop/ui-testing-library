import {ModuleManagerUninstalledModulesPageInterface} from '@interfaces/BO/modules/moduleManager/uninstalledModules';
import BOBasePage from '@pages/BO/BOBasePage';

/**
 * Mock Page for unsupported version
 * @class
 * @extends BOBasePage
 */
class UninstalledModules extends BOBasePage implements ModuleManagerUninstalledModulesPageInterface {
  public readonly installMessageSuccessful: (moduleTag: string) => string;

  /**
   * @constructs
   * Setting up titles and selectors to use on module catalog page
   */
  constructor() {
    super();

    this.installMessageSuccessful = () => '';
  }

  /*
  Methods
   */
  /**
   * Go to the "Uninstalled modules" tab
   * @returns {Promise<void>}
   */
  async goToTabUninstalledModules(): Promise<void> {
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

module.exports = new UninstalledModules();
