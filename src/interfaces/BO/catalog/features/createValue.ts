import type FakerFeatureValue from '@data/faker/featureValue';
import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOFeaturesValueCreatePageInterface extends BOBasePagePageInterface {
  readonly createPageTitle: string;
  readonly editPageTitle: string;

  addEditValue(page: Page, valueData: FakerFeatureValue, saveAndStay?: boolean): Promise<string | void>;
}
