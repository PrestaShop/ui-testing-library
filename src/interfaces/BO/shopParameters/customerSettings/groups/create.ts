import type FakerGroup from '@data/faker/group';
import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOCustomerGroupsCreatePageInterface extends BOBasePagePageInterface {
  readonly pageTitleCreate: string;
  readonly pageTitleEdit: string;

  createEditGroup(page: Page, groupData: FakerGroup): Promise<string>;
  getValue(page: Page, inputName: string, languageId?: number): Promise<string>;
  setDiscount(page: Page, discount: number): Promise<string>;
  setPriceDisplayMethod(page: Page, priceDisplayMethod: string): Promise<string>;
}
