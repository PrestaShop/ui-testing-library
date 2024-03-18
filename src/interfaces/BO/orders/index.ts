import {BOBasePagePageInterface} from '@interfaces/BO';

import type {Page} from '@playwright/test';

export interface BOOrdersPageInterface extends BOBasePagePageInterface {
    readonly pageTitle: string;

    getTextColumn(page: Page, columnName: string, row: number): Promise<string>;
    resetAndGetNumberOfLines(page: Page): Promise<number>;
}
