import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOEmployeesPageInterface extends BOBasePagePageInterface {
  readonly pageTitle: string;
  readonly successfulUpdateStatusMessage: string;
  readonly errorDeleteOwnAccountMessage: string;

  bulkSetStatus(page: Page, enable?: boolean, getValidationMessage?: boolean): Promise<string>;
  confirmDeleteEmployees(page: Page): Promise<void>;
  deleteBulkActions(page: Page, getValidationMessage?: boolean): Promise<string>;
  deleteEmployee(page: Page, row: number): Promise<string>;
  deleteEmployeeAction(page: Page, row: number): Promise<void>;
  deleteEmployeeAndFail(page: Page, row: number): Promise<string>;
  filterEmployees(page: Page, filterType: string, filterBy: string, value?: string): Promise<void>;
  getAllRowsColumnContent(page: Page, column: string): Promise<string[]>;
  getNumberOfElementInGrid(page: Page): Promise<number>;
  getStatus(page: Page, row: number): Promise<boolean>;
  getTextColumnFromTable(page: Page, row: number, column: string): Promise<string>;
  goToAddNewEmployeePage(page: Page): Promise<void>;
  goToEditEmployeePage(page: Page, row: number): Promise<void>;
  goToPermissionsTab(page: Page): Promise<boolean>;
  goToRolesPage(page: Page): Promise<void>;
  paginationNext(page: Page): Promise<string>;
  paginationPrevious(page: Page): Promise<string>;
  resetAndGetNumberOfLines(page: Page): Promise<number>;
  selectPaginationLimit(page: Page, number: number): Promise<string>;
  setStatus(page: Page, row: number, valueWanted?: boolean): Promise<boolean>;
  sortTable(page: Page, sortBy: string, sortDirection?: string): Promise<void>;
}
