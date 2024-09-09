import {ModuleConfigurationPageInterface} from '@interfaces/BO/modules/moduleConfiguration';
import {type Page} from '@playwright/test';

export interface ModulePsGdprBoMainPageInterface extends ModuleConfigurationPageInterface {
  readonly pageSubTitle: string;

  goToTab(page: Page, nth: number): Promise<boolean>;
}
