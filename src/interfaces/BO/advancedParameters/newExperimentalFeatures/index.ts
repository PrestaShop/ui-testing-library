import {BOBasePagePageInterface} from '@interfaces/BO';

import type {Page} from '@playwright/test';

export interface BONewExperimentalFeatures extends BOBasePagePageInterface {
     readonly pageTitle: string;
     readonly featureFlagProductPageV2: string;
     readonly featureFlagAdminAPI: string;
     readonly featureFlagAdminAPIMultistore: string;

    setFeatureFlag(page: Page, featureFlag: string, toEnable?: boolean): Promise<string>
}
