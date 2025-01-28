import {FOBasePagePageInterface} from '@interfaces/FO';
import type {Page} from '@playwright/test';

export interface FoSitemapPageInterface extends FOBasePagePageInterface {
  readonly pageTitle: string;

  getCategoryName(page: Page, categoryID: number): Promise<string>;
  getPageCategoryName(page: Page, pageCategoryID: number): Promise<string>;
  isBestSellersLinkVisible(page: Page): Promise<boolean>;
  isBrandsLinkVisible(page: Page): Promise<boolean>;
  isSuppliersLinkVisible(page: Page): Promise<boolean>;
  isVisibleCategory(page: Page, categoryID: number): Promise<boolean>;
  viewCreatedCategory(page: Page, categoryID: number): Promise<void>;
}
