import {BOBasePagePageInterface} from '@interfaces/BO';

import type {Page} from '@playwright/test';

export interface BOPerformancePageInterface extends BOBasePagePageInterface {
    readonly clearCacheSuccessMessage: string;
    readonly pageTitle: string;
    readonly successUpdateMessage: string;

    clearCache(page: Page): Promise<string>;
    isDebugModeToggleVisible(page: Page): Promise<boolean>;
    setDebugMode(page: Page, toEnable: boolean): Promise<string>;
}
