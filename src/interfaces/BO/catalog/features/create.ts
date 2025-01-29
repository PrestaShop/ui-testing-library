import type FakerFeature from '@data/faker/feature';
import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOFeaturesCreatePageInterface extends BOBasePagePageInterface {
  readonly createPageTitle: string;

  setFeature(page: Page, featureData: FakerFeature): Promise<string>;
}
