import {FOBasePagePageInterface} from '@interfaces/FO';
import type {Page} from '@playwright/test';

export interface FoCheckoutOrderConfirmationPageInterface extends FOBasePagePageInterface {
    readonly orderConfirmationCardTitle: string;

    getOrderConfirmationCardTitle(page: Page): Promise<string>;
    getOrderReferenceValue(page: Page): Promise<string>;
}
