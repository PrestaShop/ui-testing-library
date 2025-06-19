import {FOBasePagePageInterface} from '@interfaces/FO';
import {type Page} from '@playwright/test';

export interface FOMyReturnDetailsPageInterface extends FOBasePagePageInterface {
  readonly errorMessage: string;
  orderReturnCardBlock: string;
  readonly pageTitle: string;

  getAlertWarning(page: Page): Promise<string>;
  getOrderReturnInfo(page: Page): Promise<string>;
  isAlertWarningVisible(page: Page): Promise<boolean>;
}
