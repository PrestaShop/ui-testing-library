import type FakerSearchAlias from '@data/faker/searchAlias';
import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOAliasCreatePageInterface extends BOBasePagePageInterface {
  readonly pageTitleCreate: string;
  readonly pageTitleEdit: string;

  setAlias(page: Page, aliasData: FakerSearchAlias): Promise<string>,
}
