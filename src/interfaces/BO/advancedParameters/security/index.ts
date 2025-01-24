import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOSecurityPageInterface extends BOBasePagePageInterface {
  readonly pageTitle: string;

  goToCustomerSessionsPage(page: Page): Promise<void>;
  goToEmployeeSessionsPage(page: Page): Promise<void>;
}
