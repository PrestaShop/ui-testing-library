import {ModuleConfigurationPageInterface} from '@interfaces/BO/modules/moduleConfiguration';
import {Page} from '@playwright/test';

export interface ModuleContactFormMainPageInterface extends ModuleConfigurationPageInterface {
  readonly pageTitle: string;

  setReceiveCustomersMessageByEmail(page: Page, toEnable: boolean): Promise<string>;
  setSendConfirmationEmail(page: Page, toEnable: boolean): Promise<string>;
}
