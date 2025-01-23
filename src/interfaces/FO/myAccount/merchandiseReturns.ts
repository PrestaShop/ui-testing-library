import {type OrderMerchandiseReturns} from '@data/types/order';
import {FOBasePagePageInterface} from '@interfaces/FO';
import {type Page} from '@playwright/test';

export interface FoMyMerchandiseReturnsPageInterface extends FOBasePagePageInterface {
  readonly pageTitle: string;

  downloadReturnForm(page: Page, row?: number): Promise<string | null>;
  getMerchandiseReturnsDetails(page: Page, row?: number): Promise<OrderMerchandiseReturns>;
  getTextColumn(page: Page, columnName: string, row?: number): Promise<string>;
  goToReturnDetailsPage(page: Page, row?: number): Promise<void>;
}
