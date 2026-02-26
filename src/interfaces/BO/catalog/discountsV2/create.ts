import type FakerDiscount from '@data/faker/discount';
import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Frame, type Page} from '@playwright/test';

export interface BODiscountsCreatePageInterface extends BOBasePagePageInterface {
  createDiscount(page: Page, discountData: FakerDiscount): Promise<string>;
}
