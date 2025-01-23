import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOMerchandiseReturnsPageInterface extends BOBasePagePageInterface {
  readonly errorDeletionMessage: string;
  readonly pageTitle: string;

  filterMerchandiseReturnsTable(page: Page, filterBy: string, value: string): Promise<void>;
  getTextColumnFromMerchandiseReturnsTable(page: Page, columnName: string, row?: number): Promise<string>;
  goToMerchandiseReturnPage(page: Page, row?: number): Promise<void>;
  setOrderReturnStatus(page: Page, status?: boolean): Promise<string>;
  setReturnsPrefix(page: Page, prefix: string): Promise<string>;
}
