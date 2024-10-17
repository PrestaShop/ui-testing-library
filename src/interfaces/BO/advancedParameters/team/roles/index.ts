import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BORolesPageInterface extends BOBasePagePageInterface {
  readonly pageTitle: string;

  confirmDeleteRoles(page: Page): Promise<void>;
  deleteBulkActions(page: Page): Promise<string>;
  deleteRole(page: Page, row: number): Promise<string>;
  filterRoles(page: Page, filterType: string, filterBy: string, value?: string): Promise<void>;
  getAllRowsColumnContent(page: Page, column: string): Promise<string[]>;
  getNumberOfElementInGrid(page: Page): Promise<number>;
  getTextColumnFromTable(page: Page, row: number, column: string): Promise<string>;
  goToAddNewRolePage(page: Page): Promise<void>;
  goToEditRolePage(page: Page, row: number): Promise<void>;
  paginationNext(page: Page): Promise<string>;
  paginationPrevious(page: Page): Promise<string>;
  resetAndGetNumberOfLines(page: Page): Promise<number>;
  selectPaginationLimit(page: Page, number: number): Promise<string>;
  sortTable(page: Page, sortBy: string, sortDirection?: string): Promise<void>;
}
