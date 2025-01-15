import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOCreditSlipsPageInterface extends BOBasePagePageInterface {
  readonly errorMessageWhenGenerateFileByDate: string;
  readonly pageTitle: string;

  changePrefix(page: Page, prefixEN: string, prefixFR?: string): Promise<void>;
  deletePrefix(page: Page): Promise<void>;
  downloadCreditSlip(page: Page, row?: number): Promise<string|null>;
  filterCreditSlips(page: Page, filterBy: string, value?: string): Promise<void>;
  filterCreditSlipsByDate(page: Page, dateFrom: string, dateTo: string): Promise<void>;
  generatePDFByDateAndDownload(page: Page, dateFrom?: string, dateTo?: string): Promise<string|null>;
  generatePDFByDateAndFail(page: Page, dateFrom?: string, dateTo?: string): Promise<string>;
  getAllRowsColumnContent(page: Page, column: string): Promise<string[]>;
  getNumberOfElementInGrid(page: Page): Promise<number>;
  getTextColumnFromTableCreditSlips(page: Page, row: number, column: string): Promise<string>;
  paginationNext(page: Page): Promise<string>;
  paginationPrevious(page: Page): Promise<string>;
  resetAndGetNumberOfLines(page: Page): Promise<number>;
  saveCreditSlipOptions(page: Page): Promise<string>;
  selectPaginationLimit(page: Page, number: number): Promise<string>;
  sortTable(page: Page, sortBy: string, sortDirection: string): Promise<void>;
}
