import type FakerAddress from '@data/faker/address';
import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Frame, type Page} from '@playwright/test';

export interface BOAddressesCreatePageInterface extends BOBasePagePageInterface {
  readonly pageTitleCreate: string;
  readonly pageTitleEdit: string;

  createEditAddress(
    page: Frame|Page,
    addressData: FakerAddress,
    save?: boolean,
    waitForNavigation?: boolean,
  ): Promise<string|null>;
  getSelectedCountry(page: Page): Promise<string>;
}
