import {BOBasePagePageInterface} from '@interfaces/BO';
import type {Page} from '@playwright/test';

export interface BOSQLManagerPageInterface extends BOBasePagePageInterface {
  readonly pageTitle: string;

  deleteWithBulkActions(page: Page): Promise<string>;
  deleteSQLQuery(page: Page, row?: number): Promise<string>;
  exportSqlResultDataToCsv(page: Page, row?: number): Promise<string|null>;
  filterSQLQuery(page: Page, filterBy: string, value?: string): Promise<void>;
  getAllRowsColumnContent(page: Page, column: string): Promise<string[]>;
  getNumberOfElementInGrid(page: Page): Promise<number>;
  getTextColumnFromTable(page: Page, row: number, column: string): Promise<string>;
  goToDbBackupPage(page: Page): Promise<void>;
  goToEditSQLQueryPage(page: Page, row?: number): Promise<void>;
  goToNewSQLQueryPage(page: Page): Promise<void>;
  goToViewSQLQueryPage(page: Page, row?: number): Promise<void>;
  paginationNext(page: Page): Promise<string>;
  paginationPrevious(page: Page): Promise<string>;
  resetAndGetNumberOfLines(page: Page): Promise<number>;
  resetFilter(page: Page): Promise<void>;
  selectPaginationLimit(page: Page, number: number): Promise<string>;
  sortTable(page: Page, sortBy: string, sortDirection: string): Promise<void>;
}
