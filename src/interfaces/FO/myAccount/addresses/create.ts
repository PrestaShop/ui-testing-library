import type FakerAddress from '@data/faker/address';
import {FOBasePagePageInterface} from '@interfaces/FO';
import {type Page} from '@playwright/test';

export interface FoMyAddressesCreatePageInterface extends FOBasePagePageInterface {
  readonly creationFormTitle: string;
  readonly pageTitle: string;
  readonly updateFormTitle: string;

  countryExist(page: Page, countryName: string): Promise<boolean>;
  getHeaderTitle(page: Page): Promise<string>;
  isVatNumberRequired(page: Page): Promise<boolean>;
  setAddress(page: Page, addressData: FakerAddress): Promise<string>;
}
