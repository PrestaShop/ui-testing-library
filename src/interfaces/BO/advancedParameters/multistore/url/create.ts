import {type BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOMultistoreShopUrlCreatePageInterface extends BOBasePagePageInterface {
  readonly errorDisableMainURLMessage: string;
  readonly errorDisableShopMessage: string;
  readonly pageTitleCreate: string;
  readonly pageTitleEdit: string;

  setMainURL(page: Page, status: string): Promise<string>;
  setShopStatus(page: Page, status: string): Promise<string>;
  setVirtualUrl(page: Page, url: string): Promise<string>;
}
