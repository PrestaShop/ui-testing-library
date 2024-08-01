import type FakerProduct from '@data/faker/product';
import type {ProductStockMovement} from '@data/types/product';
import {BOBasePagePageInterface} from '@interfaces/BO';
import type {Page} from '@playwright/test';

export interface BOProductsCreateTabStocksPageInterface extends BOBasePagePageInterface {
    clickViewAllStockMovements(page: Page): Promise<Page>;
    getProductQuantity(page: Page): Promise<number>;
    getStockMovement(page: Page, movementRow: number): Promise<ProductStockMovement>;
    getValue(page: Page, inputName: string, languageId?: string): Promise<string>;
    isQuantityInputVisible(page: Page): Promise<boolean>;
    setAvailabilityDate(page: Page, date: string): Promise<void>;
    setLabelWhenInStock(page: Page, label: string): Promise<void>;
    setLabelWhenOutOfStock(page: Page, label: string): Promise<void>;
    setLowStockAlertByEmail(page: Page, statusAlert: boolean, thresholdValue: number): Promise<void>;
    setMinimalQuantity(page: Page, minimalQuantiy: number): Promise<void>;
    setOptionWhenOutOfStock(page: Page, option: string): Promise<void>;
    setProductQuantity(page: Page, quantity: number): Promise<void>;
    setProductStock(page: Page, productData: FakerProduct): Promise<void>;
    setQuantityDelta(page: Page, quantity: number): Promise<void>;
    setStockLocation(page: Page, stockLocation: string): Promise<void>;
}
