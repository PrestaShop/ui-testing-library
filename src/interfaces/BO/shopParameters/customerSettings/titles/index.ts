import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOTitlesPageInterface extends BOBasePagePageInterface {
  readonly pageTitle: string;

  bulkDeleteTitles(page: Page): Promise<string>;
  deleteTitle(page: Page, row: number): Promise<string>;
  filterTitles(page: Page, filterType: string, filterBy: string, value: string): Promise<void>;
  getAllRowsColumnContent(page: Page, column: string): Promise<string[]>;
  getNumberOfElementInGrid(page: Page): Promise<number>;
  getTextColumn(page: Page, row: number, columnName: string): Promise<string>;
  goToAddNewTitle(page: Page): Promise<void>;
  gotoEditTitlePage(page: Page, row: number): Promise<void>;
  paginationNext(page: Page): Promise<string>;
  paginationPrevious(page: Page): Promise<string>;
  resetAndGetNumberOfLines(page: Page): Promise<number>;
  resetFilter(page: Page): Promise<void>;
  selectPaginationLimit(page: Page, number: number): Promise<string>;
  sortTable(page: Page, sortBy: string, sortDirection: string): Promise<void>;
}
