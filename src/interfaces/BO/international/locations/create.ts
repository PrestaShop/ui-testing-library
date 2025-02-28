import type FakerZone from '@data/faker/zone';
import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOZonesCreatePageInterface extends BOBasePagePageInterface {
  readonly pageTitleCreate: string;
  readonly pageTitleEdit: string;

  createEditZone(page: Page, zoneData: FakerZone): Promise<string>;
}
