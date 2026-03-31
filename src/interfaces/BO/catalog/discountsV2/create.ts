import type FakerDiscount from '@data/faker/discount';
import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BODiscountsCreatePageInterface extends BOBasePagePageInterface {
  readonly errorMessage: string;
  readonly errorMessageDiscountValue: (discountValue: string) => string;
  readonly errorMessageExpirationDateBeforeStart: string;
  readonly errorMessageFreeGiftRequired: string;
  readonly errorMessageMinPurchaseAmount: string;
  readonly errorMessageMinPurchaseAmountNotnumber: string;
  readonly errorMessageNameRequired: string;
  readonly pageTitle: string;
  readonly pageTitleEdit: string;

  createDiscount(page: Page, discountData: FakerDiscount): Promise<string>;
  deleteFreeGift(page: Page, row?: number): Promise<boolean>;
  getDiscountDate(page: Page, period: string): Promise<string>;
  getErrorMessageInvalidInput(page: Page, input: string): Promise<string>;
}
