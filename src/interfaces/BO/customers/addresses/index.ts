import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOAddressesPageInterface extends BOBasePagePageInterface {
  readonly pageTitle: string;

  deleteAddress(page: Page, row: number): Promise<string>;
  deleteAddressesBulkActions(page: Page): Promise<string>;
  filterAddresses(page: Page, filterType: string, filterBy: string, value?: string): Promise<void>;
  getAllRowsColumnContent(page: Page, column: string): Promise<string[]>;
  getNumberOfElementInGrid(page: Page): Promise<number>;
  getTextColumnFromTableAddresses(page: Page, row: number, column: string): Promise<string>;
  goToAddNewAddressPage(page: Page): Promise<void>;
  goToEditAddressPage(page: Page, row: number): Promise<void>;
  paginationNext(page: Page): Promise<string>;
  paginationPrevious(page: Page): Promise<string>;
  resetAndGetNumberOfLines(page: Page): Promise<number>;
  resetFilter(page: Page): Promise<void>;
  selectPaginationLimit(page: Page, number: number): Promise<string>;
  setRequiredFields(page: Page, id: number, valueWanted?: boolean): Promise<string>;
  sortTable(page: Page, sortBy: string, sortDirection: string): Promise<void>;
}
