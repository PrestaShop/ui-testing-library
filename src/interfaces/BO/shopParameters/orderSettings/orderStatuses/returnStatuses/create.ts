import type FakerOrderReturnStatus from '@data/faker/orderReturnStatus';
import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOReturnStatusesCreatePageInterface extends BOBasePagePageInterface {
  readonly pageTitleCreate: string;
  readonly pageTitleEdit: (name: string) => string;

  setOrderReturnStatus(page: Page, orderReturnStatusData: FakerOrderReturnStatus): Promise<string>;
}
