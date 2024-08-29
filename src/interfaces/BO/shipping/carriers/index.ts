import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOCarriersPageInterface extends BOBasePagePageInterface {
  readonly pageTitle: string;
  readonly successfulUpdateStatusMessage: string;

  bulkDeleteCarriers(page: Page): Promise<string>;
  bulkSetSelection(page: Page, status: boolean): Promise<void>;
  bulkSetStatus(page: Page, action: string): Promise<string>;
  changePosition(page: Page, actualPosition: number, newPosition: number): Promise<string | null>;
  deleteCarrier(page: Page, row: number): Promise<string>;
  filterTable(page: Page, filterType: string, filterBy: string, value: string): Promise<void>;
  getAllRowsColumnContent(page: Page, columnName: string): Promise<string[]>;
  getNumberOfElementInGrid(page: Page): Promise<number>;
  getSelectedBulkCount(page: Page): Promise<number>;
  getStatus(page: Page, row?: number): Promise<boolean>;
  getTextColumn(page: Page, row: number, columnName: string): Promise<string>;
  goToAddNewCarrierPage(page: Page): Promise<void>;
  goToEditCarrierPage(page: Page, row: number): Promise<void>;
  isFreeShipping(page: Page, row?: number): Promise<boolean>;
  paginationNext(page: Page): Promise<string>;
  paginationPrevious(page: Page): Promise<string>;
  resetAndGetNumberOfLines(page: Page): Promise<number>;
  resetFilter(page: Page): Promise<void>;
  selectPaginationLimit(page: Page, number: number): Promise<string>;
  setFreeShippingStatus(page: Page, row?: number, valueWanted?: boolean): Promise<boolean>;
  setStatus(page: Page, row?: number, valueWanted?: boolean): Promise<boolean>;
  sortTable(page: Page, sortBy: string, sortDirection: string): Promise<void>;
}
