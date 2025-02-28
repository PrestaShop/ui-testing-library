import type FakerCarrier from '@data/faker/carrier';
import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOShippingPreferencesPageInterface extends BOBasePagePageInterface {
  readonly pageTitle: string;

  setCarrierSortOrderBy(page: Page, sortBy: string, orderBy?: string): Promise<string>;
  setDefaultCarrier(page: Page, carrier: FakerCarrier): Promise<string>;
  setHandlingCharges(page: Page, value: string): Promise<string>;
}
