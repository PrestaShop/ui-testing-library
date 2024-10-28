import {ModuleConfigurationPageInterface} from '@interfaces/BO/modules/moduleConfiguration';
import {Page} from '@playwright/test';

export interface ModulePsCategoryProductsMainPageInterface extends ModuleConfigurationPageInterface {
  readonly pageTitle: string;

  setDisplayProductsPriceStatus(page: Page, status: boolean): Promise<string>;
}
