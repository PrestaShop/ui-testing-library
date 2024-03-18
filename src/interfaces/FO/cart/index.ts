import {FOBasePagePageInterface} from '@interfaces/FO';
import type {Page} from '@playwright/test';

export interface FoCartPageInterface extends FOBasePagePageInterface {
    readonly pageTitle: string;

    clickOnProceedToCheckout(page: Page): Promise<void>;
}
