import type FakerSearchTag from '@data/faker/searchTag';
import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOTagsCreatePageInterface extends BOBasePagePageInterface {
  readonly pageTitleCreate: string;
  readonly pageTitleEdit: (name: string) => string;

  setTag(page: Page, tagData: FakerSearchTag): Promise<string>;
}
