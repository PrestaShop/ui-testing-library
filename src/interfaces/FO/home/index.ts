import {FOBasePagePageInterface} from '@interfaces/FO';
import type {Page} from '@playwright/test';

export interface FoHomePageInterface extends FOBasePagePageInterface {
    goToAllProductsPage(page: Page): Promise<void>;
    isHomePage(page: Page): Promise<boolean>;
}
