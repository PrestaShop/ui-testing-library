import {ModuleConfigurationPageInterface} from '@interfaces/BO/modules/moduleConfiguration';
import type {Page} from '@playwright/test';

export interface ModuleAutoupgradeMainPageInterface extends ModuleConfigurationPageInterface {
  readonly checkRequirementSuccessMessage: string;
  readonly pageTitle: string;
  readonly updateSuccessMessage: string;

  cancelBackup(page:Page):Promise<boolean>;
  checkRequirements(page: Page, channel:string): Promise<boolean>;
  checkUpdateSuccess(page:Page):Promise<string>;
  chooseLocalArchive(page:Page, psVersion:string):Promise<boolean>;
  chooseNewVersion(page:Page):Promise<boolean>;
  clickOnLaunchBackup(page:Page):Promise<boolean>;
  clickOnUpdateWithoutBackup(page:Page):Promise<void>;
  getCurrentPSAndPHPVersion(page: Page): Promise<string>;
  getNewPSVersion(page: Page): Promise<string>;
  getStepTitle(page:Page):Promise<string>;
  goToMaintenancePage(page: Page): Promise<Page>;
  goToNextStep(page:Page):Promise<void>;
  updateYourStore(page: Page): Promise<boolean>;
}
