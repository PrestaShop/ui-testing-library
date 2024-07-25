import {BOBasePagePageInterface} from '@interfaces/BO';
import type {Page} from '@playwright/test';

export interface BOAdministrationPageInterface extends BOBasePagePageInterface {
  readonly dangerAlertCookieSameSite: string;
  readonly pageTitle: string;

  isCheckCookiesAddressEnabled(page: Page): Promise<boolean>;
  saveGeneralForm(page: Page): Promise<string>;
  setCookiesIPAddress(page: Page, toEnable?: boolean): Promise<void>;
  setCookieSameSite(page: Page, value: string): Promise<void>;
  setLifetimeBOCookies(page: Page, value: number): Promise<void>;
  setLifetimeFOCookies(page: Page, value: number): Promise<void>;
  setMaxSizeAttachedFiles(page: Page, size: number): Promise<string>;
  setMaxSizeDownloadedProduct(page: Page, size: number): Promise<string>;
  setMaxSizeForProductImage(page: Page, size: number): Promise<string>;
  setShowNotificationsForNewCustomers(page: Page, toEnable: boolean): Promise<string>;
  setShowNotificationsForNewMessages(page: Page, toEnable: boolean): Promise<string>;
  setShowNotificationsForNewOrders(page: Page, toEnable: boolean): Promise<string>;
}
