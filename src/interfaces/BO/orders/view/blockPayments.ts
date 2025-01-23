import {type OrderPayment} from '@data/types/order';
import {BOViewOrderBasePageInterface} from '@interfaces/BO/orders/view/viewOrderBasePage';
import {type Page} from '@playwright/test';

export interface BOProductBlockPaymentsPageInterface extends BOViewOrderBasePageInterface {
  addPayment(page: Page, paymentData: OrderPayment, invoice?: string): Promise<string>;
  displayPaymentDetail(page: Page, row?: number): Promise<string>;
  getCurrencySelectOptions(page: Page): Promise<string>;
  getInvoiceID(page: Page, row?: number): Promise<number>;
  getPaymentAmountInputValue(page: Page): Promise<string>;
  getPaymentsDetails(page: Page, row?: number): Promise<{
    date: string,
    amount: string,
    paymentMethod: string,
    invoice: string,
    transactionID: string,
  }>;
  getPaymentsNumber(page: Page): Promise<number>;
  getPaymentWarning(page: Page): Promise<string>;
}
