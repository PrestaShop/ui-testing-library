import {BOBasePagePageInterface} from '@interfaces/BO';

import type {Page} from '@playwright/test';

import type {
  ProductPackInformation,
  ProductPackItem,
  ProductPackOptions,
  ProductStockMovement,
} from '@data/types/product';

export interface BOPackTabPageInterface extends BOBasePagePageInterface {
    addProductToPack(page: Page, product: string, quantity: number): Promise<void>;
    cancelDeleteProductFromPack(page: Page): Promise<void>;
    confirmDeleteProductFromPack(page: Page): Promise<void>;
    deleteProduct(page: Page, productInList: number, toDelete: boolean): Promise<boolean | string>;
    editPackOfProducts(page: Page, packData: ProductPackOptions): Promise<void>;
    editPackStockType(page: Page, packStockType: string): Promise<void>;
    editQuantity(page: Page, quantity: number): Promise<void>;
    getNumberOfProductsInPack(page: Page): Promise<number>;
    getNumberOfSearchedProduct(page: Page): Promise<number>;
    getProductInPackInformation(page: Page, productInList: number): Promise<ProductPackInformation>;
    getStockMovement(page: Page, movementRow: number): Promise<ProductStockMovement>;
    getStockValue(page: Page): Promise<number>;
    isDeleteModalVisible(page: Page): Promise<boolean>;
    saveAndGetProductInPackErrorMessage(page: Page, productInList: number): Promise<string>;
    searchProduct(page: Page, productName: string): Promise<string>;
    selectProductFromList(page: Page, productInSearchList: number): Promise<boolean>;
    setPackOfProducts(page: Page, packData: ProductPackItem[]): Promise<void>;
    setProductQuantity(page: Page, productInList: number, quantity: number|string): Promise<void>;
}
