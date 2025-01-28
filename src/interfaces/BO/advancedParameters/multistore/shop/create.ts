import type FakerShop from '@data/faker/shop';
import {type BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOMultistoreShopCreatePageInterface extends BOBasePagePageInterface {
  readonly pageTitleCreate: string;
  readonly pageTitleEdit: string;

  getSourceStore(page: Page): Promise<string>;
  setShop(page: Page, shopData: FakerShop): Promise<string>;
}
