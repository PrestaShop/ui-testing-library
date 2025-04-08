import {FOBasePagePageInterface} from '@interfaces/FO';
import {type Page} from '@playwright/test';

export interface FOMyCreditSlipsPageInterface extends FOBasePagePageInterface {
  readonly noCreditSlipsInfoMessage: string;
  readonly pageTitle: string;

  clickBackToYourAccountLink(page: Page): Promise<void>;
  clickHomeLink(page: Page): Promise<void>;
  clickOrderReference(page: Page, creditSlipRow?: number): Promise<void>;
  downloadCreditSlip(page: Page, creditSlipRow?: number): Promise<string | null>;
  getAlertInfoMessage(page: Page): Promise<string>;
  getCreditSlipID(page: Page, creditSlipRow?: number): Promise<string>;
  getDateIssued(page: Page, creditSlipRow?: number): Promise<string>;
  getNumberOfCreditSlips(page: Page): Promise<number>;
  getOrderReference(page: Page, creditSlipRow?: number): Promise<string>;
}
