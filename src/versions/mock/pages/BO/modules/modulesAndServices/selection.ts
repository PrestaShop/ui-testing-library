import {SelectionPageInterface} from '@interfaces/BO/modules/modulesAndServices/selection';
import BOBasePage from '@pages/BO/BOBasePage';

/**
 * Mock Page for unsupported version
 * @class
 * @extends BOBasePage
 */
class SelectionPage extends BOBasePage implements SelectionPageInterface {
  public readonly pageTitle: string;

  public readonly installMessageSuccessful: (moduleTag: string) => string;

  /**
   * @constructs
   * Setting up titles and selectors to use on selection page
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
   * Install the module and return success message
   * @returns {Promise<string>}
   */
  async installModule(): Promise<string|null> {
    return '';
  }

  async goToInstalledModulesPage():Promise<void> {
    //
  }
}

module.exports = new SelectionPage();
