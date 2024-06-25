import {FOBasePagePageInterface} from '@interfaces/FO';
import type {Page} from '@playwright/test';

export interface FoSearchResultsPageInterface extends FOBasePagePageInterface {
  readonly pageTitle: string;

  getProductPrice(page: Page): Promise<string>;
  getSearchResultsNumber(page: Page): Promise<number>;
  goToProductPage(page: Page, id: number): Promise<void>;
  hasResults(page: Page): Promise<boolean>;
  quickViewProduct(page: Page, id: number): Promise<void>;
}
