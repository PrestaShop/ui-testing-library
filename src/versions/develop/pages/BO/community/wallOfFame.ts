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

  // Top Companies card selectors
  // ⚠️ CSS classes come from the PUIK Vue component library — verify against actual rendered DOM if tests fail
  private readonly topCompaniesCard: string;

  private readonly topCompaniesCardTitle: string;

  private readonly topCompaniesDescription: string;

  private readonly topCompaniesTableHeaders: string;

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

    // Top Companies card — first .wof-top-card inside the top section cards container
    this.topCompaniesCard = '.wof-top-section__cards .wof-top-card:first-child';
    this.topCompaniesCardTitle = `${this.topCompaniesCard} .wof-top-card__title`;
    this.topCompaniesDescription = `${this.topCompaniesCard} .wof-top-card__description`;
    // puik-table renders <th class="puik-table__head__row__item ...">
    this.topCompaniesTableHeaders = `${this.topCompaniesCard} .puik-table__head__row__item`;
  }

  /**
   * Returns the action link selector for a specific company row
   * Uses Playwright extended CSS :has-text() to locate the row by company name
   */
  private companyActionLink(companyName: string): string {
    return `${this.topCompaniesCard} tr:has-text("${companyName}") a[aria-label="view profile"]`;
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

  /**
   * Get the Top Companies card title text
   */
  async getTopCompaniesCardTitle(page: Page): Promise<string> {
    return this.getTextContent(page, this.topCompaniesCardTitle);
  }

  /**
   * Get the Top Companies card description text
   */
  async getTopCompaniesDescription(page: Page): Promise<string> {
    return this.getTextContent(page, this.topCompaniesDescription);
  }

  /**
   * Get the column header labels of the Top Companies table
   * Waits for the table to be rendered (data loaded from external API)
   */
  async getTopCompaniesTableColumnHeaders(page: Page): Promise<string[]> {
    await this.waitForVisibleSelector(page, this.topCompaniesTableHeaders, 15000);
    const rawTexts = await page.locator(this.topCompaniesTableHeaders).allTextContents();
    return rawTexts.map((t: string) => t.replace(/\s+/g, ' ').trim()).filter((t: string) => t.length > 0);
  }

  /**
   * Click the "view profile" action button for a given company and return the new tab
   */
  async clickCompanyActionButton(page: Page, companyName: string): Promise<Page> {
    return this.openLinkWithTargetBlank(
      page,
      this.companyActionLink(companyName),
      'body',
      'domcontentloaded',
      false,
    );
  }
}

module.exports = new BOWallOfFamePage();
