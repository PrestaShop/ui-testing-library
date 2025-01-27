import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOTaxRulesPageInterface extends BOBasePagePageInterface {
  readonly pageTitle: string;
  readonly successfulUpdateStatusMessage: string;

  bulkDeleteTaxRules(page: Page): Promise<string>;
  bulkSetStatus(page: Page, enable?: boolean): Promise<string>;
  deleteTaxRule(page: Page, row?: number): Promise<string>;
  filterTable(page: Page, filterType: string, filterBy: string, value: string): Promise<void>;
  getAllRowsColumnContent(page: Page, columnName: string): Promise<string[]>;
  getNumberOfElementInGrid(page: Page): Promise<number>;
  getStatus(page: Page, row: number): Promise<boolean>;
  getTextColumnFromTable(page: Page, row: number, columnName: string): Promise<string>;
  goToAddNewTaxRulesGroupPage(page: Page): Promise<void>;
  goToEditTaxRulePage(page: Page, row?: number): Promise<void>;
  paginationNext(page: Page): Promise<string>;
  paginationPrevious(page: Page): Promise<string>;
  resetAndGetNumberOfLines(page: Page): Promise<number>;
  selectPaginationLimit(page: Page, number: number): Promise<string>;
  setStatus(page: Page, row: number, valueWanted?: boolean): Promise<boolean>;
  sortTable(page: Page, sortBy: string, sortDirection: string): Promise<void>;
}
