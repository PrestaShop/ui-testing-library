import type FakerFile from '@data/faker/file';
import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOFilesCreatePageInterface extends BOBasePagePageInterface {
  readonly pageTitle: string;
  readonly pageTitleEdit: string;

  createEditFile(page: Page, fileData: FakerFile, save?: boolean): Promise<string | null>;
  getTextDanger(page: Page): Promise<string>;
}
