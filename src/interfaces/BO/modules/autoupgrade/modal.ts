import {ModuleConfigurationPageInterface} from '@interfaces/BO/modules/moduleConfiguration';
import type {Page} from '@playwright/test';

export interface ModuleAutoupgradeModalPageInterface extends ModuleConfigurationPageInterface {
  clickOnUpdateButton(page: Page): Promise<void>;
  closeDialogUpdateNotification(page: Page): Promise<boolean>;
  getPSVersionFromTheModal(page: Page): Promise<string>;
  getSupportLinkFromModal(page: Page): Promise<string>;
  getReleaseNoteLinkFromModal(page: Page): Promise<string>;
  isModalVisible(page: Page): Promise<boolean>;
  isReleaseNoteLinkVisible(page: Page): Promise<boolean>;
  openReleaseNoteFromTheModal(page: Page): Promise<Page>;
}
