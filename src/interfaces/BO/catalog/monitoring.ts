import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOMonitoringPageInterface extends BOBasePagePageInterface {
  readonly pageTitle: string;

  bulkDeleteElementsInTable(page: Page, tableName: string): Promise<string>;
  deleteCategoryInGrid(page: Page, tableName: string, row: number, deletionModePosition: number): Promise<string>;
  deleteProductInGrid(page: Page, tableName: string, row: number): Promise<string>;
  filterTable(page: Page, tableName: string, filterType: string, filterBy: string, value?: string): Promise<void>;
  getAllRowsColumnContent(page: Page, tableName: string, column: string): Promise<string[]>;
  getTextColumnFromTable(page: Page, tableName: string, row: number, column: string): Promise<string>;
  paginationNext(page: Page, tableName: string): Promise<string>;
  paginationPrevious(page: Page, tableName: string): Promise<string>;
  resetAndGetNumberOfLines(page: Page, tableName: string): Promise<number>;
  selectPaginationLimit(page: Page, tableName: string, number: number): Promise<string>;
  sortTable(page: Page, tableName: string, sortBy: string, sortDirection?: string): Promise<void>;
}
