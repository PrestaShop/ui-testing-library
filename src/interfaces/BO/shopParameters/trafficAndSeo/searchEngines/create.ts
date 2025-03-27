import type FakerSearchEngine from '@data/faker/searchEngine';
import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOSearchEnginesCreatePageInterface extends BOBasePagePageInterface {
  readonly pageTitleCreate: string;
  readonly pageTitleEdit: string;

  createEditSearchEngine(page: Page, searchEngineData: FakerSearchEngine): Promise<string>;
}
