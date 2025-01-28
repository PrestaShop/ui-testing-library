import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOAttributesViewPageInterface extends BOBasePagePageInterface {
  readonly pageTitle: (attributeName: string) => string;

  backToAttributesList(page: Page): Promise<void>;
  bulkDeleteValues(page: Page): Promise<string>;
  changePosition(page: Page, actualPosition: number, newPosition: number): Promise<string|null>;
  deleteValue(page: Page, row: number): Promise<string>;
  filterTable(page: Page, filterBy: string, value: string): Promise<void>;
  getAllRowsColumnContent(page: Page, columnName: string): Promise<string[]>;
  getNumberOfElementInGrid(page: Page): Promise<number>;
  getTextColumn(page: Page, row: number, columnName: string): Promise<string>;
  goToAddNewValuePage(page: Page): Promise<void>;
  goToEditValuePage(page: Page, row: number): Promise<void>;
  paginationNext(page: Page): Promise<string>;
  paginationPrevious(page: Page): Promise<string>;
  resetAndGetNumberOfLines(page: Page): Promise<number>;
  selectPaginationLimit(page: Page, number: number): Promise<string>;
  sortTable(page: Page, sortBy: string, sortDirection: string): Promise<void>;
}
