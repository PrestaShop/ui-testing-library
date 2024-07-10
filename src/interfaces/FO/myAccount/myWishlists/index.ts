import {FOBasePagePageInterface} from '@interfaces/FO';
import type {Page} from '@playwright/test';

export interface FoMyWishlistsPageInterface extends FOBasePagePageInterface {
  readonly pageTitle: string;

  countWishlists(page: Page): Promise<number>;
  getWishlistName(page: Page, nth: number): Promise<string>;
  goToWishlistPage(page: Page, nth: number): Promise<void>;
}
