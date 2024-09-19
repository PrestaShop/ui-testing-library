import {ModuleConfigurationPageInterface} from '@interfaces/BO/modules/moduleConfiguration';
import {Page} from '@playwright/test';

export interface ModulePsEmailAlertsMainPageInterface extends ModuleConfigurationPageInterface {
  readonly pageTitle: string;

  getProductAvailabilityStatus(page: Page): Promise<boolean>;
  saveFormCustomerNotifications(page: Page): Promise<string>;
  setEditOrder(page: Page, toEnable: boolean): Promise<string>;
  setNewOrder(page: Page, toEnable: boolean, email?: string): Promise<string>;
  setOutOfStock(page: Page, toEnable: boolean, email?: string): Promise<string>;
  setProductAvailabilityStatus(page: Page, toEnable: boolean): Promise<void>;
  setReturns(page: Page, toEnable: boolean, email?: string): Promise<string>;
}
