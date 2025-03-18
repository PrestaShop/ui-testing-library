import type FakerSearchAlias from '@data/faker/searchAlias';
import {type BOAliasCreatePageInterface} from '@interfaces/BO/shopParameters/search/alias/create';
import BOBasePage from '@pages/BO/BOBasePage';
import {type Page} from '@playwright/test';

/**
 * Add alias page, contains selectors and functions for the page
 * @class
 * @extends BOBasePage
 */
class BOSearchAliasCreatePage extends BOBasePage implements BOAliasCreatePageInterface {
  public pageTitleCreate: string;

  public pageTitleEdit: string;

  protected aliasInput: string;

  protected resultInput: string;

  protected saveButton: string;

  /**
   * @constructs
   * Setting up titles and selectors to use on add alias page
   */
  constructor() {
    super();

    this.pageTitleCreate = `New aliases • ${global.INSTALL.SHOP_NAME}`;
    this.pageTitleEdit = 'Edit aliases for ';

    // selectors
    this.aliasInput = '#search_term_search';
    this.resultInput = '#search_term_aliases_0_alias';
    this.saveButton = '#save-button';
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
    return this.getAlertSuccessBlockParagraphContent(page, 10000);
  }
}

const boSearchAliasCreatePage = new BOSearchAliasCreatePage();
export {boSearchAliasCreatePage, BOSearchAliasCreatePage};
