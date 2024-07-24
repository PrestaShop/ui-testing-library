import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOCountriesPageInterface extends BOBasePagePageInterface {
  readonly pageTitle: string;
  readonly settingsUpdateMessage: string;

  bulkSetStatus(page: Page, wantedStatus: boolean): Promise<void>;
  deleteCountriesByBulkActions(page: Page): Promise<string>;
  filterTable(page: Page, filterType: string, filterBy: string, value: string): Promise<void>;
  getAllRowsColumnContent(page: Page, columnName: string): Promise<string[]>;
  getCountryStatus(page: Page, row: number): Promise<boolean>;
  getNumberOfElementInGrid(page: Page): Promise<number>;
  getTextColumnFromTable(page: Page, row: number, columnName: string): Promise<string>;
  goToAddNewCountryPage(page: Page): Promise<void>;
  goToEditCountryPage(page: Page, row?: number): Promise<void>;
  paginationNext(page: Page): Promise<string>;
  paginationPrevious(page: Page): Promise<string>;
  resetAndGetNumberOfLines(page: Page): Promise<number>;
  resetFilter(page: Page): Promise<void>;
  selectPaginationLimit(page: Page, number: number): Promise<string>;
  setCountriesRestrictions(page: Page, toEnable?: boolean): Promise<string>;
  setCountryStatus(page: Page, row: number, wantedStatus: boolean): Promise<void>;
  sortTable(page: Page, sortBy: string, sortDirection: string): Promise<void>;
}
