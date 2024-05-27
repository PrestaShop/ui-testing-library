import {BOBasePagePageInterface} from '@interfaces/BO';

import type {Page} from '@playwright/test';

import type ProductData from '@data/faker/product';

export interface BOVirtualProductTabPageInterface extends BOBasePagePageInterface {
    clickOnEditDefaultBehaviourLink(page: Page): Promise<Page>;
    getErrorMessageInDownloadFileInput(page: Page): Promise<string>;
    setLabelWhenInStock(page: Page, label: string): Promise<void>;
    setLabelWhenOutOfStock(page: Page, label: string): Promise<void>;
    setOptionWhenOutOfStock(page: Page, option: string): Promise<void>;
    setProductQuantity(page: Page, quantity: number): Promise<void>;
    setVirtualProduct(page: Page, productData: ProductData): Promise<void>;
}
