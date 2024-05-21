import {BOBasePagePageInterface} from '@interfaces/BO';

import type {Page} from '@playwright/test';

export interface BOViewOrderBasePageInterface extends BOBasePagePageInterface {
    readonly pageTitle: string;

    modifyOrderStatus(page: Page, status: string): Promise<string>;
}