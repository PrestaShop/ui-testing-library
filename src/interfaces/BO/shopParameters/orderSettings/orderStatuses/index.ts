import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOOrderStatusesPageInterface extends BOBasePagePageInterface {
  readonly pageTitle: string;
  readonly successfulUpdateStatusMessage: string;

  bulkDeleteOrderStatuses(page: Page, tableName: string): Promise<string>;
  deleteOrderStatus(page: Page, tableName: string, row: number): Promise<string>;
  filterTable(page: Page, tableName: string, filterType: string, filterBy: string, value: string): Promise<void>;
  getAllRowsColumnContent(page: Page, tableName: string, columnName: string): Promise<string[]>;
  getNumberOfElementInGrid(page: Page, tableName: string): Promise<number>;
  getStatus(page: Page, tableName: string, row: number, columnName: string): Promise<boolean>;
  getTextColumn(page: Page, tableName: string, row: number, columnName: string): Promise<string>;
  goToEditPage(page: Page, tableName: string, row: number): Promise<void>;
  goToNewOrderReturnStatusPage(page: Page): Promise<void>;
  goToNewOrderStatusPage(page: Page): Promise<void>;
  paginationNext(page: Page, tableName: string): Promise<string>;
  paginationPrevious(page: Page, tableName: string): Promise<string>;
  resetAndGetNumberOfLines(page: Page, tableName: string): Promise<number>;
  resetFilter(page: Page, tableName: string): Promise<void>;
  selectPaginationLimit(page: Page, tableName: string, number: number): Promise<string>;
  setStatus(page: Page, tableName: string, row: number, columnName: string, valueWanted?: boolean): Promise<boolean>;
  sortTable(page: Page, tableName: string, sortBy: string, columnID: number, sortDirection: string): Promise<void>;
}
