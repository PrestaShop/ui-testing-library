import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BODiscountsPageInterface extends BOBasePagePageInterface {
  readonly pageTitle: string;

  clickOnCreateDiscountButton(page: Page): Promise<void>;
  selectDiscountType(page: Page, type: string): Promise<void>;
  filterDiscount(page: Page, filterType: string, filterBy: string, value: string): Promise<void>;
  deleteDiscount(page: Page, row?: number): Promise<string>;
}
