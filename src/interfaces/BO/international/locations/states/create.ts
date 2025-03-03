import type FakerState from '@data/faker/state';
import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOStatesCreatePageInterface extends BOBasePagePageInterface {
  readonly pageTitleCreate: string;
  readonly pageTitleEdit: string;

  createEditState(page: Page, stateData: FakerState): Promise<string>;
}
