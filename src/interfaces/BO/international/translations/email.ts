import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOTranslationsEmailPageInterface extends BOBasePagePageInterface {
  readonly pageTitle: (locale: string) => string;

  searchTranslation(page: Page, expression: string): Promise<void>;
}
