import {BOBasePagePageInterface} from '@interfaces/BO';

import type {Page} from '@playwright/test';

export interface BOProductBlockPageInterface extends BOBasePagePageInterface {

    modifyProductQuantity(page: Page, row: number, quantity: number): Promise<number>;
}
