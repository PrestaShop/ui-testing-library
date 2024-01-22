import type CustomerData from '@data/faker/customer';
import {FOBasePagePageInterface} from '@interfaces/FO';
import type {Page} from '@playwright/test';

export interface FoLoginPageInterface extends FOBasePagePageInterface {
    readonly pageTitle: string;

    customerLogin(page: Page, customer: CustomerData, waitForNavigation?: boolean): Promise<void>;
}
