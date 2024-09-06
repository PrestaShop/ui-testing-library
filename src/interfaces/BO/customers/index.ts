import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOCustomersPageInterface extends BOBasePagePageInterface {
  readonly pageTitle: string;
  readonly successfulUpdateStatusMessage: string;

  bulkSetStatus(page: Page, enable?: boolean): Promise<string>;
  deleteCustomer(page: Page, row: number, allowRegistrationAfterDelete?: boolean): Promise<string>;
  deleteCustomersBulkActions(page: Page, allowRegistrationAfterDelete?: boolean): Promise<string>;
  exportDataToCsv(page: Page): Promise<string | null>;
  filterCustomers(page: Page, filterType: string, filterBy: string, value?: string): Promise<void>;
  filterCustomersByRegistration(page: Page, dateFrom: string, dateTo: string): Promise<void>;
  filterCustomersSwitch(page: Page, filterBy: string, value: string): Promise<void>;
  getAllRowsColumnContent(page: Page, column: string): Promise<string[]>;
  getCustomerInCsvFormat(page: Page, row: number): Promise<string>;
  getCustomerStatus(page: Page, row: number): Promise<boolean>;
  getNewsletterStatus(page: Page, row: number): Promise<boolean>;
  getNumberOfElementInGrid(page: Page): Promise<number>;
  getPartnerOffersStatus(page: Page, row: number): Promise<boolean>;
  getTextColumnFromTableCustomers(page: Page, row: number, column: string): Promise<string>;
  getTextWhenTableIsEmpty(page: Page): Promise<string>;
  goToAddNewCustomerPage(page: Page): Promise<void>;
  goToEditCustomerPage(page: Page, row: number): Promise<void>;
  goToViewCustomerPage(page: Page, row: number): Promise<void>;
  paginationNext(page: Page): Promise<string>;
  paginationPrevious(page: Page): Promise<string>;
  resetAndGetNumberOfLines(page: Page): Promise<number>;
  resetFilter(page: Page): Promise<void>;
  selectPaginationLimit(page: Page, number: number): Promise<string>;
  setCustomerStatus(page: Page, row: number, valueWanted?: boolean): Promise<string | null | false>;
  setNewsletterStatus(page: Page, row: number, valueWanted?: boolean): Promise<string | null | false>;
  setPartnerOffersStatus(page: Page, row: number, valueWanted?: boolean): Promise<string | null | false>;
  setRequiredFields(page: Page, id: number, valueWanted?: boolean): Promise<string>;
  sortTable(page: Page, sortBy: string, sortDirection: string): Promise<void>;
}
