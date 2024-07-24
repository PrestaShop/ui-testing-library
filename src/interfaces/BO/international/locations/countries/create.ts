import type FakerCountry from '@data/faker/country';
import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOCountriesCreatePageInterface extends BOBasePagePageInterface {
  readonly errorMessageIsoCode: string;
  readonly errorMessagePrefix: string;
  readonly pageTitleCreate: string;
  readonly pageTitleEdit: string;

  createEditCountry(page: Page, countryData: FakerCountry): Promise<string>;
  getSelectValue(page: Page, input: string): Promise<string>;
  isCheckboxChecked(page: Page, input: string): Promise<boolean>;
}
