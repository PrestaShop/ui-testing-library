import {type BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOFeatureFlagInterface extends BOBasePagePageInterface {
  readonly featureFlagAdminAPI: string;
  readonly featureFlagAdminAPIMultistore: string;
  readonly featureFlagImprovedShipment: string;
  readonly featureFlagProductPageV2: string;
  readonly pageTitle: string;

  setFeatureFlag(page: Page, featureFlag: string, toEnable?: boolean): Promise<string>;
}
