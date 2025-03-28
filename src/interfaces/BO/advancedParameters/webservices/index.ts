import {type BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOWebservicesPageInterface extends BOBasePagePageInterface {
  readonly pageTitle: string;
  readonly successfulUpdateStatusMessage: string;

  bulkSetStatus(page: Page, enable?: boolean): Promise<string>;
  deleteWebserviceKey(page: Page, row: number): Promise<string>;
  deleteWithBulkActions(page: Page): Promise<string>;
  filterWebserviceTable(page: Page, filterType: string, filterBy: string, value?: string): Promise<void>;
  getNumberOfElementInGrid(page: Page): Promise<number>;
  getAllRowsColumnContent(page: Page, column: string): Promise<string[]>;
  getStatus(page: Page, row: number): Promise<boolean>;
  getTextColumnFromTable(page: Page, row: number, column: string): Promise<string>;
  getValidationMessage(page: Page): Promise<string>;
  goToAddNewWebserviceKeyPage(page: Page): Promise<void>;
  goToEditWebservicePage(page: Page, row: number): Promise<void>;
  paginationNext(page: Page): Promise<string>;
  paginationPrevious(page: Page): Promise<string>;
  resetAndGetNumberOfLines(page: Page): Promise<number>;
  selectPaginationLimit(page: Page, number: number): Promise<string>;
  setStatus(page: Page, row: number, valueWanted?: boolean): Promise<boolean>;
  setWebserviceStatus(page: Page, status: boolean): Promise<string>;
  sortTable(page: Page, sortBy: string, sortDirection: string): Promise<void>;
}
