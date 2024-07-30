import {FOBasePagePageInterface} from '@interfaces/FO';
import type {Page} from '@playwright/test';

export interface FoEmailSubscriptionPageInterface extends FOBasePagePageInterface {
  readonly emailRegistrationSuccessMessage: string;

  getSuccessMessage(page: Page): Promise<string>;
}
