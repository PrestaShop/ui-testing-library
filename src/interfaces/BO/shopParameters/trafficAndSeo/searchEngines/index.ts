import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOSearchEnginesPageInterface extends BOBasePagePageInterface {
  readonly pageTitle: string;

  bulkDeleteSearchEngine(page: Page): Promise<string>;
  deleteSearchEngine(page: Page, row: number): Promise<string>;
  filterTable(page: Page, filterBy: string, value: string): Promise<void>;
  getAllRowsColumnContent(page: Page, columnName: string): Promise<string[]>;
  getNumberOfElementInGrid(page: Page): Promise<number>;
  getTextColumn(page: Page, row: number, columnName: string): Promise<string>;
  goToEditSearchEnginePage(page: Page, row: number): Promise<void>;
  goToNewSearchEnginePage(page: Page): Promise<void>;
  paginationNext(page: Page): Promise<string>;
  paginationPrevious(page: Page): Promise<string>;
  resetAndGetNumberOfLines(page: Page): Promise<number>;
  selectPaginationLimit(page: Page, number: number): Promise<string>;
  sortTable(page: Page, sortBy: string, sortDirection?: string): Promise<void>;
}
