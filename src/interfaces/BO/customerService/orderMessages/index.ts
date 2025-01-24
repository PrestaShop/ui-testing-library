import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOOrderMessagesPageInterface extends BOBasePagePageInterface {
  readonly pageTitle: string;

  deleteOrderMessage(page: Page, row?: number): Promise<string>;
  deleteWithBulkActions(page: Page): Promise<string>;
  filterTable(page: Page, filterBy: string, value: string): Promise<void>;
  getAllRowsColumnContent(page: Page, column: string): Promise<string[]>;
  getNumberOfElementInGrid(page: Page): Promise<number>;
  getTextColumnFromTable(page: Page, row: number, column: string): Promise<string>;
  goToAddNewOrderMessagePage(page: Page): Promise<void>;
  gotoEditOrderMessage(page: Page, row?: number): Promise<void>;
  paginationNext(page: Page): Promise<string>;
  paginationPrevious(page: Page): Promise<string>;
  resetAndGetNumberOfLines(page: Page): Promise<number>;
  selectPaginationLimit(page: Page, number: number): Promise<string>;
  sortTable(page: Page, sortBy: string, sortDirection?: string): Promise<void>;
}
