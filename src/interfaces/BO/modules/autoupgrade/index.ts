import {ModuleConfigurationPageInterface} from '@interfaces/BO/modules/moduleConfiguration';
import type {Page} from '@playwright/test';

export interface ModuleAutoupgradeMainPageInterface extends ModuleConfigurationPageInterface {
  readonly checkRequirementSuccessMessage: string;
  readonly pageTitle: string;
  readonly updateSuccessMessage: string;

  backupClickDeleteSelection(page: Page): Promise<boolean>;
  cancelBackup(page: Page): Promise<boolean>;
  cancelDeleteBackup(page: Page): Promise<boolean>
  checkRequirements(page: Page): Promise<boolean>;
  checkUpdateSuccess(page: Page): Promise<string>;
  chooseLocalArchive(page: Page, psVersion: string): Promise<boolean>;
  chooseNewVersion(page: Page, recommanded?: boolean): Promise<boolean>;
  clickOnExitPostRestore(page: Page): Promise<void>;
  clickOnLaunchBackup(page: Page): Promise<boolean>;
  clickOnRestoreButton(page: Page): Promise<boolean>;
  clickOnUpdateAssistantLink(page: Page): Promise<void>;
  clickOnUpdateWithoutBackup(page: Page): Promise<void>;
  confirmRestore(page: Page): Promise<string>;
  deleteBackup(page: Page): Promise<boolean>;
  downloadRestoreLogs(page: Page): Promise<string | null>;
  getCurrentPSAndPHPVersion(page: Page): Promise<string>;
  getNewPSVersion(page: Page): Promise<string>;
  getNoBackupInYourStoreMessage(page: Page): Promise<string>;
  getNumberOfBackups(page: Page): Promise<number>;
  getRestoreErrorMessage(page: Page): Promise<string>;
  getSelectedBackupName(page: Page): Promise<string>;
  getStepTitle(page: Page): Promise<string>;
  goToMaintenancePage(page: Page): Promise<Page>;
  goToNextStep(page: Page): Promise<void>;
  isMajorVersionVisible(page: Page): Promise<boolean>;
  isRecommandedVesrionVisible(page: Page): Promise<boolean>;
  openDeveloperDocumentation(page: Page): Promise<Page>;
  restoreFromBackup(page: Page): Promise<boolean>;
  startBackup(page: Page): Promise<string>;
  updateYourStore(page: Page): Promise<boolean>;
}
