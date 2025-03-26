import type FakerTitle from '@data/faker/title';
import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOTitlesCreatePageInterface extends BOBasePagePageInterface {
  readonly pageTitleCreate: string;
  readonly pageTitleEdit: (titleName: string) => string;

  createEditTitle(page: Page, titleData: FakerTitle): Promise<string>;
}
