import type FakerModule from '@data/faker/module';
import type {BODesignPositionsHookModulePageInterface} from '@interfaces/BO/design/positions/hookModule';
import BOBasePage from '@pages/BO/BOBasePage';
import type {Page} from 'playwright';

/**
 * Edit position page, contains functions that can be used on the page
 * @class
 * @extends BOBasePage
 */
class HookModulePage extends BOBasePage implements BODesignPositionsHookModulePageInterface {
  public readonly pageTitle: string;

  private readonly formHookModule: string;

  private readonly formHookModuleSelectModuleContainer: string;

  private readonly formHookModuleSelectModuleInput: string;

  private readonly formHookModuleSelectModuleResult: string;

  private readonly formHookModuleSelectHook: string;

  private readonly formHookModuleSaveButton: string;

  /**
   * @constructs
   * Setting up texts and selectors to use on positions page
   */
  constructor() {
    super();

    this.pageTitle = `Positions > Edit • ${global.INSTALL.SHOP_NAME}`;

    // Selectors
    this.formHookModule = '#hook_module_form';
    this.formHookModuleSelectModuleContainer = `${this.formHookModule} .chosen-container.chosen-container-single`;
    this.formHookModuleSelectModuleInput = `${this.formHookModuleSelectModuleContainer} .chosen-search input[type="text"]`;
    this.formHookModuleSelectModuleResult = `${this.formHookModuleSelectModuleContainer} .chosen-results`
      + ' .active-result:nth-child(1)';
    this.formHookModuleSelectHook = `${this.formHookModule} select[name="id_hook"]`;
    this.formHookModuleSaveButton = `${this.formHookModule} #hook_module_form_submit_btn`;
  }

  /* Methods */
  /**
   * Set the module
   * @param page {Page} Browser tab
   * @param module {FakerModule} Module
   * @return {Promise<void>}
   */
  async setModule(page: Page, module: FakerModule): Promise<void> {
    await page.locator(this.formHookModuleSelectModuleContainer).click();
    await page.locator(this.formHookModuleSelectModuleInput).fill(module.name);
    await page.locator(this.formHookModuleSelectModuleInput).dispatchEvent('keyup');
    await page.locator(this.formHookModuleSelectModuleResult).click();
    await page.waitForTimeout(3000);
  }

  /**
   * Set the hook
   * @param page {Page} Browser tab
   * @param hookName {string} Hook
   * @return {Promise<void>}
   */
  async setHook(page: Page, hookName: string): Promise<void> {
    await page.locator(this.formHookModuleSelectHook).selectOption({label: hookName}, {force: true});
  }

  /**
   * Save the form on the Hook Module page
   * @param page {Page} Browser tab
   * @return {Promise<string>}
   */
  async saveForm(page: Page): Promise<string> {
    await page.locator(this.formHookModuleSaveButton).click();

    return this.getAlertSuccessBlockParagraphContent(page);
  }
}

module.exports = new HookModulePage();
