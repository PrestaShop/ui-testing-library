import type FakerModule from '@data/faker/module';
import {BOBasePagePageInterface} from '@interfaces/BO';

import type {Page} from '@playwright/test';

export interface BOPaymentMethodsPageInterface extends BOBasePagePageInterface {
  readonly pageTitle: string;

  clickConfigureButton(page: Page, module: FakerModule): Promise<void>;
  getCountActivePayments(page: Page): Promise<number>;
  hasConfigureButton(page: Page, module: FakerModule): Promise<boolean>;
}
