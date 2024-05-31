import {FOBasePagePageInterface} from '@interfaces/FO';

// Import data
import type {ProductAttribute} from '@data/types/product';
import type {CartProductDetails} from '@data/types/cart';

import type {Page} from '@playwright/test';

export interface FoModalBlockCartPageInterface extends FOBasePagePageInterface {
    getBlockCartModalTitle(page: Page): Promise<string>;
    isBlockCartModalVisible(page: Page): Promise<boolean>;
    getProductDetailsFromBlockCartModal(page: Page): Promise<CartProductDetails>;
    getProductAttributesFromBlockCartModal(page: Page): Promise<ProductAttribute[]>;
    proceedToCheckout(page: Page): Promise<void>;
    continueShopping(page: Page): Promise<boolean>;
    closeBlockCartModal(page: Page, clickOutside?: boolean): Promise<boolean>;
}
