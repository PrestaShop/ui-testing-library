import {type BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOMultistoreShopUrlPageInterface extends BOBasePagePageInterface {
  readonly successUpdateMessage: string;

  bulkSetStatus(page: Page, wantedStatus: boolean): Promise<void>;
  deleteShopURL(page: Page, row: number): Promise<string>;
  filterTable(page: Page, filterType: string, filterBy: string, value: string): Promise<void>;
  getAllRowsColumnContent(page: Page, columnName: string): Promise<string[]>;
  getNumberOfElementInGrid(page: Page): Promise<number>;
  getStatus(page: Page, row: number, column: string): Promise<boolean>;
  getTextColumn(page: Page, row: number, columnName: string): Promise<string>;
  goToAddNewUrl(page: Page): Promise<void>;
  goToEditShopURLPage(page: Page, row: number): Promise<void>;
  paginationNext(page: Page): Promise<string>;
  paginationPrevious(page: Page): Promise<string>;
  resetAndGetNumberOfLines(page: Page): Promise<number>;
  selectPaginationLimit(page: Page, number: number): Promise<string>;
  setStatus(page: Page, row: number, column: string, valueWanted?: boolean): Promise<boolean>;
  sortTable(page: Page, sortBy: string, sortDirection: string): Promise<void>;
}
