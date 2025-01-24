import type FakerCartRule from '@data/faker/cartRule';
import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Frame, type Page} from '@playwright/test';

export interface BOCartRulesCreatePageInterface extends BOBasePagePageInterface {
  readonly editPageTitle: string;
  readonly pageTitle: string;

  clickOnCancelButton(page: Page): Promise<void>;
  createEditCartRules(page: Frame | Page, cartRuleData: FakerCartRule, waitForNavigation?: boolean): Promise<string | null>;
  fillInformationForm(page: Frame | Page, cartRuleData: FakerCartRule): Promise<void>;
  getAmountValue(page: Page): Promise<string | null>;
  getGenerateButtonName(page: Page): Promise<string>;
  getLimitSingleCustomer(page: Page): Promise<string | null>;
  getTitleOfExcludeDiscountedProduct(page: Page): Promise<string>;
  saveCartRule(page: Frame | Page): Promise<string>;
}
