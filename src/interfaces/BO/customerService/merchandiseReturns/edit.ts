import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOMerchandiseReturnsEditPageInterface extends BOBasePagePageInterface {
  readonly pageTitle: string;

  clickOnCancelButton(page: Page): Promise<void>;
  clickOnDeleteLastProductButton(page: Page, row?: number): Promise<string>;
  deleteProduct(page: Page, row?: number): Promise<string>;
  downloadPDF(page: Page): Promise<string | null>;
  getFileName(page: Page): Promise<string>;
  setStatus(page: Page, status: string, saveAndStay?: boolean): Promise<string>;
}
