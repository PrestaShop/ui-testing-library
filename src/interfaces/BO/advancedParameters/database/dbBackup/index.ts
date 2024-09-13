import {BOBasePagePageInterface} from '@interfaces/BO';
import type {Page} from '@playwright/test';

export interface BODbBackupPageInterface extends BOBasePagePageInterface {
  readonly pageTitle: string;
  readonly successfulBackupCreationMessage: string;

  createDbDbBackup(page: Page): Promise<string>;
  deleteBackup(page: Page, row: number): Promise<string>;
  deleteWithBulkActions(page: Page): Promise<string>;
  downloadDbBackup(page: Page): Promise<string|null>;
  getNumberOfElementInGrid(page: Page): Promise<number>;
  paginationNext(page: Page): Promise<string>;
  paginationPrevious(page: Page): Promise<string>;
  selectPaginationLimit(page: Page, number: number): Promise<string>;
}
