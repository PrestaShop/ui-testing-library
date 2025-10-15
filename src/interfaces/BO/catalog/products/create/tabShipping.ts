import {BOBasePagePageInterface} from '@interfaces/BO';

import type {Page} from '@playwright/test';

import type FakerProduct from '@data/faker/product';

export interface BOProductsCreateTabShippingPageInterface extends BOBasePagePageInterface {
    clickOnEditDeliveryTimeLink(page: Page): Promise<Page>;
    clearChoiceCarrier(page: Page): Promise<void>;
    getValue(page: Page, inputName: string, languageId?: string): Promise<string>;
    selectAvailableCarrier(page: Page, carrierRow: number): Promise<void>;
    setAdditionalShippingCosts(page: Page, shippingCosts: number): Promise<void>;
    setDeliveryTime(page: Page, deliveryTime: string): Promise<void>;
    setDeliveryTimeInStockProducts(page: Page, numberOfDays: string): Promise<void>;
    setDeliveryTimeOutOfStockProducts(page: Page, numberOfDays: string): Promise<void>;
    setPackageDimension(page: Page, productData: FakerProduct): Promise<void>;
}
