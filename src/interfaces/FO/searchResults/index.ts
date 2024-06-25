import {FOBasePagePageInterface} from '@interfaces/FO';
import type {Page} from '@playwright/test';

export interface FoSearchResultsPageInterface extends FOBasePagePageInterface {
  readonly pageTitle: string;

  getAllProductsAttribute(page: Page, attribute: string): Promise<string[]>;
  getProductPrice(page: Page): Promise<string>;
  getSearchResultsNumber(page: Page): Promise<number>;
  getSortByValue(page: Page): Promise<string>;
  goToProductPage(page: Page, id: number): Promise<void>;
  hasResults(page: Page): Promise<boolean>;
  quickViewProduct(page: Page, id: number): Promise<void>;
  sortProductsList(page: Page, sortBy: string): Promise<void>;
}
