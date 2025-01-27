import type FakerTaxRule from '@data/faker/taxRule';
import type FakerTaxRulesGroup from '@data/faker/taxRulesGroup';
import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOTaxRulesCreatePageInterface extends BOBasePagePageInterface {
  readonly pageTitleCreate: string;
  readonly pageTitleEdit: string;

  clickOnAddNewTaxRule(page: Page): Promise<void>;
  createEditTaxRules(page: Page, taxRuleData: FakerTaxRule): Promise<string>;
  createEditTaxRulesGroup(page: Page, taxRuleGroupData: FakerTaxRulesGroup): Promise<string>;
}
