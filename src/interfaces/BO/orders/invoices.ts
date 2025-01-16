import type FakerOrderInvoice from '@data/faker/orderInvoice';
import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOInvoicesPageInterface extends BOBasePagePageInterface {
  readonly errorMessageWhenGenerateFileByDate: string;
  readonly errorMessageWhenGenerateFileByStatus: string;
  readonly errorMessageWhenNotSelectStatus: string;
  readonly pageTitle: string;

  changePrefix(page: Page, prefix: string): Promise<void>;
  chooseInvoiceOptionsYearPosition(page: Page, id: number): Promise<void>;
  chooseStatus(page: Page, statusName: string): Promise<void>;
  enableAddCurrentYearToInvoice(page: Page, enable?: boolean): Promise<void>;
  enableInvoices(page: Page, enable?: boolean): Promise<void>;
  enableProductImage(page: Page, enable?: boolean): Promise<void>;
  enableTaxBreakdown(page: Page, enable?: boolean): Promise<void>;
  generatePDFByDateAndDownload(page: Page, dateFrom?: string, dateTo?: string): Promise<string|null>;
  generatePDFByDateAndFail(page: Page, dateFrom?: string, dateTo?: string): Promise<string>;
  generatePDFByStatusAndDownload(page: Page): Promise<string|null>;
  generatePDFByStatusAndFail(page: Page): Promise<string>;
  saveInvoiceOptions(page: Page): Promise<string>;
  setInputOptions(page: Page, data: FakerOrderInvoice): Promise<void>;
}
