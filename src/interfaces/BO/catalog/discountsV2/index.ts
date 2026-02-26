import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BODiscountsPageInterface extends BOBasePagePageInterface {
  readonly pageTitle: string;

  clickOnCreateDiscountButton(page: Page): Promise<void>;
}
