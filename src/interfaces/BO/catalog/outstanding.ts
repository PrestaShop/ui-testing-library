import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOOutstandingPageInterface extends BOBasePagePageInterface {
  readonly pageTitle: string;

  filterOutstandingByDate(page: Page, dateFrom: string, dateTo: string): Promise<void>;
  filterTable(page: Page, filterType: string, columnName: string, value: string): Promise<void>;
  getAllRowsColumnContent(page: Page, column: string): Promise<string[]>;
  getNumberOutstanding(page: Page): Promise<number>;
  getTextColumn(page: Page, columnName: string, row: number): Promise<string>;
  paginationNext(page: Page): Promise<string>;
  paginationPrevious(page: Page): Promise<string>;
  resetFilter(page: Page): Promise<void>;
  selectPaginationLimit(page: Page, number: number): Promise<string>;
  sortTable(page: Page, sortBy: string, sortDirection: string): Promise<void>;
  viewInvoice(page: Page, columnName: string, row?: number): Promise<string|null>;
  viewOrder(page: Page, columnName: string, row?: number): Promise<void>;
}
