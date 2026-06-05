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
  public pageTitle: string;

  protected nameInput: string;

  protected urlInput: string;

  protected newWindowToggle: (toggle: string) => string;

  protected saveButton: string;

  /**
   * @constructs
   * Setting up texts and selectors to use on add quick access page
   */
  constructor() {
    super();

    this.pageTitle = `New quick access • ${global.INSTALL.SHOP_NAME}`;

    // Selectors
    this.nameInput = 'form[name="quick_access"] input[name="quick_access[name][1]"]';
    this.urlInput = 'form[name="quick_access"] input[name="quick_access[link]"]';
    this.newWindowToggle = (toggle: string) => 'form[name="quick_access"] '
      + `input[name="quick_access[new_window]"][value="${toggle}"]`;
    this.saveButton = 'form[name="quick_access"] #save-button';
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
    await page.locator(this.newWindowToggle(quickAccessLinkData.openNewWindow ? '1' : '0')).setChecked(true);
    await this.clickAndWaitForURL(page, this.saveButton);

    // Return successful message
    return this.getAlertSuccessBlockParagraphContent(page);
  }
}

const boQuickAccessCreatePage = new BOQuickAccessCreatePage();
export {boQuickAccessCreatePage, BOQuickAccessCreatePage};
