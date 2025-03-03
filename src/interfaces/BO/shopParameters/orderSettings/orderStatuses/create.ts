import type FakerOrderStatus from '@data/faker/orderStatus';
import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOOrderStatusesCreatePageInterface extends BOBasePagePageInterface {
  readonly pageTitleCreate: string;
  readonly pageTitleEdit: (name: string) => string;

  setOrderStatus(page: Page, orderStatusData: FakerOrderStatus): Promise<string>;
}
