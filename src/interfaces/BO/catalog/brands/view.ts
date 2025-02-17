import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOBrandsViewPageInterface extends BOBasePagePageInterface {
  getNumberOfAddressesInGrid(page: Page): Promise<number>;
  getTextColumnFromTableAddresses(page: Page, row: number, column: number): Promise<string>;
}
