import {FOBasePagePageInterface} from '@interfaces/FO';
import {type Page} from '@playwright/test';

export interface FoMyVouchersPageInterface extends FOBasePagePageInterface {
  readonly pageTitle: string;

  getNumberOfVouchers(page: Page): Promise<number>;
  getTextColumnFromTableVouchers(page: Page, row: number, columnName: string): Promise<string>;
}
