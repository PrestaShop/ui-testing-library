import type FakerSearchAlias from '@data/faker/searchAlias';
import {type BOAliasCreatePageInterface} from '@interfaces/BO/shopParameters/search/alias/create';
import BOBasePage from '@pages/BO/BOBasePage';
import {type Page} from '@playwright/test';

/**
 * Add alias page, contains selectors and functions for the page
 * @class
 * @extends BOBasePage
 */
class AddAliasPage extends BOBasePage implements BOAliasCreatePageInterface {
  public readonly pageTitleCreate: string;

  public readonly pageTitleEdit: string;

  private readonly aliasInput: string;

  private readonly resultInput: string;

  private readonly saveButton: string;

  /**
   * @constructs
   * Setting up titles and selectors to use on add alias page
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
    await this.setValue(page, this.aliasInput, aliasData.alias);
    await this.setValue(page, this.resultInput, aliasData.result);
    await page.locator(this.saveButton).click();
    return this.getAlertSuccessBlockContent(page);
  }
}

module.exports = new AddAliasPage();
