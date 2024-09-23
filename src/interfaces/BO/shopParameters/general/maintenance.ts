import {BOBasePagePageInterface} from '@interfaces/BO';
import {Page} from '@playwright/test';

export interface BOMaintenancePageInterface extends BOBasePagePageInterface {
  readonly maintenanceText: string;
  readonly pageTitle: string;

  addMaintenanceIPAddress(page: Page, ipAddress: string): Promise<string>;
  addMyIpAddress(page: Page): Promise<string>;
  changeMaintenanceTextShopStatus(page: Page, text: string): Promise<string>;
  changeShopStatus(page: Page, toEnable?: boolean): Promise<string>;
  changeStoreForLoggedInEmployees(page: Page, toEnable?: boolean): Promise<string>
}
