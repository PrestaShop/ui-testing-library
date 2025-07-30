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

  private readonly updateAssistantBreadCrumbLink: string;

  private readonly restoreFromBackupRadioButton: string;

  private readonly BackupConfirmButton: string;

  private readonly progressBar: string;

  private readonly backupAlertMessage: string;

  private readonly backupOptions: string;

  private readonly backupDeleteSelectionLink: string;

  private readonly backupDeleteSelectionDialog: string;

  private readonly backupCancelDeleteButton: string;

  private readonly backupDeleteButton: string;

  private readonly restoreButton: string;

  private readonly restoreFromBackupDialog: string;

  private readonly restoreErrorMessage: string;

  private readonly restoreLogs: string;

  private readonly restoreConfirmButton: string;

  private readonly restoreProgressBar: string;

  private readonly restoreSuccessAlert: string;

  private readonly restoreSuccessAlertTitle: string;

  private readonly restoreDeveloperDocumentation: string;

  private readonly exitPostRestoreLink: string;

  private readonly getNoBackupErrorMessage: string;

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
    this.updateAssistantBreadCrumbLink = '#content ul li.breadcrumb-current';
    this.updateYourStoreRadioButton = '#next_page div.radio-card__radio-wrapper input[value="update"]';
    this.restoreFromBackupRadioButton = '#next_page div.radio-card__radio-wrapper input[value="restore"]';
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
    this.updateProgressBar = '#ua_step_content div.log-progress__bar div[title*="100"]';
    this.updateAlertSuccessMessage = '#ua_step_content div.page__content div.alert-success p.alert__title';
    // 3 : Back up your store step
    this.launchBackupButton = '#ua_step_content div.page__buttons button.btn-primary';
    this.dialogConfirmBackup = '#dialog-confirm-backup';
    this.cancelBackupButton = '#dialog-confirm-backup div.dialog__footer button.btn-link';
    this.updateWithoutBackupButton = '#update-backup-page-update-form';
    this.dialogConfirmUpdate = '#dialog-confirm-update';
    this.startUpdateRadioButton = '#dialog-start-update-own-backup';
    this.dialogConfirmUpdateButton = '.dialog__footer .btn-primary';
    this.BackupConfirmButton = '#form-confirm-backup';
    this.progressBar = '#ua_step_content div.progress.log-progress__bar';
    this.backupAlertMessage = '.backup-page__container .alert-success .alert__message';
    this.backupOptions = '#BACKUP_NAME option';
    this.backupDeleteSelectionLink = '#backup_choice button[value="delete"]';
    this.backupDeleteSelectionDialog = '#ua_dialog div.dialog__content';
    this.backupCancelDeleteButton = '#ua_dialog div.dialog__footer button.btn-link';
    this.backupDeleteButton = '#backup_to_delete button';
    // 4 : Restore step
    this.restoreButton = '#ua_step_content div.page__buttons button';
    this.restoreFromBackupDialog = '#ua_dialog dialog[aria-label="Restore from a backup?"]';
    this.restoreErrorMessage = '#backup_choice div.render-field__error div.error-message';
    this.restoreLogs = '#ua_step_content div.page__content a[download]';
    this.restoreConfirmButton = '#backup_to_restore button';
    this.restoreProgressBar = '#ua_step_content div.log-progress__bar';
    this.restoreSuccessAlert = '#ua_step_content div.alert-success';
    this.restoreSuccessAlertTitle = '#ua_step_content div.alert-success p.alert__title';
    this.restoreDeveloperDocumentation = '#ua_step_content div.page__buttons a.btn-primary';
    this.exitPostRestoreLink = '#ua_step_content div.page__buttons a.btn-default';
    this.getNoBackupErrorMessage = '#next_page div.radio-card__disabled-message div.radio-card__disabled-message-placement';
  }

  // Methods of update
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
   * @param row {number} The row of ps Version to use
   */
  async chooseLocalArchive(page: Page, row: number): Promise<boolean> {
    await page.locator(this.localArchiveRadioButton).setChecked(true);
    await this.waitForVisibleSelector(page, this.radioCardArchive);
    //await page.locator(this.archiveZipSelect).click();
    await page.locator(this.archiveZipSelect).selectOption({index: row});
    //await page.locator(this.archiveXmlSelect).click();
    await page.locator(this.archiveXmlSelect).selectOption({index: row});
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

  // Methods to create a backup

  /**
   * Click on launch backup
   * @param page {Page} Browser tab
   * @return {Promise<boolean}
   */
  async clickOnLaunchBackup(page: Page): Promise<boolean> {
    await this.waitForSelectorAndClick(page, this.launchBackupButton, 2000);

    return this.elementVisible(page, this.dialogConfirmBackup, 5000);
  }

  /**
   * Start backup
   * @param page {Page} Browser tab
   * @return {Promise<string}
   */
  async startBackup(page: Page): Promise<string> {
    await this.waitForSelectorAndClick(page, this.BackupConfirmButton);
    await this.waitForVisibleSelector(page, this.progressBar);
    await this.waitForVisibleSelector(page, this.updateProgressBar, 5000000);

    return this.getTextContent(page, this.backupAlertMessage);
  }

  /**
   * Click on update assistant link
   * @param page {Page} Browser tab
   * @return {Promise<void}
   */
  async clickOnUpdateAssistantLink(page: Page): Promise<void> {
    await page.locator(this.updateAssistantBreadCrumbLink).click();
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

  // Methods to restore
  /**
   * Restore from backup
   * @param page {Page} Browser tab
   * @return {Promise<boolean}
   */
  async restoreFromBackup(page: Page): Promise<boolean> {
    await page.locator(this.restoreFromBackupRadioButton).setChecked(true);
    await page.locator(this.getStartedButton).click();

    return this.elementVisible(page, this.stepContent, 5000);
  }

  /**
   * Get number of backups
   * @param page {Page} Browser tab
   * @return {Promise<number}
   */
  async getNumberOfBackups(page: Page): Promise<number> {
    return page.locator(this.backupOptions).count();
  }

  /**
   * Click on delete selection link
   * @param page {Page} Browser tab
   * @return {Promise<boolean}
   */
  async backupClickDeleteSelection(page: Page): Promise<boolean> {
    await page.locator(this.backupDeleteSelectionLink).click();

    return this.elementVisible(page, this.backupDeleteSelectionDialog, 5000);
  }

  /**
   * Cancel delete backup
   * @param page {Page} Browser tab
   * @return {Promise<boolean}
   */
  async cancelDeleteBackup(page: Page): Promise<boolean> {
    await page.locator(this.backupCancelDeleteButton).click();

    return this.elementNotVisible(page, this.backupDeleteSelectionDialog, 5000);
  }

  /**
   * Delete backup
   * @param page {Page} Browser tab
   * @return {Promise<boolean}
   */
  async deleteBackup(page: Page): Promise<boolean> {
    await page.locator(this.backupDeleteButton).click();

    return this.elementNotVisible(page, this.backupDeleteSelectionDialog, 5000);
  }

  /**
   * Get selected backup name
   * @param page {Page} Browser tab
   * @return {Promise<string}
   */
  async getSelectedBackupName(page: Page): Promise<string> {
    return this.getAttributeContent(page, `${this.backupOptions}[selected]`, 'value');
  }

  /**
   * Click on restore button
   * @param page {Page} Browser tab
   * @return {Promise<boolean}
   */
  async clickOnRestoreButton(page: Page): Promise<boolean> {
    await page.locator(this.restoreButton).click();

    return this.elementVisible(page, this.restoreFromBackupDialog, 5000);
  }

  /**
   * Get restore error message
   * @param page {Page} Browser tab
   * @return {Promise<string}
   */
  async getRestoreErrorMessage(page: Page): Promise<string> {
    return this.getTextContent(page, this.restoreErrorMessage, true);
  }

  /**
   * Download restore logs
   * @param page {Page} Browser tab
   * @return {Promise<string | null}
   */
  async downloadRestoreLogs(page: Page): Promise<string | null> {
    return this.clickAndWaitForDownload(page, this.restoreLogs);
  }

  /**
   * Confirm restore
   * @param page {Page} Browser tab
   * @return {Promise<string}
   */
  async confirmRestore(page: Page): Promise<string> {
    await this.waitForSelectorAndClick(page, this.restoreConfirmButton);
    await this.waitForVisibleSelector(page, this.restoreProgressBar);
    await this.waitForVisibleSelector(page, this.restoreSuccessAlert, 5000000);

    return this.getTextContent(page, this.restoreSuccessAlertTitle);
  }

  /**
   * Open developer documentation
   * @param page {Page} Browser tab
   * @return {Promise<Page}
   */
  async openDeveloperDocumentation(page: Page): Promise<Page> {
    return this.openLinkWithTargetBlank(page, this.restoreDeveloperDocumentation, '#post-restore-checklist');
  }

  /**
   * Click on exit post restore
   * @param page {Page} Browser tab
   * @return {Promise<void}
   */
  async clickOnExitPostRestore(page: Page): Promise<void> {
    await this.clickAndWaitForLoadState(page, this.exitPostRestoreLink);
  }

  /**
   * Get no backup in your store message
   * @param page {Page} Browser tab
   * @return {Promise<string}
   */
  async getNoBackupInYourStoreMessage(page: Page): Promise<string> {
    return this.getTextContent(page, this.getNoBackupErrorMessage);
  }
}

const autoupgrade = new Autoupgrade();
export {autoupgrade, Autoupgrade};
