import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOAttributesPageInterface extends BOBasePagePageInterface {
  readonly pageTitle: string;

  bulkDeleteAttributes(page: Page): Promise<string>;
  changePosition(page: Page, actualPosition: number, newPosition: number): Promise<string>;
  deleteAttribute(page: Page, row: number): Promise<string>;
  filterTable(page: Page, filterBy: string, value: string): Promise<void>;
  getAllRowsColumnContent(page: Page, columnName: string): Promise<string[]>;
  getNumberOfElementInGrid(page: Page): Promise<number>;
  getTextColumn(page: Page, row: number, columnName: string): Promise<string>;
  goToAddAttributePage(page: Page): Promise<void>;
  goToEditAttributePage(page: Page, row: number): Promise<void>;
  goToFeaturesPage(page: Page): Promise<void>;
  paginationNext(page: Page): Promise<string>;
  paginationPrevious(page: Page): Promise<string>;
  resetAndGetNumberOfLines(page: Page): Promise<number>;
  resetFilter(page: Page): Promise<void>;
  selectPaginationLimit(page: Page, number: number): Promise<string>;
  sortTable(page: Page, sortBy: string, sortDirection: string): Promise<void>;
  viewAttribute(page: Page, row: number): Promise<void>;
}
