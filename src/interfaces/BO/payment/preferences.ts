import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOPaymentPreferencesPageInterface extends BOBasePagePageInterface {
  readonly pageTitle: string;

  setCarrierRestriction(page: Page, carrierID: number, paymentModule: string, valueWanted: boolean): Promise<string>;
  setCountryRestriction(page: Page, countryID: number, paymentModule: string, valueWanted: boolean): Promise<string>;
  setCurrencyRestriction(page: Page, paymentModule: string, valueWanted: boolean): Promise<string>;
  setGroupRestrictions(page: Page, group: string, paymentModule: string, valueWanted: boolean): Promise<string>;
}
