import {BOBasePagePageInterface} from '@interfaces/BO';

import type {Page} from '@playwright/test';

export interface BOLanguagesPageInterface extends BOBasePagePageInterface {
  readonly pageTitle: string;
  readonly successfulUpdateStatusMessage: string;
  readonly unSuccessfulUpdateDefaultLanguageStatusMessage: string;

  bulkSetStatus(page: Page, toEnable?: boolean): Promise<string>;
  confirmDeleteLanguages(page: Page): Promise<void>;
  deleteLanguage(page: Page, row?: number): Promise<string>;
  deleteWithBulkActions(page: Page): Promise<string>;
  filterTable(page: Page, filterType: string, filterBy: string, value: string): Promise<void>;
  getAllRowsColumnContent(page: Page, column: string): Promise<string[]>;
  getImgSrc(page: Page, row: number): Promise<string>;
  getNumberOfElementInGrid(page: Page): Promise<number>;
  getPaginationLabel(page: Page): Promise<string>;
  getStatus(page: Page, row: number): Promise<boolean>;
  getTextColumnFromTable(page: Page, row: number, column: string): Promise<string>;
  goToAddNewLanguage(page: Page): Promise<void>;
  goToEditLanguage(page: Page, row?: number): Promise<void>;
  paginationNext(page: Page): Promise<string>;
  paginationPrevious(page: Page): Promise<string>;
  resetAndGetNumberOfLines(page: Page): Promise<number>;
  resetFilter(page: Page): Promise<void>;
  selectPaginationLimit(page: Page, number: number): Promise<string>;
  setStatus(page: Page, row: number, valueWanted?: boolean): Promise<boolean>;
  sortTable(page: Page, sortBy: string, sortDirection?: string): Promise<void>;
}
