import {BOBasePagePageInterface} from '@interfaces/BO';

import type {Page} from '@playwright/test';
import type FakerLanguage from '@data/faker/language';

export interface BOLanguagesCreatePageInterface extends BOBasePagePageInterface {
  readonly pageEditTitle: string;
  readonly pageTitle: string;

  createEditLanguage(page: Page, languageData: FakerLanguage): Promise<string>;
  isRTL(page: Page): Promise<boolean>;
}
