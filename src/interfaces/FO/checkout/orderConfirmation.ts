import {FOBasePagePageInterface} from '@interfaces/FO';
import type {Page} from '@playwright/test';

export interface FoCheckoutOrderConfirmationPageInterface extends FOBasePagePageInterface {
    readonly orderConfirmationCardTitle: string;
    readonly pageTitle: string;

    getGiftWrappingValue(page: Page): Promise<number>;
    getOrderConfirmationCardTitle(page: Page): Promise<string>;
    getOrderReferenceValue(page: Page): Promise<string>;
    getPaymentMethod(page: Page): Promise<string>;
    goToContactUsPage(page: Page): Promise<void>;
    isFinalSummaryVisible(page: Page): Promise<boolean>;
}
