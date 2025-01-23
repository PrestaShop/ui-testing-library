import {type OrderHistoryMessage, type OrderHistory} from '@data/types/order';
import {FOBasePagePageInterface} from '@interfaces/FO';
import {type Page} from '@playwright/test';

export interface FoMyOrderHistoryPageInterface extends FOBasePagePageInterface {
  readonly messageSuccessSent: string;
  readonly pageTitle: string;

  clickOnBackToYourAccountLink(page: Page): Promise<void>;
  clickOnHomeLink(page: Page): Promise<void>;
  clickOnReorderLink(page: Page, orderRow?: number): Promise<void>;
  downloadInvoice(page: Page, row?: number): Promise<string | null>;
  getMessageRow(page: Page, row?: number): Promise<string>;
  getNumberOfOrders(page: Page): Promise<number>;
  getOrderHistoryDetails(page: Page, row?: number): Promise<OrderHistory>;
  getOrderIdFromInvoiceHref(page: Page, orderRow?: number): Promise<string>;
  getOrderStatus(page: Page, orderRow?: number): Promise<string>;
  goToDetailsPage(page: Page, orderRow?: number): Promise<void>;
  goToOrderDetailsPage(page: Page, orderID?: number): Promise<void>;
  isBoxMessagesSectionVisible(page: Page): Promise<boolean>;
  isInvoiceVisible(page: Page, orderRow?: number): Promise<boolean>;
  isMessageRowVisible(page: Page, row?: number): Promise<boolean>;
  isReorderLinkVisible(page: Page, orderRow?: number): Promise<boolean>;
  sendMessage(page: Page, messageText: OrderHistoryMessage): Promise<string>;
}
