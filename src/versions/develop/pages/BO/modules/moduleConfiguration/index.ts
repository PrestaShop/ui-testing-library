import {ModuleConfigurationPageInterface} from '@interfaces/BO/modules/moduleConfiguration';
import BOBasePage from '@pages/BO/BOBasePage';

import type {Page} from 'playwright';
import semver from 'semver';
import utilsTest from '@utils/test';

/**
 * Module configuration page, contains selectors and functions for the page.
 * Can be used as a base page for specific module configuration page.
 * @class
 * @extends BOBasePage
 */
class ModuleConfigurationPage extends BOBasePage implements ModuleConfigurationPageInterface {
  private readonly pageHeadSubtitle: string;

  private readonly pageHeadButtonBack: string;

  private readonly pageHeadButtonTranslate: string;

  private readonly pageHeadButtonManageHooks: string;

  private readonly modalTranslate: string;

  private readonly modalTranslateCloseButton: string;

  /**
   * @constructs
   * Setting up titles and selectors to use on module configuration page
   */
  constructor() {
    super();

    // Header selectors
    this.pageHeadSubtitle = '.page-subtitle';

    if (semver.gte(utilsTest.getPSVersion(), '9.0.0')) {
      this.pageHeadButtonBack = '#page-header-desc-configuration-module-back';
      this.pageHeadButtonTranslate = '#page-header-desc-configuration-module-translate';
      this.pageHeadButtonManageHooks = '#page-header-desc-configuration-module-hook';
    } else {
      this.pageHeadButtonBack = '#desc-module-back';
      this.pageHeadButtonTranslate = '#desc-module-translate';
      this.pageHeadButtonManageHooks = '#desc-module-hook';
    }

    this.modalTranslate = '#moduleTradLangSelect';
    this.modalTranslateCloseButton = `${this.modalTranslate} div.modal-header button[data-dismiss="modal"]`;
  }

  /* Methods */

  /**
   * Get module name from page title
   * @return {Promise<string>}
   */
  async getPageSubtitle(page: Page): Promise<string> {
    return this.getTextContent(page, this.pageHeadSubtitle);
  }

  /**
   * Click on the Header Button "Back"
   * @return {Promise<void>}
   */
  async clickHeaderBack(page: Page): Promise<void> {
    await this.clickAndWaitForURL(page, this.pageHeadButtonBack);
  }

  /**
   * Click on the Header Button "Translate"
   * @return {Promise<void>}
   */
  async clickHeaderTranslate(page: Page): Promise<void> {
    await page.locator(this.pageHeadButtonTranslate).click();
  }

  /**
   * Click on the Header Button "Manage hooks"
   * @return {Promise<void>}
   */
  async clickHeaderManageHooks(page: Page): Promise<void> {
    await this.clickAndWaitForURL(page, this.pageHeadButtonManageHooks);
  }

  /**
   * Close the "Translate this module" modal
   * @return {Promise<void>}
   */
  async closeTranslateModal(page: Page): Promise<void> {
    await page.locator(this.modalTranslateCloseButton).click();
  }

  /**
   * Return if the "Translate this module" modal is visible
   * @return {Promise<boolean>}
   */
  async isModalTranslateVisible(page: Page): Promise<boolean> {
    return this.elementVisible(page, `${this.modalTranslate}.modal.in`, 3000);
  }
}

const moduleConfigurationPage = new ModuleConfigurationPage();
export {moduleConfigurationPage, ModuleConfigurationPage};
