import type FakerTaxRule from '@data/faker/taxRule';
import type FakerTaxRulesGroup from '@data/faker/taxRulesGroup';
import {type BOTaxRulesCreatePageInterface} from '@interfaces/BO/international/taxes/taxRules/create';
import {type Page} from '@playwright/test';
import {
  BOTaxRulesCreatePage as BOTaxRulesCreatePageVersion,
} from '@versions/develop/pages/BO/international/taxes/taxRules/create';

class BOTaxRulesCreatePage extends BOTaxRulesCreatePageVersion implements BOTaxRulesCreatePageInterface {
  constructor() {
    super();

    this.successfulUpdateMessage = 'Successful update';

    this.pageTitleCreate = 'Tax Rules > Add new';
    this.pageTitleEdit = 'Tax Rules > Edit';

    // Selectors
    // Header buttons
    this.addNewTaxRuleButton = 'a[data-role=page-header-desc-tax_rule-link]';

    // New tax rule group form
    this.taxRuleGroupForm = '#tax_rules_group_form';
    this.nameInput = `${this.taxRuleGroupForm} #name`;
    this.statusInput = (id: string) => `${this.taxRuleGroupForm} input#active_${id}`;
    this.saveTaxButton = `${this.taxRuleGroupForm} #tax_rules_group_form_submit_btn`;

    // New tax rule form
    this.taxRuleForm = '#tax_rule_form';
    this.countrySelect = `${this.taxRuleForm} #country`;
    this.behaviourSelect = `${this.taxRuleForm} #behavior`;
    this.taxSelect = `${this.taxRuleForm} #id_tax`;
    this.descriptionInput = `${this.taxRuleForm} #description`;
    this.saveAndStayButton = `${this.taxRuleForm} #tax_rule_form_submit_btn_1`;
  }

  /**
     * Fill form for add/edit tax rules group
     * @param page {Page} Browser tab
     * @param taxRuleGroupData {FakerTaxRulesGroup} Data to set on tax rule group data
     * @returns {Promise<string>}
     */
  async createEditTaxRulesGroup(page: Page, taxRuleGroupData: FakerTaxRulesGroup): Promise<string> {
    await this.setValue(page, this.nameInput, taxRuleGroupData.name);
    await this.setChecked(page, this.statusInput(taxRuleGroupData.enabled ? 'on' : 'off'));
    // Save Tax rules group
    await this.clickAndWaitForURL(page, this.saveTaxButton);

    return this.getAlertSuccessBlockContent(page);
  }

  /**
     * Fill form for add/edit tax rules group
     * @param page {Page} Browser tab
     * @param taxRuleData {FakerTaxRule} Data to set on new/edit tax rule data
     * @returns {Promise<string>}
     */
  async createEditTaxRules(page: Page, taxRuleData: FakerTaxRule): Promise<string> {
    await this.selectByVisibleText(page, this.countrySelect, taxRuleData.country);
    await this.selectByVisibleText(page, this.behaviourSelect, taxRuleData.behaviour);
    await this.selectByVisibleText(page, this.taxSelect, taxRuleData.name);
    await this.setValue(page, this.descriptionInput, taxRuleData.description);
    // Save Tax rules
    await page.locator(this.saveAndStayButton).click();

    return this.getAlertSuccessBlockContent(page);
  }
}

const boTaxRulesCreatePage = new BOTaxRulesCreatePage();
export {boTaxRulesCreatePage, BOTaxRulesCreatePage};
