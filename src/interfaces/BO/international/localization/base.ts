import {BOBasePagePageInterface} from '@interfaces/BO';

import type {Page} from '@playwright/test';

export interface BOLocalizationBasePageInterface extends BOBasePagePageInterface {
  goToSubTabCurrencies(page: Page): Promise<void>;
  goToSubTabGeolocation(page: Page): Promise<void>;
  goToSubTabLanguages(page: Page): Promise<void>;
  goToSubTabLocalizations(page: Page): Promise<void>;
}
