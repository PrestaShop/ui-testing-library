import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Frame, type Page} from '@playwright/test';

export interface BOShoppingCartsViewPageInterface extends BOBasePagePageInterface {
  readonly pageTitle: (cardID: string) => string;

  createOrderFromThisCart(page: Page): Promise<void>;
  getCartId(page: Frame|Page): Promise<string>;
  getCartTotal(page: Frame|Page): Promise<number>;
  getCustomerInformation(page: Frame|Page): Promise<string>;
  getOrderInformation(page: Frame|Page): Promise<string>;
  getTextColumn(page: Frame|Page, columnName: string, row?: number): Promise<string | null>;
  goToOrderPage(page: Page): Promise<void>;
  hasButtonCreateOrderFromCart(page: Frame|Page): Promise<boolean>;
}
