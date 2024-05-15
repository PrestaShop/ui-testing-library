import {FOBasePagePageInterface} from '@interfaces/FO';
import type {Page} from '@playwright/test';

export interface FoCheckoutPageInterface extends FOBasePagePageInterface {
    personalInformationStepForm: string;
    readonly noCarriersMessage: string;

    choosePaymentAndOrder(page: Page, paymentModuleName: string): Promise<void>;
    clickOnSignIn(page: Page): Promise<void>;
    customerLogin(page: Page, customer: any): Promise<boolean>;
    getAllCarriersNames(page: Page): Promise<(string | null)[]>;
    getCarrierErrorMessage(page: Page): Promise<string|null>;
    goToDeliveryStep(page: Page): Promise<boolean>;
    goToPaymentStep(page: Page): Promise<boolean>;
    isCheckoutPage(page: Page): Promise<boolean>;
    isPaymentMethodExist(page: Page, paymentModuleName: string): Promise<boolean>;
    isStepCompleted(page: Page, stepSelector: string): Promise<boolean>;
}
