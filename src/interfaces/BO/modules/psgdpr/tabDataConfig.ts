import {ModuleConfigurationPageInterface} from '@interfaces/BO/modules/moduleConfiguration';
import {type Page} from '@playwright/test';

export interface ModulePsGdprBoTabDataConfigPageInterface extends ModuleConfigurationPageInterface {
  readonly messageCustomerDataDeleted: string;

  clickResultCard(page: Page, nth: number): Promise<void>;
  clickResultRemoveData(page: Page, nth: number, cancel?: boolean): Promise<string|null>;
  getNumberCompliantModules(page: Page): Promise<number>;
  getNumberCustomerDataResults(page: Page): Promise<number>;
  hasCustomerData(page: Page): Promise<boolean>;
  isModalRemoveDataVisible(page: Page): Promise<boolean>;
  searchCustomerData(page: Page, value: string): Promise<void>;
}
