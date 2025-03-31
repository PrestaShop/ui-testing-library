import type FakerQuickAccess from '@data/faker/quickAccess';
import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOQuickAccessCreatePageInterface extends BOBasePagePageInterface {
  readonly pageTitle: string;

  setQuickAccessLink(page: Page, quickAccessLinkData: FakerQuickAccess): Promise<string>;
}
