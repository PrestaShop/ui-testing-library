import {ModuleBlockwishlistStatisticsPageInterface} from '@interfaces/BO/modules/blockwishlist/statistics';
import ModuleConfiguration from '@pages/BO/modules/moduleConfiguration';

import type {Page} from 'playwright';

/**
 * Module configuration page for module : blockwishlist, contains selectors and functions for the page
 * @class
 * @extends ModuleConfiguration
 */
class BlockwishlistStatistics extends ModuleConfiguration implements ModuleBlockwishlistStatisticsPageInterface {
  public readonly pageTitle: string;

  private readonly rowTopBar: string;

  private readonly refreshStatsButton: string;

  private readonly gridTable: string;

  private readonly gridTableBody: string;

  private readonly gridTableEmptyRow: string;

  private readonly gridTableRow: string;

  /**
   * @constructs
   */
  constructor() {
    super();

    this.pageTitle = `Statistics • ${global.INSTALL.SHOP_NAME}`;

    // Selectors
    this.rowTopBar = '.row.wishlist-stats-topbar';
    this.refreshStatsButton = `${this.rowTopBar} button.js-refresh`;
    this.gridTable = '#statistics_all_time_grid_table';
    this.gridTableBody = `${this.gridTable} tbody`;
    this.gridTableEmptyRow = `${this.gridTableBody} tr.empty_row`;
    this.gridTableRow = `${this.gridTableBody} tr:not(.empty_row)`;
  }

  // Methods
  /**
   * @param page {Page}
   * @returns Promise<string>
   */
  async getTextForEmptyTable(page: Page): Promise<string> {
    return this.getTextContent(page, this.gridTableEmptyRow);
  }

  /**
   * Returns the number of products
   * @param page {Page}
   * @returns Promise<number>
   */
  async getNumProducts(page: Page): Promise<number> {
    return page.locator(this.gridTableRow).count();
  }

  /**
   * @param page {Page}
   * @returns Promise<void>
   */
  async refreshStatistics(page: Page): Promise<void> {
    await page.locator(this.refreshStatsButton).click();
    await page.waitForTimeout(2000);
  }
}

module.exports = new BlockwishlistStatistics();
