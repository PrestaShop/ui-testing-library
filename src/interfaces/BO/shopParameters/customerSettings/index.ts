import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOCustomerSettingsPageInterface extends BOBasePagePageInterface {
  readonly OPTION_BIRTH_DATE: string;
  readonly OPTION_B2B: string;
  readonly OPTION_CART_LOGIN: string;
  readonly OPTION_EMAIL_REGISTRATION: string;
  readonly OPTION_PARTNER_OFFER: string;

  readonly pageTitle: string;

  getPasswordResetDelayValue(page: Page): Promise<number>;
  goToGroupsPage(page: Page): Promise<void>;
  goToTitlesPage(page: Page): Promise<void>;
  setOptionStatus(page: Page, option: string, toEnable?: boolean): Promise<string>;
}
