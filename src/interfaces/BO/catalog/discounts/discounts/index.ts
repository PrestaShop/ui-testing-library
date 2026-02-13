import {BOBasePagePageInterface} from '@interfaces/BO';
import type {Page} from '@playwright/test';

export interface BODiscountsPageInterface extends BOBasePagePageInterface {
    readonly pageTitle: string;

    addNewDiscountByType(page: Page, discountType: string): Promise<void>;
}
