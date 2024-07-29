import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOCustomerGroupsPageInterface extends BOBasePagePageInterface {
  readonly pageTitle: string;

  bulkDeleteGroups(page: Page): Promise<string>;
  deleteGroup(page: Page, row: number): Promise<string>;
  filterTable(page: Page, filterType: string, filterBy: string, value: string | number): Promise<void>;
  getAllRowsColumnContent(page: Page, columnName: string): Promise<string[]>;
  getGroupDropDownList(page: Page, group: string): Promise<string>;
  getGroupSelectedValue(page: Page, group: string): Promise<string>;
  getNumberOfElementInGrid(page: Page): Promise<number>;
  getTextColumn(page: Page, row: number, columnName: string): Promise<string>;
  gotoEditGroupPage(page: Page, row: number): Promise<void>;
  goToNewGroupPage(page: Page): Promise<void>;
  paginationNext(page: Page): Promise<string>;
  paginationPrevious(page: Page): Promise<string>;
  resetAndGetNumberOfLines(page: Page): Promise<number>;
  resetFilter(page: Page): Promise<void>;
  selectPaginationLimit(page: Page, number: number): Promise<string>;
  sortTable(page: Page, sortBy: string, sortDirection: string): Promise<void>;
}
