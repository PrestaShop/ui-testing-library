import type {Page} from '@playwright/test';

export interface LoginPageInterface {
    readonly pageTitle: string;

    successLogin(page: Page, email: string, password: string): Promise<void>;
}
