import type FakerAddress from '@data/faker/address';
import {BOViewOrderBasePageInterface} from '@interfaces/BO/orders/view/viewOrderBasePage';
import {type Frame, type Page} from '@playwright/test';

export interface BOProductBlockCustomersPageInterface extends BOViewOrderBasePageInterface {
  clickAddNewPrivateNote(page: Page): Promise<void>;
  editExistingInvoiceAddress(page: Page, addressData: FakerAddress): Promise<string>;
  editExistingShippingAddress(page: Page, addressData: FakerAddress): Promise<string>;
  getCustomerEmail(page: Page): Promise<string>;
  getCustomerID(page: Page): Promise<number>;
  getCustomerInfoBlock(page: Frame | Page): Promise<string>;
  getInvoiceAddress(page: Page): Promise<string>;
  getPrivateNoteContent(page: Page): Promise<string>;
  getShippingAddress(page: Page): Promise<string>;
  getValidatedOrdersNumber(page: Page): Promise<number>;
  goToViewFullDetails(page: Page): Promise<void>;
  isPrivateNoteTextareaVisible(page: Page): Promise<boolean>;
  selectAnotherInvoiceAddress(page: Page, address: string): Promise<string>;
  selectAnotherShippingAddress(page: Page, address: string): Promise<string>;
  setPrivateNote(page: Page, note: string): Promise<string>;
}
