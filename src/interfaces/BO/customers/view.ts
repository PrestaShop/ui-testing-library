import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Frame, type Page} from '@playwright/test';

export interface BOCustomersViewPageInterface extends BOBasePagePageInterface {
  readonly pageTitle: (customerName: string) => string;
  readonly updateSuccessfulMessage: string;

  clickOnTransformToCustomerAccount(page: Page): Promise<string>;
  deleteVoucher(page: Page, row: number): Promise<string>;
  getNumberOfElementFromTitle(page: Frame | Page, cardTitle: string): Promise<string>;
  getPersonalInformationTitle(page: Page | Frame): Promise<string>;
  getTextColumnFromTableCarts(page: Page, column: string, row?: number): Promise<string>;
  getTextColumnFromTableLastConnections(page: Page, column: string, row?: number): Promise<string>;
  getTextFromElement(page: Page, element: string): Promise<string>;
  goToEditCustomerPage(page: Page): Promise<void>;
  goToPage(page: Page, cardTitle: string, row?: number): Promise<void>;
  isPrivateNoteBlockVisible(page: Frame | Page): Promise<boolean>;
  isTransformToCustomerAccountButtonVisible(page: Page): Promise<boolean>;
  setPrivateNote(page: Page, note: string): Promise<string>;
}
