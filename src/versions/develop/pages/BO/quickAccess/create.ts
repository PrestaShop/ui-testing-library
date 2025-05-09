import type FakerQuickAccess from '@data/faker/quickAccess';
import {type BOQuickAccessCreatePageInterface} from '@interfaces/BO/quickAccess/create';
import BOBasePage from '@pages/BO/BOBasePage';
import {type Page} from '@playwright/test';

/**
 * Add quick access page, contains functions that can be used on the page
 * @class
 * @extends BOBasePage
 */
class BOQuickAccessCreatePage extends BOBasePage implements BOQuickAccessCreatePageInterface {
  public readonly pageTitle: string;

  private readonly nameInput: string;

  private readonly urlInput: string;

  private readonly newWindowToggle: (toggle: string) => string;

  private readonly saveButton: string;

  /**
   * @constructs
   * Setting up texts and selectors to use on add quick access page
   */
  constructor() {
    super();

    this.pageTitle = 'Quick Access > Add new •';

    // Selectors
    this.nameInput = '#name_1';
    this.urlInput = '#link';
    this.newWindowToggle = (toggle: string) => `#new_window_${toggle}`;
    this.saveButton = '#quick_access_form_submit_btn';
  }

  /*
  Methods
   */
  /**
   * Set quick access link
   * @param page {Page} Browser tab
   * @param quickAccessLinkData {FakerQuickAccess} Data to set on new quick access form
   * @returns {Promise<string>}
   */
  async setQuickAccessLink(page: Page, quickAccessLinkData: FakerQuickAccess): Promise<string> {
    await this.setValue(page, this.nameInput, quickAccessLinkData.name);
    await this.setValue(page, this.urlInput, quickAccessLinkData.url);
    await this.setChecked(page, this.newWindowToggle(quickAccessLinkData.openNewWindow ? 'on' : 'off'));
    await this.clickAndWaitForURL(page, this.saveButton);

    // Return successful message
    return this.getAlertSuccessBlockContent(page);
  }
}

module.exports = new BOQuickAccessCreatePage();
