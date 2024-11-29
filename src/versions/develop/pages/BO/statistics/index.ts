import {type BOStatisticsPageInterface} from '@interfaces/BO/statistics';
import BOBasePage from '@pages/BO/BOBasePage';
import type {Page} from '@playwright/test';

/**
 * @class
 * @extends BOBasePage
 */
class BOStatisticsPage extends BOBasePage implements BOStatisticsPageInterface {
  public readonly pageTitle: string;

  public readonly subTabTitleStatsstock: string;

  public readonly subTabTitleStatsbestmanufacturers: string;

  public readonly subTabTitleStatsbestcategories: string;

  public readonly subTabTitleStatsbestcustomers: string;

  public readonly subTabTitleStatsbestsuppliers: string;

  public readonly subTabTitleStatsbestvouchers: string;

  public readonly subTabTitleStatsbestproducts: string;

  public readonly subTabTitleStatscarrier: string;

  public readonly subTabTitleStatscheckup: string;

  public readonly subTabTitleStatscatalog: string;

  public readonly subTabTitleStatsregistrations: string;

  public readonly subTabTitleStatsnewsletter: string;

  public readonly subTabTitlePagesnotfound: string;

  public readonly subTabTitleStatsproduct: string;

  public readonly subTabTitleStatspersonalinfos: string;

  public readonly subTabTitleStatssales: string;

  public readonly subTabTitleStatssearch: string;

  public readonly subTabTitleStatsforecast: string;

  protected readonly tabList: string;

  protected readonly tabItem: (moduleTag: string) => string;

  protected readonly panelStats: string;

  protected readonly panelTitle: string;

  /**
   * @constructs
   * Setting up titles and selectors to use on statistics page
   */
  constructor() {
    super();

    this.pageTitle = `Stats • ${global.INSTALL.SHOP_NAME}`;
    this.subTabTitleStatsstock = 'Evaluation of available quantities for sale';
    this.subTabTitleStatsbestmanufacturers = 'Best brands';
    this.subTabTitleStatsbestcategories = 'Best categories';
    this.subTabTitleStatsbestcustomers = 'Best customers';
    this.subTabTitleStatsbestsuppliers = 'Best suppliers';
    this.subTabTitleStatsbestvouchers = 'Best vouchers';
    this.subTabTitleStatsbestproducts = 'Best-selling products';
    this.subTabTitleStatscarrier = 'Carrier distribution';
    this.subTabTitleStatscheckup = 'Catalog evaluation';
    this.subTabTitleStatscatalog = 'Catalog statistics';
    this.subTabTitleStatsregistrations = 'Customer accounts';
    this.subTabTitleStatsnewsletter = 'Newsletter';
    this.subTabTitlePagesnotfound = 'Pages not found';
    this.subTabTitleStatsproduct = 'Product details';
    this.subTabTitleStatspersonalinfos = 'Registered customer information';
    this.subTabTitleStatssales = 'Sales and orders';
    this.subTabTitleStatssearch = 'Shop search';
    this.subTabTitleStatsforecast = 'Stats Dashboard';

    this.tabList = 'nav.list-group';
    this.tabItem = (moduleTag: string) => `${this.tabList} a.list-group-item`
      + `[href^="index.php?controller=AdminStats"][href$="module=${moduleTag}"]`;

    this.panelStats = '#statsContainer .panel';
    this.panelTitle = `${this.panelStats} div.panel-heading`;
  }

  /*
  Methods
   */
  /**
   * Go to a specific subtab
   * @param page {Page} Browser tab
   * @param moduleTag {String}
   * @param expectedTitle {String}
   * @returns {Promise<void>}
   */
  async goToSubTab(page: Page, moduleTag: string): Promise<void> {
    await page.locator(this.tabItem(moduleTag)).click();
    await page.waitForTimeout(5000);
  }

  /**
   * Returns the title of the tab
   * @param page {Page} Browser tab
   * @returns {Promise<string>}
   */
  async getSubTabTitle(page: Page): Promise<string> {
    return this.getTextContent(page, this.panelTitle);
  }
}

module.exports = new BOStatisticsPage();
