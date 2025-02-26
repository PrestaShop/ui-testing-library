import type FakerImageType from '@data/faker/imageType';
import {BOBasePagePageInterface} from '@interfaces/BO';
import type {Page} from '@playwright/test';

export interface BOImageSettingsCreatePageInterface extends BOBasePagePageInterface {
  readonly pageTitleCreate: string;
  readonly pageTitleEdit: (name: string) => string;

  createEditImageType(page: Page, imageTypeData: FakerImageType): Promise<string>;
}
