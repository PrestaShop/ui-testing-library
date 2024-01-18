import { BOBasePagePageInterface } from "@interfaces/BO";

import type {Page} from '@playwright/test';


export interface LoginPageInterface extends BOBasePagePageInterface {
    readonly pageTitle: string;

    successLogin(page: Page, email: string, password: string): Promise<void>;
}
