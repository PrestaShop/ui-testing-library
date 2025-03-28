import type FakerShopGroup from '@data/faker/shopGroup';
import {type BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOMultistoreGroupCreatePageInterface extends BOBasePagePageInterface {
  readonly pageTitleCreate: string;
  readonly pageTitleEdit: string;

  setShopGroup(page: Page, shopGroupData: FakerShopGroup): Promise<string>;
}
