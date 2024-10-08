import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOQuickAccessInterface extends BOBasePagePageInterface {
  readonly pageTitle: string;

  bulkDeleteQuickAccessLink(page: Page): Promise<string>;
  filterTable(page: Page, filterType: string, filterBy:string, value: string): Promise<void>;
  getNumberOfElementInGrid(page: Page): Promise<number>;
  getTextColumn(page: Page, row: number, columnName: string): Promise<string>;
  goToAddNewQuickAccessPage(page: Page): Promise<void>;
  resetFilter(page: Page): Promise<void>;
}
