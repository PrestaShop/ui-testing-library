import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOContactsPageInterface extends BOBasePagePageInterface {
  readonly pageTitle: string;

  deleteContact(page: Page, row: number): Promise<string>;
  deleteContactsBulkActions(page: Page): Promise<string>;
  filterContacts(page: Page, filterBy: string, value?: string): Promise<void>;
  getAllRowsColumnContent(page: Page, column: string): Promise<string[]>;
  getNumberOfElementInGrid(page: Page): Promise<number>;
  getTextColumnFromTableContacts(page: Page, row: number, column: string): Promise<string>;
  goToAddNewContactPage(page: Page): Promise<void>;
  goToEditContactPage(page: Page, row: number): Promise<void>;
  goToStoresPage(page: Page): Promise<void>;
  resetAndGetNumberOfLines(page: Page): Promise<number>;
  resetFilter(page: Page): Promise<void>;
  sortTable(page: Page, sortBy: string, sortDirection?: string): Promise<void>;
}
