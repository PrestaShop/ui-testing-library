import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BODeliverySlipsPageInterface extends BOBasePagePageInterface {
  readonly errorMessageWhenGenerateFileByDate: string;
  readonly pageTitle: string;

  changeNumber(page: Page, number: number): Promise<void>;
  changePrefix(page: Page, prefix: string): Promise<void>;
  generatePDFByDateAndDownload(page: Page, dateFrom?: string, dateTo?: string): Promise<string | null>;
  generatePDFByDateAndFail(page: Page, dateFrom?: string, dateTo?: string): Promise<string>;
  saveDeliverySlipOptions(page: Page): Promise<string>;
  setEnableProductImage(page: Page, enable?: boolean): Promise<void>
}
