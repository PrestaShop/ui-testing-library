import {FOBasePagePageInterface} from '@interfaces/FO';
import type {Page} from '@playwright/test';

export interface FoHomePageInterface extends FOBasePagePageInterface {
    addProductToCartByQuickView(page: Page, id: number, quantityWanted?: number): Promise<string>;
    goToAllProductsPage(page: Page): Promise<void>;
    isHomePage(page: Page): Promise<boolean>;
    proceedToCheckout(page: Page): Promise<void>;
}
