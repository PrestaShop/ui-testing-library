import {Page} from '@playwright/test';
import {SelectionPageInterface} from '../../../../../../interfaces/BO/modules/modulesAndServices/selection';
import BOBasePage from '../../../../../../pages/BO/BOBasePage';

/**
 * Marketplace page, contains selectors and functions for the page
 * @class
 * @extends BOBasePage
 */
class SelectionPage extends BOBasePage implements SelectionPageInterface {
  public pageTitle: string;

  public readonly installMessageSuccessful: (moduleTag: string) => string;

  protected installedModulesLink: string;

  protected readonly searchModuleInput: string;

  private readonly searchButton: string;

  protected installModuleButton: string;

  /**
   * @constructs
   * Setting up titles and selectors to use on modules catalog page
   */
  constructor() {
    super();

    this.pageTitle = `Module selection • ${global.INSTALL.SHOP_NAME}`;
    this.installMessageSuccessful = (moduleTag: string) => `Install action on module ${moduleTag} succeeded.`;

    // Selectors
    this.installedModulesLink = '#head_tabs a[href*=\'module/manage\']';
    this.searchModuleInput = '.pstaggerAddTagInput';
    this.searchButton = '#module-search-button';
    this.installModuleButton = '.form-action-button[action*=\'install\']';
  }

  /*
  Methods
   */
  /**
   * Install the module and return success message
   * @param {Page} page
   * @param {string} moduleTag
   * @returns {Promise<string|null>}
   */
  async installModule(page: Page, moduleTag: string): Promise<string | null> {
    await page.locator(this.searchModuleInput).fill(moduleTag);
    await page.locator(this.searchButton).click();
    await page.locator(this.installModuleButton).click();

    return this.getGrowlMessageContent(page);
  }

  /**
   * Go to installed modules page
   * @param page {Page} page
   @returns {Promise<void>}
   */
  async goToInstalledModulesPage(page: Page): Promise<void> {
    await this.clickAndWaitForURL(page, this.installedModulesLink);
  }
}

const selectionPage = new SelectionPage();
export {selectionPage, SelectionPage};
