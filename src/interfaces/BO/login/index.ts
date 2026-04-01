import {BOBasePagePageInterface} from '@interfaces/BO';

import type {Page} from '@playwright/test';

export interface LoginPageInterface extends BOBasePagePageInterface {
    readonly pageTitle: string;
    readonly loginErrorText: string;
    readonly resetPasswordSuccessText: string;

    clickOnAllRightsReservedLink(page:Page): Promise<Page>;
    clickOnBackToShopNameLink(page:Page): Promise<void>;
    clickOnFacebookLink(page:Page): Promise<Page>;
    clickOnGithubLink(page:Page): Promise<Page>;
    clickOnTwitterLink(page:Page): Promise<Page>;
    failedLogin(page: Page, email: string, password: string): Promise<void>;
    getLoginError(page: Page): Promise<string>;
    getResetPasswordSuccessMessage(page: Page): Promise<string>;
    sendResetPasswordLink(page: Page, email: string): Promise<void>;
    successLogin(page: Page, email: string, password: string, closeWelcome?: boolean): Promise<void>;
}
