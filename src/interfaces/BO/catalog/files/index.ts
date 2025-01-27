import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOFilesPageInterface extends BOBasePagePageInterface {
  readonly pageTitle: string;

  deleteFile(page: Page, row?: number): Promise<string>;
  deleteFilesBulkActions(page: Page): Promise<string>;
  filterTable(page: Page, filterBy: string, value?: string): Promise<void>;
  getAllRowsColumnContent(page: Page, column: string): Promise<string[]>;
  getNumberOfElementInGrid(page: Page): Promise<number>;
  getTextColumnFromTable(page: Page, row: number, column: string): Promise<string>;
  goToAddNewFilePage(page: Page): Promise<void>;
  goToEditFilePage(page: Page, row?: number): Promise<void>;
  paginationNext(page: Page): Promise<string>;
  paginationPrevious(page: Page): Promise<string>;
  resetAndGetNumberOfLines(page: Page): Promise<number>;
  selectPaginationLimit(page: Page, number: number): Promise<string>;
  sortTable(page: Page, sortBy: string, sortDirection?: string): Promise<void>;
  viewFile(page: Page, row?: number): Promise<string|null>;
}
