import type FakerSearchAlias from '@data/faker/searchAlias';
import {BOAliasCreatePageInterface} from '@interfaces/BO/shopParameters/search/alias/create';
import {
  BOSearchAliasCreatePage as BOSearchAliasCreatePageVersion,
} from '@versions/develop/pages/BO/shopParameters/search/alias/create';
import type {Page} from 'playwright';

/**
 * Search page, contains selectors and functions for the page
 * @class
 */
class BOSearchAliasCreatePage extends BOSearchAliasCreatePageVersion implements BOAliasCreatePageInterface {
  /**
   * @constructs
   * Setting up titles and selectors to use on search page
   */
  constructor() {
    super();

    this.pageTitleCreate = 'Search > Add new •';
    this.pageTitleEdit = 'Search > Edit:';

    // selectors
    this.aliasInput = '#alias';
    this.resultInput = '#search';
    this.saveButton = '#alias_form_submit_btn';
  }

  /* Methods */
  /**
   * Create/Edit alias
   * @param page {Page} Browser tab
   * @param aliasData {FakerSearchAlias} Data to set on alias form
   * @returns {Promise<string>}
   */
  async setAlias(page: Page, aliasData: FakerSearchAlias): Promise<string> {
    await this.setValue(page, this.aliasInput, aliasData.search);
    await this.setValue(page, this.resultInput, aliasData.alias);
    await page.locator(this.saveButton).click();
    return this.getAlertSuccessBlockContent(page);
  }
}

module.exports = new BOSearchAliasCreatePage();
