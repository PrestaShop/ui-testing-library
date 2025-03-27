import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOSeoUrlsPageInterface extends BOBasePagePageInterface {
  readonly pageTitle: string;
  readonly successfulSettingsUpdateMessage: string;

  bulkDeleteSeoUrlPage(page: Page): Promise<string>;
  deleteSeoUrlPage(page: Page, row?: number): Promise<string>;
  enableDisableAccentedURL(page: Page, toEnable?: boolean): Promise<string>;
  enableDisableFriendlyURL(page: Page, toEnable?: boolean): Promise<string>;
  filterTable(page: Page, filterBy: string, value?: string): Promise<void>;
  getAllRowsColumnContent(page: Page, column: string): Promise<string[]>;
  getNumberOfElementInGrid(page: Page): Promise<number>;
  getTextColumnFromTable(page: Page, row: number, column: string): Promise<string>;
  goToEditSeoUrlPage(page: Page, row?: number): Promise<void>;
  goToNewSeoUrlPage(page: Page): Promise<void>;
  goToSearchEnginesPage(page: Page): Promise<void>;
  paginationNext(page: Page): Promise<string>;
  paginationPrevious(page: Page): Promise<string>;
  resetAndGetNumberOfLines(page: Page): Promise<number>;
  selectPaginationLimit(page: Page, number: number): Promise<string>;
  setStatusAttributesInProductMetaTitle(page: Page, toEnable?: boolean): Promise<string>;
  sortTable(page: Page, sortBy: string, sortDirection: string): Promise<void>;
}
