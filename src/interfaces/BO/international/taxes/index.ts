import type FakerTaxOption from '@data/faker/taxOption';
import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOTaxesPageInterface extends BOBasePagePageInterface {
  readonly pageTitle: string;
  readonly successfulUpdateStatusMessage: string;

  bulkSetStatus(page: Page, enable?: boolean): Promise<string>;
  deleteTax(page: Page, row: number): Promise<string>;
  deleteTaxesBulkActions(page: Page): Promise<string>;
  enableEcoTax(page: Page, enableEcoTax?: boolean): Promise<string>;
  filterTaxes(page: Page, filterType: string, filterBy: string, value?: string): Promise<void>;
  getAllRowsColumnContent(page: Page, column: string): Promise<string[]>;
  getNumberOfElementInGrid(page: Page): Promise<number>;
  getStatus(page: Page, row: number): Promise<boolean>;
  getTextColumnFromTableTaxes(page: Page, row: number, column: string): Promise<string>;
  goToAddNewTaxPage(page: Page): Promise<void>;
  goToEditTaxPage(page: Page, row: number): Promise<void>;
  goToTaxRulesPage(page: Page): Promise<void>;
  paginationNext(page: Page): Promise<string>;
  paginationPrevious(page: Page): Promise<string>;
  resetAndGetNumberOfLines(page: Page) : Promise<number>;
  selectPaginationLimit(page: Page, number: number): Promise<string>;
  setStatus(page: Page, row: number, valueWanted?: boolean): Promise<boolean>;
  sortTable(page: Page, sortBy: string, sortDirection?: string): Promise<void>;
  updateTaxOption(page: Page, taxOptionData: FakerTaxOption): Promise<string>;
}
