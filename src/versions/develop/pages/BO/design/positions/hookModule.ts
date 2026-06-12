import type FakerModule from '@data/faker/module';
import type {BODesignPositionsHookModulePageInterface} from '@interfaces/BO/design/positions/hookModule';
import BOBasePage from '@pages/BO/BOBasePage';
import type {Page} from 'playwright';

/**
 * Hook a module page (Symfony "Hook a module" form), contains functions that can be used on the page
 * @class
 * @extends BOBasePage
 */
class HookModulePage extends BOBasePage implements BODesignPositionsHookModulePageInterface {
  public pageTitle: string;

  protected formHookModule: string;

  private readonly moduleSelect: string;

  private readonly moduleSelect2Selection: string;

  private readonly moduleSelect2Result: string;

  private readonly hookSelect: string;

  private readonly hookSelect2Selection: string;

  private readonly hookSelect2Result: string;

  private readonly select2SearchInput: string;

  private readonly exceptionsInput: string;

  private readonly saveButton: string;

  /**
   * @constructs
   * Setting up texts and selectors to use on the hook a module page
   */
  constructor() {
    super();

    this.pageTitle = `Hook a module • ${global.INSTALL.SHOP_NAME}`;

    // Selectors (Symfony migrated form: feature flag hook_module_v2)
    this.formHookModule = 'form[data-hook-url]';
    // Module selector (ChoiceType enhanced with select2)
    this.moduleSelect = '#hook_module_id_module';
    this.moduleSelect2Selection = 'span.select2-selection[aria-labelledby="select2-hook_module_id_module-container"]';
    this.moduleSelect2Result = '#select2-hook_module_id_module-results li[role="option"]:not([aria-disabled="true"])';
    // Hook selector (ChoiceType, dynamically populated via AJAX, enhanced with select2)
    this.hookSelect = '#hook_module_id_hook';
    this.hookSelect2Selection = 'span.select2-selection[aria-labelledby="select2-hook_module_id_hook-container"]';
    this.hookSelect2Result = '#select2-hook_module_id_hook-results li[role="option"]:not([aria-disabled="true"])';
    // Shared select2 search input (only one dropdown is open at a time)
    this.select2SearchInput = '.select2-container--open .select2-search__field';
    // Exceptions text field
    this.exceptionsInput = '#hook_module_exceptions';
    // Save button
    this.saveButton = `${this.formHookModule} #save-button`;
  }

  /* Methods */
  /**
   * Set the module using the select2 search helper
   * @param page {Page} Browser tab
   * @param module {FakerModule} Module
   * @return {Promise<void>}
   */
  async setModule(page: Page, module: FakerModule): Promise<void> {
    await this.waitForSelectorAndClick(page, this.moduleSelect2Selection);
    await this.setValue(page, this.select2SearchInput, module.name);
    await this.waitForSelectorAndClick(page, this.moduleSelect2Result);
    // The hook selector is populated asynchronously (AJAX) once a module is selected
    await page.waitForSelector(`${this.hookSelect}:not([disabled])`, {state: 'attached'});
  }

  /**
   * Set the hook using the select2 search helper
   * @param page {Page} Browser tab
   * @param hookName {string} Hook
   * @return {Promise<void>}
   */
  async setHook(page: Page, hookName: string): Promise<void> {
    await this.waitForSelectorAndClick(page, this.hookSelect2Selection);
    await this.setValue(page, this.select2SearchInput, hookName);
    // Options are rendered as "name (title)". Anchor on the start of the label so that, for example,
    // "GraphEngine" does not also match "displayAdminStatsGraphEngine" (substring collision).
    const escapedHookName: string = hookName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    await page
      .locator(this.hookSelect2Result)
      .filter({hasText: new RegExp(`^\\s*${escapedHookName}\\s*\\(`)})
      .click();
  }

  /**
   * Set the exceptions (comma-separated controller names where the module is not displayed)
   * @param page {Page} Browser tab
   * @param exceptions {string} Comma-separated controller names
   * @return {Promise<void>}
   */
  async setExceptions(page: Page, exceptions: string): Promise<void> {
    await this.setValue(page, this.exceptionsInput, exceptions);
  }

  /**
   * Save the form on the Hook a module page
   * @param page {Page} Browser tab
   * @return {Promise<string>}
   */
  async saveForm(page: Page): Promise<string> {
    await this.waitForSelectorAndClick(page, this.saveButton);

    return this.getAlertSuccessBlockParagraphContent(page);
  }
}

const hookModulePage = new HookModulePage();
export {hookModulePage, HookModulePage};
