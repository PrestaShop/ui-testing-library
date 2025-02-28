import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOStatesPageInterface extends BOBasePagePageInterface {
  readonly pageTitle: string;

  bulkDeleteStates(page: Page): Promise<string>;
  bulkSetStatus(page: Page, wantedStatus: boolean): Promise<string>;
  deleteState(page: Page, row: number): Promise<string>;
  filterStates(page: Page, filterType: string, filterBy: string, value: string): Promise<void>;
  getAllRowsColumnContent(page: Page, columnName: string): Promise<string[]>;
  getNumberOfElement(page: Page): Promise<number>;
  getNumberOfElementInGrid(page: Page): Promise<number>;
  getStateStatus(page: Page, row: number): Promise<boolean>;
  getTextColumn(page: Page, row: number, columnName: string): Promise<string>;
  goToAddNewStatePage(page: Page): Promise<void>;
  goToEditStatePage(page: Page, row: number): Promise<void>;
  paginationNext(page: Page): Promise<string>;
  paginationPrevious(page: Page): Promise<string>;
  resetAndGetNumberOfLines(page: Page): Promise<number>;
  selectPaginationLimit(page: Page, number: number): Promise<string>;
  setStateStatus(page: Page, row: number, wantedStatus: boolean): Promise<boolean>;
  sortTable(page: Page, sortBy: string, sortDirection: string): Promise<void>;
}
