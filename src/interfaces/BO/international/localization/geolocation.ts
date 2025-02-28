import {type BOLocalizationBasePageInterface} from '@interfaces/BO/international/localization/base';
import type {Page} from '@playwright/test';

export interface BOGeolocationPageInterface extends BOLocalizationBasePageInterface {
  readonly messageGeolocationDBUnavailable: string;
  readonly messageWarningNeedDB: string;
  readonly pageTitle: string;

  getWarningMessage(page: Page): Promise<string>;
  getWhiteListedIPAddresses(page: Page): Promise<string>;
  saveFormGeolocationByIPAddress(page: Page): Promise<string>;
  saveFormIPAddressesWhitelist(page: Page): Promise<string>;
  setGeolocationByIPAddressStatus(page: Page, status: boolean): Promise<void>;
  setWhiteListedIPAddresses(page: Page, whitelist: string): Promise<void>;
}
