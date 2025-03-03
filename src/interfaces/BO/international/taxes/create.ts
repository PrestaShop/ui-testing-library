import type FakerTax from '@data/faker/tax';
import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOTaxesCreatePageInterface extends BOBasePagePageInterface {
  readonly pageTitleCreate: string;
  readonly pageTitleEdit: string;

  createEditTax(page: Page, taxData: FakerTax): Promise<string>;
}
