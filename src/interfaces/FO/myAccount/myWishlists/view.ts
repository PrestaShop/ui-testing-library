import {FOBasePagePageInterface} from '@interfaces/FO';
import type {Page} from '@playwright/test';

export interface FoMyWishlistsViewPageInterface extends FOBasePagePageInterface {
  readonly messageSuccessfullyRemoved: string;

  countProducts(page: Page): Promise<number>;
  getProductAttribute(page: Page, nth: number, attribute: string): Promise<string|null>;
  getProductName(page: Page, nth: number): Promise<string>;
  getProductQuantity(page: Page, nth: number): Promise<number>;
  hasButtonAddToCartDisabled(page: Page, nth: number): Promise<boolean>;
  isProductLastItemsInStock(page: Page, nth: number): Promise<boolean>;
  isProductOutOfStock(page: Page, nth: number): Promise<boolean>;
  removeProduct(page: Page, nth: number): Promise<string>;
}
