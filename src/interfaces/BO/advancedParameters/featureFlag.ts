import {type BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOFeatureFlagInterface extends BOBasePagePageInterface {
  readonly featureFlagAdminAPI: string;
  readonly pageTitle: string;

  setFeatureFlag(page: Page, featureFlag: string, toEnable?: boolean): Promise<string>;
}
