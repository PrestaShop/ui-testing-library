import {FOBasePagePageInterface} from '@interfaces/FO';
import {type Page} from '@playwright/test';

export interface FoMyAddressesPageInterface extends FOBasePagePageInterface {
  readonly addAddressSuccessfulMessage: string;
  readonly addressPageTitle: string;
  readonly deleteAddressErrorMessage: string;
  readonly deleteAddressSuccessfulMessage: string;
  readonly pageTitle: string;
  readonly updateAddressSuccessfulMessage: string;

  deleteAddress(page: Page, position?: string | number): Promise<string>;
  getAddressPosition(page: Page, alias: string): Promise<number>;
  goToEditAddressPage(page: Page, position?: string | number): Promise<void>;
  openNewAddressForm(page: Page): Promise<void>;
}
