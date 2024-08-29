import type FakerCarrier from '@data/faker/carrier';
import {type BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOCarriersCreatePageInterface extends BOBasePagePageInterface {
  readonly pageTitleCreate: string;
  readonly pageTitleEdit: string;

  createEditCarrier(page: Page, carrierData: FakerCarrier): Promise<string>;
}
