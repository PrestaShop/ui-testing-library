import {FOBasePagePageInterface} from '@interfaces/FO';

import {type Page} from '@playwright/test';

export interface FoModalWishlistPageInterface extends FOBasePagePageInterface {
  readonly messageAddedToWishlist: string;
  readonly messageLinkSharedWishlist: string;
  readonly messageWishlistCreated: string;

  addWishlist(page: Page, nth: number): Promise<string>;
  clickCancelOnModalCreate(page: Page): Promise<boolean>;
  clickCancelOnModalLogin(page: Page): Promise<boolean>;
  clickCancelOnModalShare(page: Page): Promise<boolean>;
  clickLoginOnModalLogin(page: Page): Promise<void>;
  clickCreateOnModalCreate(page: Page): Promise<string>;
  clickShareOnModalShare(page: Page): Promise<string>;
  hasModalLogin(page: Page): Promise<boolean>;
  hasModalCreate(page: Page): Promise<boolean>;
  hasModalShare(page: Page): Promise<boolean>;
  setNameOnModalCreate(page: Page, wishlistName: string): Promise<void>;
}
