import {MarketplacePageInterface} from '@interfaces/BO/modules/marketplace';
import BOBasePage from '@pages/BO/BOBasePage';

/**
 * Mock Page for unsupported version
 * @class
 * @extends BOBasePage
 */
class Marketplace extends BOBasePage implements MarketplacePageInterface {
  public readonly pageTitle: string;

  public readonly installMessageSuccessful: (moduleTag: string) => string;

  /**
   * @constructs
   * Setting up titles and selectors to use on marketplace page
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
   * Go to the "Uninstalled modules" tab
   * @returns {Promise<void>}
   */
  async goToMarketplacePage(): Promise<void> {
    // do nothing.
  }

  /**
   * Install the module and return success message
   * @returns {Promise<string>}
   */
  async installModule(): Promise<string|null> {
    return '';
  }

  /**
   * Go to module configuration page
   * @returns {Promise<void>}
   */
  async goToModuleConfigurationPage(): Promise<void> {
    // do nothing.
  }
}

module.exports = new Marketplace();
