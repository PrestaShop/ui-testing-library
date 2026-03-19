import type FakerDiscount from '@data/faker/discount';
import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BODiscountsCreatePageInterface extends BOBasePagePageInterface {
  errorMessageDiscountValue: (discountValue: string) => string;
  errorMessageMinPurchaseAmount: string;
  errorMessageMinPurchaseAmountNotnumber: string;
  errorMessageNameRequired: string;
  readonly pageTitle: string;

  createDiscount(page: Page, discountData: FakerDiscount): Promise<string>;
  getErrorMessageInvalidInput(page: Page, input: string): Promise<string>;
}
