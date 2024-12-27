import {MarketplacePageInterface} from '@interfaces/BO/modules/marketplace';
import BOBasePage from '@pages/BO/BOBasePage';
import {Page} from '@playwright/test';

/**
 * Marketplace page, contains selectors and functions for the page
 * @class
 * @extends BOBasePage
 */
class Marketplace extends BOBasePage implements MarketplacePageInterface {
  public readonly pageTitle: string;

  public readonly installMessageSuccessful: (moduleTag: string) => string;

  private readonly marketplaceLink: string;

  private readonly searchModuleInput: string;

  private readonly searchButton: string;

  private readonly installModuleButton: string;

  private readonly configureModuleButton: string;

  /**
   * @constructs
   * Setting up titles and selectors to use on marketplace page
   */
  constructor() {
    super();

    this.pageTitle = `Marketplace • ${global.INSTALL.SHOP_NAME}`;
    this.installMessageSuccessful = (moduleTag: string) => `Install action on module ${moduleTag} succeeded.`;

    // Selectors
    this.marketplaceLink = '#subtab-AdminPsMboModule';
    this.searchModuleInput = '.pstaggerAddTagInput';
    this.searchButton = '#module-search-button';
    this.installModuleButton = '.mbo-module-card__actions form[action*=\'install\']';
    this.configureModuleButton = '.module-actions a[href*=\'configure\']';
  }

  /*
  Methods
   */
  /*
   * Go to the "Marketplace" page
   * @param {Page} page
   * @returns {Promise<void>}
   */
  async goToMarketplacePage(page: Page): Promise<void> {
    await this.clickAndWaitForURL(page, this.marketplaceLink);
  }

  /**
   * Install the module and return success message
   * @param {Page} page
   * @param {string} moduleTag
   * @returns {Promise<string|null>}
   */
  async installModule(page: Page, moduleTag: string): Promise<string|null> {
    await page.locator(this.searchModuleInput).fill(moduleTag);
    await page.locator(this.searchButton).click();
    await page.locator(this.installModuleButton).click();

    return this.getGrowlMessageContent(page);
  }

  /**
   * Go to module configuration page
   * @param page {Page} page
   * @returns {Promise<void>}
   */
  async goToModuleConfigurationPage(page:Page):Promise<void> {
    await this.clickAndWaitForURL(page, this.configureModuleButton);
  }
}

module.exports = new Marketplace();
