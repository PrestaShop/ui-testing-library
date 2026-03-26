import {type OrderMerchandiseProductReturn} from '@data/types/order';
import {FOBasePagePageInterface} from '@interfaces/FO';
import {type Page} from '@playwright/test';

export interface FoMyOrderDetailsPageInterface extends FOBasePagePageInterface {
  readonly pageTitle: string;
  readonly successMessageText: string;

  addAMessage(page: Page, messageOption: string, messageText: string): Promise<string>;
  clickOnDownloadLink(page: Page, row?: number, column?: number): Promise<void>;
  clickOnReorderLink(page: Page): Promise<void>;
  downloadInvoice(page: Page): Promise<string | null>;
  getBoxMessages(page: Page): Promise<string>;
  getDeliveryAddress(page: Page): Promise<string>;
  getInvoiceAddress(page: Page): Promise<string>;
  getProductName(page: Page, row?: number, column?: number): Promise<string>;
  isInvoiceVisible(page: Page): Promise<boolean>;
  isOrderReturnFormVisible(page: Page): Promise<boolean>;
  requestMerchandiseReturn(
    page: Page,
    messageText?: string,
    productsNumber?: number,
    returnData?: OrderMerchandiseProductReturn[],
  ): Promise<void>;
}
