import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOShoppingCartsPageInterface extends BOBasePagePageInterface {
  readonly pageTitle: string;

  bulkDeleteShoppingCarts(page: Page): Promise<string>;
  exportDataToCsv(page: Page): Promise<string | null>;
  filterByDate(page: Page, dateFrom: string, dateTo: string): Promise<void>;
  filterTable(page: Page, filterType: string, filterBy: string, value: string): Promise<void>;
  getAllRowsColumnContent(page: Page, columnName: string): Promise<string[]>;
  getCartInCsvFormat(page: Page, row: number): Promise<string>;
  getNumberOfElementInGrid(page: Page): Promise<number>;
  getTextColumn(page: Page, row: number, columnName: string): Promise<string>;
  goToViewPage(page: Page, row: number): Promise<void>;
  paginationNext(page: Page): Promise<string>;
  paginationPrevious(page: Page): Promise<string>;
  resetAndGetNumberOfLines(page: Page): Promise<number>;
  resetFilter(page: Page): Promise<void>;
  selectPaginationLimit(page: Page, number: number): Promise<string>;
  sortTable(page: Page, sortBy: string, sortDirection: string): Promise<void>;
}
