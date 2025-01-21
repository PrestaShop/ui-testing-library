import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOTeamBasePageInterface extends BOBasePagePageInterface {
  readonly pageTitleEdit: (firstName: string, lastName: string) => string;
  readonly pageTitleEditFr: (firstName: string, lastName: string) => string;

  cancel(page: Page): Promise<void>;
}
