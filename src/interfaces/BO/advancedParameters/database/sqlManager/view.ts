import {BOBasePagePageInterface} from '@interfaces/BO';
import type {Page} from '@playwright/test';

export interface BOSQLManagerViewPageInterface extends BOBasePagePageInterface {
  readonly pageTitle: string;

  getColumnName(page: Page, column?: number): Promise<string>;
  getSQLQueryResultNumber(page: Page): Promise<number>;
  getTextColumn(page: Page, row: number, column: string): Promise<string>;
}
