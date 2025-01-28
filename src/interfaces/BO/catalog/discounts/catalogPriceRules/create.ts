import type FakerCatalogPriceRule from '@data/faker/catalogPriceRule';
import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOCatalogPriceRulesCreatePageInterface extends BOBasePagePageInterface {
  readonly editPageTitle: string;
  readonly pageTitle: string;

  setCatalogPriceRule(page: Page, priceRuleData: FakerCatalogPriceRule): Promise<string>;
}
