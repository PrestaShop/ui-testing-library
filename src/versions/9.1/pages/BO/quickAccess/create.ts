import type FakerQuickAccess from '@data/faker/quickAccess';
import {type BOQuickAccessCreatePageInterface} from '@interfaces/BO/quickAccess/create';
import {type Page} from '@playwright/test';
import {BOQuickAccessCreatePage as BOQuickAccessCreatePageVersion} from '@versions/develop/pages/BO/quickAccess/create';

class BOQuickAccessCreatePage extends BOQuickAccessCreatePageVersion implements BOQuickAccessCreatePageInterface {
  constructor() {
    super();

    this.pageTitle = 'Quick Access > Add new •';

    // Selectors
    this.nameInput = '#name_1';
    this.urlInput = '#link';
    this.newWindowToggle = (toggle: string) => `#new_window_${toggle}`;
    this.saveButton = '#quick_access_form_submit_btn';
  }

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

const boQuickAccessCreatePage = new BOQuickAccessCreatePage();
export {boQuickAccessCreatePage, BOQuickAccessCreatePage};
