import {type BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOEmailPageInterface extends BOBasePagePageInterface {
  readonly pageTitle: string;
  readonly sendTestEmailSuccessfulMessage: string;

  deleteEmailLog(page: Page, row: number): Promise<string>;
  deleteEmailLogsBulkActions(page: Page): Promise<string>;
  eraseAllEmails(page: Page): Promise<string>;
  filterEmailLogs(page: Page, filterType: string, filterBy: string, value?: string): Promise<void>;
  filterEmailLogsByDate(page: Page, dateFrom: string, dateTo: string): Promise<void>;
  getAllRowsColumnContent(page: Page, column: string): Promise<string[]>;
  getNumberOfElementInGrid(page: Page): Promise<number>;
  getTextColumn(page: Page, columnName: string, row: number): Promise<string>;
  isLogEmailsTableVisible(page: Page): Promise<boolean>;
  paginationNext(page: Page): Promise<string>;
  paginationPrevious(page: Page): Promise<string>;
  resetAndGetNumberOfLines(page: Page): Promise<number>;
  resetDefaultParameters(page: Page): Promise<string>;
  selectPaginationLimit(page: Page, number: number): Promise<string>;
  sendTestEmail(page: Page, email: string): Promise<string>;
  setLogEmails(page: Page, toEnable: boolean): Promise<string>;
  setupSmtpParameters(
    page: Page,
    server: string,
    username: string,
    pass: string,
    port: string,
    encryption?: string,
  ): Promise<string>;
  sortTable(page: Page, sortBy: string, sortDirection: string): Promise<void>;
}
