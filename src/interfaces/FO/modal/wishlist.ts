import {FOBasePagePageInterface} from '@interfaces/FO';

// Import data
import type {ProductAttribute, ProductDetails, ProductDetailsWithDiscount} from '@data/types/product';

import type {Page} from '@playwright/test';

export interface FoModalWishlistPageInterface extends FOBasePagePageInterface {
  readonly messageAddedToWishlist: string;

  addWishlist(page: Page, nth: number): Promise<string>;
  clickLoginOnModalLogin(page: Page): Promise<void>;
  clickCancelOnModalLogin(page: Page): Promise<boolean>;
  hasModalLogin(page: Page): Promise<boolean>;
}