import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOCMSPagesPageInterface extends BOBasePagePageInterface {
  readonly pageTitle: string;
  readonly successfulUpdateStatusMessage: string;

  backToList(page: Page): Promise<void>;
  bulkSetStatus(page: Page, tableName: string, enable?: boolean): Promise<string>;
  deleteRowInTable(page: Page, tableName: string, row: number): Promise<string>;
  deleteWithBulkActions(page: Page, tableName: string): Promise<string>;
  filterTable(page: Page, tableName: string, filterType: string, filterBy: string, value?: string): Promise<void>;
  getAllRowsColumnContentTableCmsPage(page: Page, column: string): Promise<string[]>;
  getAllRowsColumnContentTableCmsPageCategory(page: Page, column: string): Promise<string[]>;
  getNumberOfElementInGrid(page: Page, tableName: string): Promise<number>;
  getStatus(page: Page, tableName: string, row: number): Promise<boolean>;
  getTextColumnFromTableCmsPage(page: Page, row: number, column: string): Promise<string>;
  getTextColumnFromTableCmsPageCategory(page: Page, row: number, column: string): Promise<string>;
  goToAddNewPage(page: Page): Promise<void>;
  goToAddNewPageCategory(page: Page): Promise<void>;
  goToEditCategoryPage(page: Page, row: number): Promise<void>;
  goToEditPage(page: Page, row: number): Promise<void>;
  paginationCategoryNext(page: Page): Promise<string>;
  paginationCategoryPrevious(page: Page): Promise<string>;
  paginationPagesNext(page: Page): Promise<string>;
  paginationPagesPrevious(page: Page): Promise<string>;
  resetAndGetNumberOfLines(page: Page, tableName: string): Promise<number>;
  selectCategoryPaginationLimit(page: Page, number: number): Promise<string>;
  selectPagesPaginationLimit(page: Page, number: number): Promise<string>;
  setStatus(page: Page, tableName: string, row: number, valueWanted?: boolean): Promise<boolean>;
  sortTableCmsPage(page: Page, sortBy: string, sortDirection?: string): Promise<void>;
  sortTableCmsPageCategory(page: Page, sortBy: string, sortDirection?: string): Promise<void>;
  viewCategory(page: Page, row: number): Promise<void>;
}
