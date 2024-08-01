import type FakerProduct from '@data/faker/product';
import {BOBasePagePageInterface} from '@interfaces/BO';
import type {Page} from '@playwright/test';

export interface BOProductsCreateTabVirtualProductPageInterface extends BOBasePagePageInterface {
    clickOnEditDefaultBehaviourLink(page: Page): Promise<Page>;
    getErrorMessageInDownloadFileInput(page: Page): Promise<string>;
    setLabelWhenInStock(page: Page, label: string): Promise<void>;
    setLabelWhenOutOfStock(page: Page, label: string): Promise<void>;
    setOptionWhenOutOfStock(page: Page, option: string): Promise<void>;
    setProductQuantity(page: Page, quantity: number): Promise<void>;
    setVirtualProduct(page: Page, productData: FakerProduct): Promise<void>;
}
