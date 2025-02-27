import type FakerStore from '@data/faker/store';
import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOStoresPageInterface extends BOBasePagePageInterface {
  readonly contactFormSuccessfulUpdateMessage: string;
  readonly pageTitle: string;

  bulkDeleteStores(page: Page): Promise<string>;
  bulkUpdateStoreStatus(page: Page, statusWanted: boolean): Promise<void>;
  deleteStore(page: Page, row: number): Promise<string>;
  filterTable(page: Page, filterType: string, filterBy: string, value: string): Promise<void>;
  getAllRowsColumnContent(page: Page, columnName: string): Promise<string[]>;
  getNumberOfElementInGrid(page: Page): Promise<number>;
  getStoreStatus(page: Page, row: number): Promise<boolean>;
  getTextColumn(page: Page, row: number, columnName: string): Promise<string>;
  gotoEditStorePage(page: Page, row: number): Promise<void>;
  goToNewStorePage(page: Page): Promise<void>;
  paginationNext(page: Page): Promise<string>;
  paginationPrevious(page: Page): Promise<string>;
  resetAndGetNumberOfLines(page: Page): Promise<number>;
  resetFilter(page: Page): Promise<void>;
  selectPaginationLimit(page: Page, number: number): Promise<string>;
  setContactDetails(page: Page, storeContactData: FakerStore): Promise<string>;
  setStoreStatus(page: Page, row: number, wantedStatus: boolean): Promise<void>;
  sortTable(page: Page, sortBy: string, sortDirection: string): Promise<void>;
}
