import type FakerCustomer from '@data/faker/customer';
import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Frame, type Page} from '@playwright/test';

export interface BOCustomersCreatePageInterface extends BOBasePagePageInterface {
  readonly pageTitleCreate: string;
  readonly pageTitleEdit: string;

  createEditB2BCustomer(page: Page, customerData: FakerCustomer): Promise<string>;
  createEditCustomer(page: Frame|Page, customerData: FakerCustomer, waitForNavigation?: boolean): Promise<string>
}
