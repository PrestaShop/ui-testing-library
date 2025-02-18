import {BOBasePagePageInterface} from '@interfaces/BO';
import type {Page} from '@playwright/test';

export interface BOSuppliersPageInterface extends BOBasePagePageInterface {
  readonly pageTitle: string;
  readonly successfulUpdateStatusMessage: string;

  bulkSetStatus(page: Page, enable?: boolean): Promise<string>;
  deleteSupplier(page: Page, row?: number): Promise<string>;
  deleteWithBulkActions(page: Page): Promise<string>;
  filterSupplierEnabled(page: Page, value: boolean): Promise<void>;
  filterTable(page: Page, filterType: string, filterBy: string, value?: string): Promise<void>;
  getAllRowsColumnContent(page: Page, column: string): Promise<string[]>;
  getNumberOfElementInGrid(page: Page): Promise<number>;
  getStatus(page: Page, row?: number): Promise<boolean>;
  getTextColumnFromTableSupplier(page: Page, row: number, column: string): Promise<string>;
  goToAddNewSupplierPage(page: Page): Promise<void>;
  goToEditSupplierPage(page: Page, row?: number): Promise<void>;
  paginationNext(page: Page): Promise<string>;
  paginationPrevious(page: Page): Promise<string>;
  resetAndGetNumberOfLines(page: Page): Promise<number>;
  resetFilter(page: Page): Promise<void>;
  selectPaginationLimit(page: Page, number: number): Promise<string>;
  setStatus(page: Page, row?: number, valueWanted?: boolean): Promise<boolean>;
  sortTable(page: Page, sortBy: string, sortDirection?: string): Promise<void>;
  viewSupplier(page: Page, row?: number): Promise<void>;
}
