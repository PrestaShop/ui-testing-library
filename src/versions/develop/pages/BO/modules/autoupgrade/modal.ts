import {ModuleAutoupgradeModalPageInterface} from '@interfaces/BO/modules/autoupgrade/modal';
import type {Page} from '@playwright/test';
import {ModuleConfigurationPage} from '@versions/develop/pages/BO/modules/moduleConfiguration';

/**
 * Module configuration page for module : Autoupgrade, contains selectors and functions for the page
 * @class
 * @extends ModuleConfiguration
 */
class AutoupgradeModal extends ModuleConfigurationPage implements ModuleAutoupgradeModalPageInterface {
  private readonly dialogUpdateNotification: string;

  private readonly remindMeLaterButton: string;

  private readonly remindMeLaterSevenDaysButton: string;

  private readonly dialogNotificationSection: string;

  private readonly updateLink: string;

  private readonly supportLink: string;

  private readonly psVersionLink: string;

  private readonly updateButton: string;

  /**
   * @constructs
   */
  constructor() {
    super();

    // Selectors of update dialog
    this.dialogUpdateNotification = '#dialog-update-notification';
    this.remindMeLaterButton = '#remin-me-later-update';
    this.remindMeLaterSevenDaysButton = `${this.remindMeLaterButton} button[value='7_days']`;
    this.dialogNotificationSection = 'div.dialog-notification__section';
    this.updateLink = `${this.dialogNotificationSection}:nth-child(1) .dialog-notification__link`;
    this.supportLink = `${this.dialogNotificationSection}:nth-child(4) .dialog-notification__link`;
    this.psVersionLink = `${this.dialogNotificationSection}:nth-child(2) .dialog-notification__section-content`;
    this.updateButton = '.dialog-notification__button.btn-primary';
  }

  // Methods of update
  /**
   * Is modal visible
   * @param page {Page} Browser tab
   * @returns {Promise<boolean>}
   */
  async isModalVisible(page: Page): Promise<boolean> {
    return this.elementVisible(page, this.dialogUpdateNotification, 5000);
  }

  /**
   * Close dialog update notification
   * @param page {Page} Browser tab
   * @returns {Promise<boolean>}
   */
  async closeDialogUpdateNotification(page: Page): Promise<boolean> {
    if (await this.elementVisible(page, this.dialogUpdateNotification, 5000)) {
      await page.locator(this.remindMeLaterButton).click();
      await page.locator(this.remindMeLaterSevenDaysButton).click();
    }

    return this.elementNotVisible(page, this.dialogUpdateNotification, 5000);
  }

  /**
   * Get update link from modal
   * @param page {Page} Browser tab
   * @returns {Promise<string>}
   */
  async getUpdateLinkFromModal(page: Page): Promise<string> {
    return this.getAttributeContent(page, this.updateLink, 'href');
  }

  /**
   * Get support link from modal
   * @param page {Page} Browser tab
   * @returns {Promise<string>}
   */
  async getSupportLinkFromModal(page: Page): Promise<string> {
    return this.getAttributeContent(page, this.supportLink, 'href');
  }

  /**
   * Open update link from the modal
   * @param page {Page} Browser tab
   * @returns {Promise<Page}
   */
  async openUpdateLinkFromTheModal(page: Page): Promise<Page> {
    return this.openLinkWithTargetBlank(page, this.updateLink, '.page-title', 'load', false);
  }

  /**
   * Get PS version from the modal
   * @param page {Page} Browser tab
   * @returns {Promise<string>}
   */
  async getPSVersionFromTheModal(page: Page): Promise<string> {
    return this.getTextContent(page, this.psVersionLink);
  }

  /**
   * Click on update button
   * @param page {Page} Browser tab
   * @returns {Promise<void>}
   */
  async clickOnUpdateButton(page: Page): Promise<void> {
    await this.clickAndWaitForURL(page, this.updateButton);
  }
}

const autoupgradeModal = new AutoupgradeModal();
export {autoupgradeModal, AutoupgradeModal};
