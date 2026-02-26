import type FakerDiscount from '@data/faker/discount';
import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BODiscountsCreatePageInterface extends BOBasePagePageInterface {
  readonly pageTitle: string;
  readonly errorMessageNameRequired: string;
  readonly errorMessageMinPurchaseAmount: string;
  readonly errorMessageMinPurchaseAmountNotnumber: string;
  readonly errorMessageDiscountValue: (discountValue: string) => string;

  createDiscount(page: Page, discountData: FakerDiscount): Promise<string>;
}
