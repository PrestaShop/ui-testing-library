import type FakerTaxRule from '@data/faker/taxRule';
import type FakerTaxRulesGroup from '@data/faker/taxRulesGroup';
import {BOTaxRulesCreatePageInterface} from '@interfaces/BO/international/taxes/taxRules/create';
import BOBasePage from '@pages/BO/BOBasePage';
import {type Page} from '@playwright/test';

/**
 * Add tax rules page, contains functions that can be used on the page
 * @class
 * @extends BOBasePage
 */
class BOTaxRulesCreatePage extends BOBasePage implements BOTaxRulesCreatePageInterface {
  public pageTitleCreate: string;

  public pageTitleEdit: string;

  protected addNewTaxRuleButton: string;

  protected taxRuleGroupForm: string;

  protected nameInput: string;

  protected statusInput: (id: string) => string;

  protected saveTaxButton: string;

  protected taxRuleForm: string;

  protected countrySelect: string;

  protected behaviourSelect: string;

  protected taxSelect: string;

  protected descriptionInput: string;

  protected saveAndStayButton: string;

  /**
   * @constructs
   * Setting up texts and selectors to use on add tax rules page
   */
  constructor() {
    super();

    this.successfulUpdateMessage = 'Update successful';

    this.pageTitleCreate = `New tax rule • ${global.INSTALL.SHOP_NAME}`;
    this.pageTitleEdit = 'Editing tax rule ';

    // Selectors
    // Header buttons
    this.addNewTaxRuleButton = '#tax_rules_group_tax_rules_add_tax_rule_btn';

    // New tax rule group form
    this.taxRuleGroupForm = 'form[name="tax_rules_group"]';
    this.nameInput = `${this.taxRuleGroupForm} #tax_rules_group_name`;
    this.statusInput = (id: string) => `${this.taxRuleGroupForm} input#tax_rules_group_is_enabled_${id}`;
    this.saveTaxButton = `${this.taxRuleGroupForm} #save-and-stay-button`;

    // New tax rule form
    this.taxRuleForm = 'iframe[name="tax-rule-form-modal-iframe"]';
    this.countrySelect = '#tax_rule_country';
    this.behaviourSelect = '#tax_rule_behavior';
    this.taxSelect = '#tax_rule_tax';
    this.descriptionInput = '#tax_rule_description';
    this.saveAndStayButton = '#tax-rule-form-modal .btn-confirm-submit';
  }

  /*
  Methods
   */

  /**
   * Fill form for add/edit tax rules group
   * @param page {Page} Browser tab
   * @param taxRuleGroupData {FakerTaxRulesGroup} Data to set on tax rule group data
   * @returns {Promise<string>}
   */
  async createEditTaxRulesGroup(page: Page, taxRuleGroupData: FakerTaxRulesGroup): Promise<string> {
    await this.setValue(page, this.nameInput, taxRuleGroupData.name);
    if ((await this.isChecked(page, this.statusInput(taxRuleGroupData.enabled ? '1' : '0'))) !== true) {
      await this.setChecked(page, this.statusInput(taxRuleGroupData.enabled ? '1' : '0'), true, true);
    }
    // Save Tax rules group
    await this.clickAndWaitForURL(page, this.saveTaxButton);

    return this.getAlertSuccessBlockParagraphContent(page);
  }

  /**
   * Fill form for add/edit tax rules group
   * @param page {Page} Browser tab
   * @param taxRuleData {FakerTaxRule} Data to set on new/edit tax rule data
   * @returns {Promise<string>}
   */
  async createEditTaxRules(page: Page, taxRuleData: FakerTaxRule): Promise<string> {
    await page.locator(this.addNewTaxRuleButton).click();
    await page.locator(this.taxRuleForm).waitFor({state: 'visible'});

    const iframeLocator = await page.frameLocator(this.taxRuleForm);
    await iframeLocator.locator(this.countrySelect).selectOption({label: taxRuleData.country});
    await iframeLocator.locator(this.behaviourSelect).selectOption({label: taxRuleData.behaviour});
    await iframeLocator.locator(this.taxSelect).selectOption({label: taxRuleData.name});
    await iframeLocator.locator(this.descriptionInput).fill(taxRuleData.description);
    await page.locator(this.saveAndStayButton).click();

    return this.getAlertSuccessBlockParagraphContent(page);
  }

  /**
   * Click on add new tax rule
   * @param page {Page} Browser tab
   * @return {Promise<void>}
   */
  async clickOnAddNewTaxRule(page: Page): Promise<void> {
    await page.locator(this.addNewTaxRuleButton).click();
  }
}

const boTaxRulesCreatePage = new BOTaxRulesCreatePage();
export {boTaxRulesCreatePage, BOTaxRulesCreatePage};
