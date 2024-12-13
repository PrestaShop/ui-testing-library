import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOSearchAliasPageInterface extends BOBasePagePageInterface {
  readonly errorFillFieldMessage: string;
  readonly errorMaxWordLengthInvalidMessage: string;
  readonly pageTitle: string;
  readonly settingsUpdateMessage: string;
  readonly successfulUpdateStatusMessage: string;
  readonly updateSuccessMessage: string;

  bulkDeleteAliases(page: Page): Promise<string>;
  bulkSetStatus(page: Page, enable?: boolean): Promise<string>;
  deleteAlias(page: Page, row: number): Promise<string>;
  filterTable(page: Page, filterType: string, filterBy: string, value: string): Promise<void>;
  getAllRowsColumnContent(page: Page, columnName: string): Promise<string[]>;
  getNumberOfElementInGrid(page: Page): Promise<number>;
  getStatus(page: Page, row: number): Promise<boolean>;
  getTextColumn(page: Page, row: number, columnName: string): Promise<string>;
  goToAddNewAliasPage(page: Page): Promise<void>;
  gotoEditAliasPage(page: Page, row: number): Promise<void>;
  paginationNext(page: Page): Promise<string>;
  paginationPrevious(page: Page): Promise<string>;
  resetAndGetNumberOfLines(page: Page): Promise<number>;
  resetFilter(page: Page): Promise<void>;
  selectPaginationLimit(page: Page, number: number): Promise<string>;
  setStatus(page: Page, row: number, valueWanted?: boolean): Promise<boolean>;
  sortTable(page: Page, sortBy: string, sortDirection: string): Promise<void>;
}
