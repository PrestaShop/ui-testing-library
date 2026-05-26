import type FakerBrandAddress from '@data/faker/brandAddress';
import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOBrandAdressesCreatePageInterface extends BOBasePagePageInterface {
  readonly pageTitle: string;
  readonly pageTitleEdit: string;

  createEditBrandAddress(page: Page, brandAddressData: FakerBrandAddress): Promise<string>;
  getValue(page: Page, field: string): Promise<string>;
}
