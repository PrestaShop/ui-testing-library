import {ModuleConfigurationPageInterface} from '@interfaces/BO/modules/moduleConfiguration';
import type {Page} from '@playwright/test';

export interface ModuleAutoupgradeModalPageInterface extends ModuleConfigurationPageInterface {
  clickOnUpdateButton(page: Page): Promise<void>;
  closeDialogUpdateNotification(page: Page): Promise<boolean>;
  getPSVersionFromTheModal(page: Page): Promise<string>;
  getSupportLinkFromModal(page: Page): Promise<string>;
  getUpdateLinkFromModal(page: Page): Promise<string>;
  isModalVisible(page: Page): Promise<boolean>;
  openUpdateLinkFromTheModal(page: Page): Promise<Page>;
}
