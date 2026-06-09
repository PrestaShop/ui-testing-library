import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOWallOfFamePageInterface extends BOBasePagePageInterface {
  readonly pageTitle: string;
  getContributionPercentage(page: Page, contributor: 'PrestaShop' | 'Community'): Promise<number>;

  // Top Companies
  getTopCompaniesCardTitle(page: Page): Promise<string>;
  getTopCompaniesDescription(page: Page): Promise<string>;
  getTopCompaniesTableColumnHeaders(page: Page): Promise<string[]>;
  clickCompanyActionButton(page: Page, companyName: string): Promise<Page>;

  // Top Contributors
  getTopContributorsCardTitle(page: Page): Promise<string>;
  getTopContributorsDescription(page: Page): Promise<string>;
  getTopContributorsTableColumnHeaders(page: Page): Promise<string[]>;
  clickContributorActionButton(page: Page, contributorName: string): Promise<void>;
  getContributorModalName(page: Page): Promise<string>;
  getContributorModalGitHubUsername(page: Page): Promise<string>;
  isContributorModalAvatarVisible(page: Page): Promise<boolean>;
  closeContributorModal(page: Page): Promise<void>;
  clickViewAllContributorsButton(page: Page): Promise<Page>;

  // New Contributors
  getNewContributorsSectionTitle(page: Page): Promise<string>;
  getNewContributorsSectionDescription(page: Page): Promise<string>;
  getVisibleNewContributorsCount(page: Page): Promise<number>;
  getVisibleNewContributorNames(page: Page): Promise<string[]>;
  isFirstNewContributorAvatarVisible(page: Page): Promise<boolean>;
  clickNextNewContributorButton(page: Page): Promise<void>;
  clickPreviousNewContributorButton(page: Page): Promise<void>;
  isNextNewContributorButtonDisabled(page: Page): Promise<boolean>;
  isPreviousNewContributorButtonDisabled(page: Page): Promise<boolean>;
}
