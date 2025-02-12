import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOCartRulesPageInterface extends BOBasePagePageInterface {
  readonly pageTitle: string;

  bulkDeleteCartRules(page: Page): Promise<string>;
  bulkSelectRows(page: Page, status?: boolean): Promise<void>;
  bulkSetStatus(page: Page, wantedStatus: boolean): Promise<void>;
  deleteCartRule(page: Page, row?: number, cartRuleName?: string): Promise<string>;
  filterCartRules(page: Page, filterType: string, filterBy: string, value: string): Promise<void>;
  getAllRowsColumnContent(page: Page, columnName: string): Promise<string[]>;
  getCartRuleStatus(page: Page, row: number): Promise<boolean>;
  getNumberOfElementInGrid(page: Page): Promise<number>;
  getSelectedRowsCount(page: Page): Promise<number>;
  getTextColumn(page: Page, row: number, columnName: string): Promise<string>;
  goToAddNewCartRulesPage(page: Page): Promise<void>;
  goToCatalogPriceRulesTab(page: Page): Promise<void>;
  goToEditCartRulePage(page: Page, row: number): Promise<void>;
  paginationNext(page: Page): Promise<string>;
  paginationPrevious(page: Page): Promise<string>;
  resetAndGetNumberOfLines(page: Page): Promise<number>;
  selectPaginationLimit(page: Page, number: number): Promise<string>;
  setCartRuleStatus(page: Page, row: number, wantedStatus: boolean): Promise<void>;
  sortTable(page: Page, sortBy: string, sortDirection: string): Promise<void>;
}
