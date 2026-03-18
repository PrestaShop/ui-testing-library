import type FakerCustomer from '@data/faker/customer';
import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Frame, type Page} from '@playwright/test';

export interface BOCustomersCreatePageInterface extends BOBasePagePageInterface {
  readonly pageTitleCreate: string;
  readonly pageTitleEdit: string;
  readonly requiredFieldErrorMessage: string;

  createEditB2BCustomer(page: Page, customerData: FakerCustomer): Promise<string>;
  createEditCustomer(page: Frame | Page, customerData: FakerCustomer, waitForNavigation?: boolean): Promise<string>
  getRequiredInputErrorMessage(page: Frame | Page, input:string): Promise<string>;
  enableGuestAccount(page: Frame | Page, guestAccount: boolean): Promise<void>;
  isDefaultCustomerGroupDisabled(page: Frame | Page): Promise<boolean>;
  isDefaultCustomerGroupEnabled(page: Frame | Page): Promise<boolean>;
  isCustomerDisabled(page: Frame | Page): Promise<boolean>;
  isCustomerEnabled(page: Frame | Page): Promise<boolean>;
  isGroupAccessDisabled(page: Frame | Page): Promise<boolean>;
  isGroupAccessEnabled(page: Frame | Page): Promise<boolean>;
  isPasswordDisabled(page: Frame | Page): Promise<boolean>;
  isPasswordEnabled(page: Frame | Page): Promise<boolean>;
}
