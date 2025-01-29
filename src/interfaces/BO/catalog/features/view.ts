import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOFeaturesViewPageInterface extends BOBasePagePageInterface {
  bulkDeleteValues(page: Page): Promise<string>;
  changePosition(page: Page, actualPosition: number, newPosition: number): Promise<string|null>;
  clickOnBackToTheListButton(page: Page): Promise<void>;
  deleteValue(page: Page, row: number): Promise<string>;
  filterTable(page: Page, filterBy: string, value: string): Promise<void>;
  getAllRowsColumnContent(page: Page, columnName: string): Promise<string[]>;
  getNumberOfElementInGrid(page: Page): Promise<number>;
  getTextColumn(page: Page, row: number, columnName: string): Promise<string>;
  goToAddNewValuePage(page: Page): Promise<void>;
  goToEditValuePage(page: Page, row: number): Promise<void>;
  paginationNext(page: Page): Promise<number>;
  paginationPrevious(page: Page): Promise<number>;
  resetAndGetNumberOfLines(page: Page): Promise<number>;
  selectPaginationLimit(page: Page, number: number): Promise<number>;
  sortTable(page: Page, sortBy: string, sortDirection: string): Promise<void>;
}
