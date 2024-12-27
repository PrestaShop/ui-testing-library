// Import pages
import type {SelectionPageInterface} from '@interfaces/BO/modules/modulesAndServices/selection';
import {SelectionPage} from '@versions/1.7.1/pages/BO/modules/modulesAndServices/selection';
import {Page} from '@playwright/test';

/**
 * Bo selection page, contains functions that can be used on the page
 * @class
 * @extends ProductsPage
 */
class SelectionVersion extends SelectionPage implements SelectionPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use on selection page
   */
  constructor() {
    super();

    // Selectors
    this.alertSuccessBlock = '#main-div div.flash-message-list.alert.alert-success';
  }

  /**
   * Install the module and return success message
   * @param {Page} page
   * @param {string} moduleTag
   * @returns {Promise<string|null>}
   */
  async installModule(page: Page, moduleTag: string): Promise<string | null> {
    await page.locator(this.searchModuleInput).fill(moduleTag);
    await page.keyboard.press('Enter');
    await page.locator(this.installModuleButton).click();

    return this.getAlertSuccessBlockContent(page);
  }
}

const selectionPage = new SelectionVersion();
export {selectionPage, SelectionVersion as SelectionPage};
