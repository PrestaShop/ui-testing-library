import type FakerCustomerServiceOptions from '@data/faker/customerServiceOptions';
import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOCustomerServicePageInterface extends BOBasePagePageInterface {
  readonly deleteMessageSuccessAlertText: string;
  readonly pageTitle: string;

  allowFileUploading(page: Page, toEnable?: boolean): Promise<string>;
  deleteMessage(page: Page, row: number): Promise<string>;
  getTextColumn(page: Page, row: number, columnName: string): Promise<string>;
  goToViewMessagePage(page: Page, row?: number): Promise<void>;
  isRunSyncButtonVisible(page: Page): Promise<boolean>;
  isStatusChanged(page: Page, row: number, status: string): Promise<boolean>;
  setCustomerServiceOptions(page: Page, optionsData: FakerCustomerServiceOptions): Promise<string>;
  setDefaultMessage(page: Page, message: string): Promise<string>;
}
