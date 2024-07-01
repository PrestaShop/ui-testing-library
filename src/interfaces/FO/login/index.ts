import type FakerCustomer from '@data/faker/customer';
import {FOBasePagePageInterface} from '@interfaces/FO';
import type {Page} from '@playwright/test';

export interface FoLoginPageInterface extends FOBasePagePageInterface {
    readonly disabledAccountErrorText: string;
    readonly loginErrorText: string;
    readonly pageTitle: string;

    customerLogin(page: Page, customer: FakerCustomer, waitForNavigation?: boolean): Promise<void>;
    getLoginError(page: Page): Promise<string>;
    getPasswordType(page: Page): Promise<string>;
    goToCreateAccountPage(page: Page): Promise<void>;
    goToPasswordReminderPage(page: Page): Promise<void>;
    showPassword(page: Page): Promise<string>;
}
