import {ModuleConfigurationPageInterface} from '@interfaces/BO/modules/moduleConfiguration';
import {Page} from '@playwright/test';

export interface ModulePsCheckPaymentMainPageInterface extends ModuleConfigurationPageInterface {
  readonly pageTitle: string;

  saveFormContactDetails(page: Page): Promise<string>;
  setAddress(page: Page, address: string): Promise<void>;
  setPayee(page: Page, payee: string): Promise<void>;
}
