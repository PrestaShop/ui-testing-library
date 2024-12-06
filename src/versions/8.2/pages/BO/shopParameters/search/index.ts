import {type BOSearchPageInterface} from '@interfaces/BO/shopParameters/search';
import {BOSearchPage as BOSearchPageVersion} from '@versions/develop/pages/BO/shopParameters/search';
import type {Page} from 'playwright';

/**
 * Search page, contains selectors and functions for the page
 * @class
 * @extends BOBasePage
 */
class BOSearchPage extends BOSearchPageVersion implements BOSearchPageInterface {
  /**
   * Go to aliases page
   * @param page {Page} Browser tab
   * @returns {Promise<void>}
   */
  async goToAliasesPage(page: Page): Promise<void> {
    // No aliases tab before v9
  }
}

module.exports = new BOSearchPage();
