import {type BOWallOfFamePageInterface} from '@interfaces/BO/community/wallOfFame';
import BOBasePage from '@pages/BO/BOBasePage';
import {type Page} from '@playwright/test';

/**
 * Wall of Fame page, contains functions that can be used on the page
 * @class
 * @extends BOBasePage
 */
class BOWallOfFamePage extends BOBasePage implements BOWallOfFamePageInterface {
  public readonly pageTitle: string;

  private readonly kpisItem: string;

  private readonly kpisValue: string;

  private readonly kpisLabel: string;

  /**
   * @constructs
   * Setting up texts and selectors to use on Wall of Fame page
   */
  constructor() {
    super();

    this.pageTitle = `Wall of Fame • ${global.INSTALL.SHOP_NAME}`;

    // KPIs selectors
    this.kpisItem = '.wof-header-section__kpis-item';
    this.kpisValue = '.wof-header-section__kpis-value';
    this.kpisLabel = '.wof-header-section__kpis-label';
  }

  /**
   * Go to Wall of Fame page via the main menu (COMMUNITY section)
   * @param page {Page} Browser tab
   * @returns {Promise<void>}
   */
  async goToWallOfFamePage(page: Page): Promise<void> {
    await this.goToSubMenu(page, '', this.wallOfFameLink);
    await this.closeSfToolBar(page);
  }

  /**
   * Get the contribution percentage for a given contributor type
   * @param page {Page} Browser tab
   * @param contributor {'PrestaShop' | 'Community'} The contributor type
   * @returns {Promise<number>} The percentage as a float (e.g. 60.94)
   */
  async getContributionPercentage(page: Page, contributor: 'PrestaShop' | 'Community'): Promise<number> {
    const item = page.locator(this.kpisItem).filter({hasText: `Contributions by ${contributor}`});
    const valueText = await item.locator(this.kpisValue).textContent();

    return parseFloat((valueText ?? '0').replace('%', '').trim());
  }
}

module.exports = new BOWallOfFamePage();
