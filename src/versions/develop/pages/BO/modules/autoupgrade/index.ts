import {ModuleAutoupgradeMainPageInterface} from '@interfaces/BO/modules/autoupgrade';
import type {Page} from '@playwright/test';
import {ModuleConfigurationPage} from '@versions/develop/pages/BO/modules/moduleConfiguration';

/**
 * Module configuration page for module : Autoupgrade, contains selectors and functions for the page
 * @class
 * @extends ModuleConfiguration
 */
class Autoupgrade extends ModuleConfigurationPage implements ModuleAutoupgradeMainPageInterface {
  public pageTitle: string;

  public readonly checkRequirementSuccessMessage: string;

  public readonly updateSuccessMessage: string;

  private readonly updateYourStoreRadioButton: string;

  private readonly getStartedButton: string;

  private readonly stepContent: string;

  private readonly newVersionRadioButton: string;

  private readonly localArchiveRadioButton: string;
  
  private readonly radioCardArchive: string;
  
  private readonly archiveZipSelect: string;
  
  private readonly archiveXmlSelect: string;

  private readonly radioCardLoader: (channel: string) => string;

  private readonly radioCardLoaderWrapper: (channel: string) => string;

  private readonly checkRequirementBlock: string;

  private readonly checkRequirementsFailedAlerts: string;

  protected goToMaintenancePageLink: string;

  private readonly checkRequirementsButton: string;

  private readonly alertSuccessMessage: string;

  private readonly currentPSVersion: string;

  private readonly newPsVersionCardTitle: string;

  private readonly nextStepButton: string;

  private readonly stepTitle: string;

  private readonly launchBackupButton: string;

  private readonly dialogConfirmBackup: string;

  private readonly cancelBackupButton: string;

  private readonly updateWithoutBackupButton: string;

  private readonly dialogConfirmUpdate: string;

  private readonly startUpdateRadioButton: string;

  private readonly dialogConfirmUpdateButton: string;

  private readonly updateProgressBar: string;

  private readonly updateAlertSuccessMessage: string;

  /**
   * @constructs
   */
  constructor() {
    super();

    this.pageTitle = `Update assistant > Update assistant • ${global.INSTALL.SHOP_NAME}`;
    this.checkRequirementSuccessMessage = 'The requirements check is complete, you can update your store to this '
      + 'version of PrestaShop.';
    this.updateSuccessMessage = 'Your store has been updated to PrestaShop version';

    // Selectors
    // First page : Welcome to PrestaShop Update Assistant
    this.updateYourStoreRadioButton = '#next_page div.radio-card__radio-wrapper input[value="update"]';
    this.getStartedButton = '#ua_step_content div.page__buttons button';
    // Step content
    this.stepContent = '#stepper_content';
    this.stepTitle = '.page__title';
    // 1 : version choose step
    this.newVersionRadioButton = '#online';
    this.localArchiveRadioButton = '#local';
    this.radioCardArchive = '#radio_card_archive div.radio-card__local-archive div';
    this.archiveZipSelect = '#archive_zip';
    this.archiveXmlSelect = '#archive_xml';
    this.radioCardLoader = (channel: string) => `#radio_card_${channel} .radio-card__loader-title`;
    this.radioCardLoaderWrapper = (channel: string) => `#radio_card_${channel} .radio-card__loader-wrapper`;
    this.checkRequirementBlock = '.check-requirements';
    this.checkRequirementsFailedAlerts = '.check-requirements--failed';
    this.goToMaintenancePageLink = 'div.radio-card__check-requirements a[href*="AdminMaintenance"]';
    this.checkRequirementsButton = 'div.radio-card__check-requirements button'
      + '[data-action="check-requirements-again"]';
    this.alertSuccessMessage = '.alert-success p.alert__message';
    this.currentPSVersion = '#ua_step_content p.not-up-to-date__message';
    this.newPsVersionCardTitle = '#radio_card_online p.radio-card__title';
    this.nextStepButton = '#ua_step_content div.page__buttons button';
    // 2 : Update options step
    // 3 : Back up your store step
    this.launchBackupButton = '#ua_step_content div.page__buttons button.btn-primary';
    this.dialogConfirmBackup = '#dialog-confirm-backup';
    this.cancelBackupButton = '#dialog-confirm-backup div.dialog__footer button.btn-link';
    this.updateWithoutBackupButton = '#update-backup-page-update-form';
    this.dialogConfirmUpdate = '#dialog-confirm-update';
    this.startUpdateRadioButton = '#dialog-start-update-own-backup';
    this.dialogConfirmUpdateButton = '.dialog__footer .btn-primary';
    // 4 : Update step
    this.updateProgressBar = '#ua_step_content div.log-progress__bar div[title*=\'100\']';
    this.updateAlertSuccessMessage = '#ua_step_content div.page__content div.alert-success p.alert__title';
  }

  // Methods
  /**
   * Update your store
   * @param page {Page} Browser tab
   * @return {Promise<boolean}
   */
  async updateYourStore(page: Page): Promise<boolean> {
    await page.locator(this.updateYourStoreRadioButton).setChecked(true);
    await page.locator(this.getStartedButton).click();

    return this.elementVisible(page, this.stepContent, 5000);
  }

  /**
   * Choose new version
   * @param page {Page} Browser tab
   * @return {Promise<boolean}
   */
  async chooseNewVersion(page: Page): Promise<boolean> {
    await page.locator(this.newVersionRadioButton).setChecked(true);
    await this.waitForVisibleSelector(page, this.radioCardLoader('online'));
    await this.waitForVisibleSelector(page, this.checkRequirementBlock, 100000);

    return this.elementVisible(page, this.checkRequirementsFailedAlerts, 2000);
  }

  /**
   * Choose local archive
   * @param page {Page} Browser tab
   * @param psVersion {string} The ps Version to use
   */
  async chooseLocalArchive(page: Page, psVersion: string): Promise<boolean> {
    await page.locator(this.localArchiveRadioButton).setChecked(true);
    await this.waitForVisibleSelector(page, this.radioCardArchive);
    await this.selectByVisibleText(page, this.archiveZipSelect, `prestashop_${psVersion}.zip`);
    await this.selectByVisibleText(page, this.archiveXmlSelect, `prestashop_${psVersion}.xml`);
    await this.waitForVisibleSelector(page, this.checkRequirementBlock, 100000);

    return this.elementVisible(page, this.checkRequirementsFailedAlerts, 2000);
  }

  /**
   * Go to maintenance page
   * @param page {Page} Browser tab
   * @return {Promise<Page>} Opened tab after the click
   */
  async goToMaintenancePage(page: Page): Promise<Page> {
    return this.openLinkWithTargetBlank(page, this.goToMaintenancePageLink);
  }

  /**
   * Check requirements
   * @param page {Page} Browser tab
   * @param channel {string} Channel to use
   * @return {Promise<string}
   */
  async checkRequirements(page: Page, channel: string = 'online'): Promise<boolean> {
    await page.locator(this.checkRequirementsButton).click();
    await this.waitForVisibleSelector(page, this.radioCardLoader(channel));
    await this.waitForHiddenSelector(page, this.radioCardLoaderWrapper(channel), 50000);

    return this.elementNotVisible(page, `${this.nextStepButton}[disabled='true']`, 2000);
  }

  /**
   * Get current PS version
   * @param page {Page} Browser tab
   * @return {Promise<string}
   */
  async getCurrentPSAndPHPVersion(page: Page): Promise<string> {
    return this.getTextContent(page, this.currentPSVersion);
  }

  /**
   * Get new PS version
   * @param page {Page} Browser tab
   * @return {Promise<string}
   */
  async getNewPSVersion(page: Page): Promise<string> {
    return this.getTextContent(page, this.newPsVersionCardTitle);
  }

  /**
   * Go to new step
   * @param page {Page} Browser tab
   * @return {Promise<void}
   */
  async goToNextStep(page: Page): Promise<void> {
    await page.locator(this.nextStepButton).click();
    await page.waitForTimeout(2000);
  }

  /**
   * Get step title
   * @param page {Page} Browser tab
   * @return {Promise<string}
   */
  async getStepTitle(page: Page): Promise<string> {
    return this.getTextContent(page, this.stepTitle);
  }

  /**
   * Click on launch backup
   * @param page {Page} Browser tab
   * @return {Promise<boolean}
   */
  async clickOnLaunchBackup(page: Page): Promise<boolean> {
    await this.waitForSelectorAndClick(page, this.launchBackupButton, 2000);
    
    return await this.elementVisible(page, this.dialogConfirmBackup, 5000);
  }

  /**
   * Cancel backup
   * @param page {Page} Browser tab
   * @return {Promise<boolean}
   */
  async cancelBackup(page: Page): Promise<boolean> {
    await page.locator(this.cancelBackupButton).click();
    
    return this.elementNotVisible(page, this.dialogConfirmBackup, 5000);
  }

  /**
   * Click on update without backup
   * @param page {Page} Browser tab
   * @return {Promise<void}
   */
  async clickOnUpdateWithoutBackup(page: Page): Promise<void> {
    await page.locator(this.updateWithoutBackupButton).click();
    await this.waitForVisibleSelector(page, this.dialogConfirmUpdate);
    await page.locator(this.startUpdateRadioButton).setChecked(true);
    await page.locator(this.dialogConfirmUpdateButton).click();
  }

  /**
   * Check update success
   * @param page {Page} Browser tab
   * @return {Promise<string}
   */
  async checkUpdateSuccess(page: Page): Promise<string> {
    await this.waitForVisibleSelector(page, this.updateProgressBar, 5000000);

    return this.getTextContent(page, this.updateAlertSuccessMessage);
  }
}

const autoupgrade = new Autoupgrade();
export {autoupgrade, Autoupgrade};
