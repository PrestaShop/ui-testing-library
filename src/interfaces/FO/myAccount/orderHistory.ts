import {FOBasePagePageInterface} from '@interfaces/FO';
import {type Page} from '@playwright/test';
import {type OrderHistory, OrderHistoryMessage} from '@data/types/order';

export interface FoOrderHistoryPageInterface extends FOBasePagePageInterface {
  readonly pageTitle: string;

    getNumberOfOrders(page: Page): Promise<number>;
    getOrderHistoryDetails(page: Page, row?: number): Promise<OrderHistory>;
    isReorderLinkVisible(page: Page, orderRow?: number): Promise<boolean>;
    clickOnReorderLink(page: Page, orderRow?: number): Promise<void>;
    getOrderStatus(page: Page, orderRow?: number): Promise<string>;
    isInvoiceVisible(page: Page, orderRow?: number): Promise<boolean>;
    getOrderIdFromInvoiceHref(page: Page, orderRow?: number): Promise<string>;
    downloadInvoice(page: Page, row?: number): Promise<string | null>;
    goToDetailsPage(page: Page, orderRow?: number): Promise<void>;
    goToOrderDetailsPage(page: Page, orderID?: number): Promise<void>;
    clickOnBackToYourAccountLink(page: Page): Promise<void>;
    clickOnHomeLink(page: Page): Promise<void>;
    isBoxMessagesSectionVisible(page: Page): Promise<boolean>;
    isMessageRowVisible(page: Page, row?: number): Promise<boolean>;
    getMessageRow(page: Page, row?: number): Promise<string>;
    sendMessage(page: Page, messageText: OrderHistoryMessage): Promise<string>;
}
