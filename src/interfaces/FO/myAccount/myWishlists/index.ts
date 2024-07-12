import {FOBasePagePageInterface} from '@interfaces/FO';
import type {Page} from '@playwright/test';

export interface FoMyWishlistsPageInterface extends FOBasePagePageInterface {
  readonly pageTitle: string;
  readonly wishlistListItemNthTitle: (nth: number) => string;

  clickCreateWishlistButton(page: Page): Promise<void>;
  clickShareWishlistButton(page: Page, nth: number): Promise<void>;
  countWishlists(page: Page): Promise<number>;
  getWishlistName(page: Page, nth: number): Promise<string>;
  goToWishlistPage(page: Page, nth: number): Promise<void>;
}
