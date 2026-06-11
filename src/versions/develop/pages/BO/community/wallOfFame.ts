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

  public readonly contributePageTitle: string;

  public readonly joinSlackPageTitle: string;

  private readonly kpisItem: string;

  private readonly kpisValue: string;

  private readonly kpisLabel: string;

  // Top Companies card selectors
  // ⚠️ CSS classes come from the PUIK Vue component library — verify against actual rendered DOM if tests fail
  private readonly topCompaniesCard: string;

  private readonly topCompaniesCardTitle: string;

  private readonly topCompaniesDescription: string;

  private readonly howToContributeTable: string;

  private readonly contributeLink: string;

  private readonly joinSlackLink: string;

  private readonly topCompaniesTableHeaders: string;

  // Top Contributors card selectors
  private readonly topContributorsCard: string;

  private readonly topContributorsCardTitle: string;

  private readonly topContributorsDescription: string;

  private readonly topContributorsTableHeaders: string;

  private readonly contributorModal: string;

  private readonly contributorModalName: string;

  private readonly contributorModalGitHubUsername: string;

  private readonly contributorModalAvatar: string;

  private readonly contributorModalCloseButton: string;

  private readonly viewAllContributorsButton: string;

  // New Contributors section selectors
  private readonly newContributorsSection: string;

  private readonly newContributorsSectionTitle: string;

  private readonly newContributorsSectionDescription: string;

  private readonly newContributorCards: string;

  private readonly newContributorName: string;

  private readonly newContributorAvatar: string;

  private readonly nextNewContributorButton: string;

  private readonly previousNewContributorButton: string;

  /**
   * @constructs
   * Setting up texts and selectors to use on Wall of Fame page
   */
  constructor() {
    super();

    this.contributePageTitle = 'How to contribute code changes';
    this.joinSlackPageTitle = 'PrestaShop Project\'s Slack Chat';
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

    // Top Contributors card — second .wof-top-card
    this.topContributorsCard = '.wof-top-section__cards .wof-top-card:nth-child(2)';
    this.topContributorsCardTitle = `${this.topContributorsCard} .wof-top-card__title`;
    this.topContributorsDescription = `${this.topContributorsCard} .wof-top-card__description`;
    this.topContributorsTableHeaders = `${this.topContributorsCard} .puik-table__head__row__item`;
    this.viewAllContributorsButton = `${this.topContributorsCard} .wof-top-card__footer a`;

    // New Contributors section
    this.newContributorsSection = '.wof-new-contributors-section';
    this.newContributorsSectionTitle = `${this.newContributorsSection} .wof-new-contributors-section__title`;
    this.newContributorsSectionDescription = `${this.newContributorsSection} .wof-new-contributors-section__description`;
    this.newContributorCards = `${this.newContributorsSection} .wof-contributor-card`;
    this.newContributorName = `${this.newContributorCards} .wof-contributor-card__name`;
    this.newContributorAvatar = `${this.newContributorCards}:first-child img.wof-contributor-card__avatar`;
    this.nextNewContributorButton = `${this.newContributorsSection} button.wof-new-contributors__next`;
    this.previousNewContributorButton = `${this.newContributorsSection} button.wof-new-contributors__prev`;

    // Contributor modal (PUIK modal component)
    this.contributorModal = '.puik-modal';
    this.contributorModalName = `${this.contributorModal} .wof-contributor-modal__name`;
    this.contributorModalGitHubUsername = `${this.contributorModal} .wof-contributor-modal__username`;
    this.contributorModalAvatar = `${this.contributorModal} img.wof-contributor-modal__avatar`;
    this.contributorModalCloseButton = `${this.contributorModal} .wof-top-modal__close-btn`;
    this.contributorModalCloseButton = `${this.contributorModal} .puik-modal__close`;

    // "How to contribute" section
    this.contributeLink = '.puik-button--primary';
    this.howToContributeTable = '.wof-contribute-section__tite';
    this.joinSlackLink = '.puik-button--secondary:nth-child(1)';
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
   * Open Contribute link from the "How to contribute" section in a new tab and return the new page
   * @param page {Page} Browser tab
   * @returns {Promise<Page}
   */
  async clickContributeLink(page: Page): Promise<Page> {
    return this.openLinkWithTargetBlank(page, this.contributeLink, '.page-title', 'networkidle', false);
  }

  /**
   * Open Join Slack link from the "How to contribute" section in a new tab and return the new page
   * @param page {Page} Browser tab
   * @returns {Promise<Page}
   */
  async clickJoinSlackLink(page: Page): Promise<Page> {
    return this.openLinkWithTargetBlank(page, this.joinSlackLink, '.page-title', 'networkidle', false);
  }

  /**
   * Check if the "How to contribute" section is visible
   */
  async isHowToContributeVisible(page: Page): Promise<boolean> {
    return this.elementVisible(page, this.howToContributeTable);
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

  /**
   * Get the Top Contributors card title text
   */
  async getTopContributorsCardTitle(page: Page): Promise<string> {
    return this.getTextContent(page, this.topContributorsCardTitle);
  }

  /**
   * Get the Top Contributors card description text
   */
  async getTopContributorsDescription(page: Page): Promise<string> {
    return this.getTextContent(page, this.topContributorsDescription);
  }

  /**
   * Get the column header labels of the Top Contributors table
   */
  async getTopContributorsTableColumnHeaders(page: Page): Promise<string[]> {
    await this.waitForVisibleSelector(page, this.topContributorsTableHeaders, 15000);
    const rawTexts = await page.locator(this.topContributorsTableHeaders).allTextContents();

    return rawTexts.map((t: string) => t.replace(/\s+/g, ' ').trim()).filter((t: string) => t.length > 0);
  }

  /**
   * Click the action button for a given contributor to open the modal
   */
  async clickContributorActionButton(page: Page, contributorName: string): Promise<void> {
    await page.locator(`${this.topContributorsCard} tr:has-text("${contributorName}") button`).click();
    await this.waitForVisibleSelector(page, this.contributorModalCloseButton);
  }

  /**
   * Get the contributor name displayed in the modal
   */
  async getContributorModalName(page: Page): Promise<string> {
    return this.getTextContent(page, this.contributorModalName);
  }

  /**
   * Get the GitHub username displayed in the modal
   */
  async getContributorModalGitHubUsername(page: Page): Promise<string> {
    return this.getTextContent(page, this.contributorModalGitHubUsername);
  }

  /**
   * Check if the contributor avatar image is visible in the modal
   */
  async isContributorModalAvatarVisible(page: Page): Promise<boolean> {
    return this.elementVisible(page, this.contributorModalAvatar, 3000);
  }

  /**
   * Close the contributor modal by clicking the close button
   */
  async closeContributorModal(page: Page): Promise<void> {
    await this.waitForSelectorAndClick(page, this.contributorModalCloseButton);
    await this.waitForHiddenSelector(page, this.contributorModal);
  }

  /**
   * Click the "View all" button in the Top Contributors card and return the new tab
   */
  async clickViewAllContributorsButton(page: Page): Promise<Page> {
    return this.openLinkWithTargetBlank(
      page,
      this.viewAllContributorsButton,
      'body',
      'domcontentloaded',
      false,
    );
  }

  /**
   * Get the New Contributors section title
   */
  async getNewContributorsSectionTitle(page: Page): Promise<string> {
    return this.getTextContent(page, this.newContributorsSectionTitle);
  }

  /**
   * Get the New Contributors section description
   */
  async getNewContributorsSectionDescription(page: Page): Promise<string> {
    return this.getTextContent(page, this.newContributorsSectionDescription);
  }

  /**
   * Get the number of visible contributor cards
   */
  async getVisibleNewContributorsCount(page: Page): Promise<number> {
    await this.waitForVisibleSelector(page, this.newContributorCards, 15000);

    return page.locator(this.newContributorCards).count();
  }

  /**
   * Get the names of all currently visible new contributors
   */
  async getVisibleNewContributorNames(page: Page): Promise<string[]> {
    await this.waitForVisibleSelector(page, this.newContributorName, 15000);
    const rawTexts = await page.locator(this.newContributorName).allTextContents();

    return rawTexts.map((t: string) => t.trim()).filter((t: string) => t.length > 0);
  }

  /**
   * Check if the avatar of the first visible new contributor is visible
   */
  async isFirstNewContributorAvatarVisible(page: Page): Promise<boolean> {
    return this.elementVisible(page, this.newContributorAvatar, 3000);
  }

  /**
   * Click the next (→) button in the New Contributors carousel
   */
  async clickNextNewContributorButton(page: Page): Promise<void> {
    await this.waitForSelectorAndClick(page, this.nextNewContributorButton);
  }

  /**
   * Click the previous (←) button in the New Contributors carousel
   */
  async clickPreviousNewContributorButton(page: Page): Promise<void> {
    await this.waitForSelectorAndClick(page, this.previousNewContributorButton);
  }

  /**
   * Check if the next (→) button is disabled
   */
  async isNextNewContributorButtonDisabled(page: Page): Promise<boolean> {
    return this.elementNotVisible(page, `${this.nextNewContributorButton}:not([disabled])`, 2000);
  }

  /**
   * Check if the previous (←) button is disabled
   */
  async isPreviousNewContributorButtonDisabled(page: Page): Promise<boolean> {
    return this.elementNotVisible(page, `${this.previousNewContributorButton}:not([disabled])`, 2000);
  }
}

module.exports = new BOWallOfFamePage();
