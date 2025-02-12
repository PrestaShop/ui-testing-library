import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOCatalogPriceRulesPageInterface extends BOBasePagePageInterface {
  readonly pageTitle: string;

  bulkDeletePriceRules(page: Page): Promise<string>;
  bulkSelectRows(page: Page, status?: boolean): Promise<void>;
  deleteCatalogPriceRule(page: Page, ruleName: string): Promise<string>;
  filterByDate(page: Page, filterBy: string, dateFrom: string, dateTo: string): Promise<void>;
  filterPriceRules(page: Page, filterType: string, filterBy: string, value: string): Promise<void>;
  getAllRowsColumnContent(page: Page, columnName: string): Promise<string[]>;
  getNumberOfElementInGrid(page: Page): Promise<number>;
  getSelectedRowsCount(page: Page): Promise<number>;
  getTextColumn(page: Page, row: number, columnName: string): Promise<string>;
  goToAddNewCatalogPriceRulePage(page: Page): Promise<void>;
  goToEditCatalogPriceRulePage(page: Page, ruleName: string): Promise<void>;
  paginationNext(page: Page): Promise<string>;
  paginationPrevious(page: Page): Promise<string>;
  resetAndGetNumberOfLines(page: Page): Promise<number>;
  selectPaginationLimit(page: Page, number: number): Promise<string>;
  sortTable(page: Page, sortBy: string, sortDirection: string): Promise<void>;
}
