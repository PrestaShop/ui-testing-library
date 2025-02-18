import type FakerCustomer from '@data/faker/customer';
import {FOBasePagePageInterface} from '@interfaces/FO';
import {type Page} from '@playwright/test';

export interface FoCreateAccountPageInterface extends FOBasePagePageInterface {
  readonly formTitle: string;

  createAccount(page: Page, customer: FakerCustomer): Promise<void>;
  getGDPRLabel(page: Page): Promise<string>;
  getHeaderTitle(page: Page): Promise<string>;
  hasGDPRLabel(page: Page): Promise<boolean>;
  isBirthDateVisible(page: Page): Promise<boolean>;
  isCompanyInputVisible(page: Page): Promise<boolean>;
  isPartnerOfferRequired(page: Page): Promise<boolean>;
  isPartnerOfferVisible(page: Page): Promise<boolean>;
}
