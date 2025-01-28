import {type BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOMultistorePageInterface extends BOBasePagePageInterface {
  readonly pageTitle: string;

  deleteShopGroup(page: Page, row: number): Promise<string>;
  filterTable(page: Page, filterBy: string, value: string): Promise<void>;
  getAllRowsColumnContent(page: Page, columnName: string): Promise<string[]>;
  getNumberOfElementInGrid(page: Page): Promise<number>;
  getTextColumn(page: Page, row: number, column: string): Promise<string>;
  gotoEditShopGroupPage(page: Page, row: number): Promise<void>;
  goToNewShopGroupPage(page: Page): Promise<void>;
  goToNewShopPage(page: Page): Promise<void>;
  goToShopGroupPage(page: Page, id: number): Promise<void>;
  goToShopPage(page: Page, id: number): Promise<void>;
  goToShopURLPage(page: Page, id?: number): Promise<void>;
  isActionToggleButtonVisible(page: Page, row: number): Promise<boolean>;
  paginationNext(page: Page): Promise<string>;
  paginationPrevious(page: Page): Promise<string>;
  resetAndGetNumberOfLines(page: Page): Promise<number>;
  selectDefaultStore(page: Page, defaultStore: string): Promise<string>;
  selectPaginationLimit(page: Page, number: number): Promise<string>;
  sortTable(page: Page, sortBy: string, sortDirection: string): Promise<void>;
}
