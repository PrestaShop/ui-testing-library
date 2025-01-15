import {type BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOLogsPageInterface extends BOBasePagePageInterface {
  readonly pageTitle: string;

  eraseAllLogs(page: Page): Promise<string>;
  filterLogs(page: Page, filterType: string, filterBy: string, value?: string): Promise<void>;
  filterLogsByDate(page: Page, dateFrom: string, dateTo: string): Promise<void>;
  getAllRowsColumnContent(page: Page, column: string): Promise<string[]>;
  getNumberOfElementInGrid(page: Page): Promise<number>;
  getNumberOfRowsInGrid(page: Page): Promise<number>;
  getTextColumn(page: Page, row: number, column: string): Promise<string>;
  paginationNext(page: Page): Promise<string>;
  paginationPrevious(page: Page): Promise<string>;
  resetAndGetNumberOfLines(page: Page): Promise<number>;
  resetFilter(page: Page): Promise<void>;
  selectPaginationLimit(page: Page, number: number): Promise<string>;
  setEmail(page: Page, email: string): Promise<string>;
  setMinimumSeverityLevel(page: Page, severityLevel: string): Promise<string>;
  sortTable(page: Page, sortBy: string, sortDirection: string): Promise<void>;
}
