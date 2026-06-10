import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOWallOfFamePageInterface extends BOBasePagePageInterface {
  readonly pageTitle: string;
  clickCompanyActionButton(page: Page, companyName: string): Promise<Page>;
  clickContributorActionButton(page: Page, contributorName: string): Promise<void>;
  clickNextNewContributorButton(page: Page): Promise<void>;
  clickPreviousNewContributorButton(page: Page): Promise<void>;
  clickViewAllContributorsButton(page: Page): Promise<Page>;
  closeContributorModal(page: Page): Promise<void>;
  getContributionPercentage(page: Page, contributor: 'PrestaShop' | 'Community'): Promise<number>;
  getContributorModalGitHubUsername(page: Page): Promise<string>;
  getContributorModalName(page: Page): Promise<string>;
  getNewContributorsSectionDescription(page: Page): Promise<string>;
  getNewContributorsSectionTitle(page: Page): Promise<string>;
  getTopCompaniesCardTitle(page: Page): Promise<string>;
  getTopCompaniesDescription(page: Page): Promise<string>;
  getTopCompaniesTableColumnHeaders(page: Page): Promise<string[]>;
  getTopContributorsCardTitle(page: Page): Promise<string>;
  getTopContributorsDescription(page: Page): Promise<string>;
  getTopContributorsTableColumnHeaders(page: Page): Promise<string[]>;
  getVisibleNewContributorNames(page: Page): Promise<string[]>;
  getVisibleNewContributorsCount(page: Page): Promise<number>;
  isContributorModalAvatarVisible(page: Page): Promise<boolean>;
  isFirstNewContributorAvatarVisible(page: Page): Promise<boolean>;
  isNextNewContributorButtonDisabled(page: Page): Promise<boolean>;
  isPreviousNewContributorButtonDisabled(page: Page): Promise<boolean>;
}
