import {BOBasePagePageInterface} from '@interfaces/BO';

import type {Page} from '@playwright/test';

import type FakerProduct from '@data/faker/product';
import type {ProductHeaderSummary} from '@data/types/product';

export interface BOProductsCreatePageInterface extends BOBasePagePageInterface {
    readonly errorMessage: string;
    readonly errorMessageWhenSummaryTooLong: (number: number) => string;
    readonly pageTitle: string;
    readonly saveAndPublishButtonName: string;
    saveProductButton: string;
    readonly successfulDuplicateMessage: string;

    applyChangesToAllStores(page: Page, status: boolean): Promise<void>;
    changeProductType(page: Page, productType: string): Promise<string>;
    chooseProductType(page: Page, productType: string): Promise<void>;
    clickOnNewProductButton(page: Page): Promise<boolean>;
    clickOnSaveProductButton(page: Page): Promise<void>;
    deleteProduct(page: Page): Promise<string>;
    duplicateProduct(page: Page): Promise<string>;
    getErrorMessageWhenSummaryIsTooLong(page: Page): Promise<string>;
    getProductHeaderSummary(page: Page): Promise<ProductHeaderSummary>;
    getProductID(page: Page): Promise<number>;
    getProductName(page: Page, locale: string): Promise<string>;
    getProductStatus(page: Page): Promise<boolean>;
    getProductType(page: Page): Promise<string>;
    getSaveButtonName(page: Page): Promise<string>;
    goToCatalogPage(page: Page): Promise<void>;
    goToTab(page: Page, tabName: string): Promise<void>;
    isChooseProductIframeVisible(page: Page): Promise<boolean>;
    isTabActive(page: Page, tabName: string): Promise<boolean>;
    isTabVisible(page: Page, tabName: string): Promise<boolean>;
    previewProduct(page: Page): Promise<Page>;
    saveProduct(page: Page): Promise<string|null>;
    selectStores(page: Page, storeID: number): Promise<void>;
    setProduct(page: Page, productData: FakerProduct): Promise<string|null>;
    setProductName(page: Page, name: string, locale?: string): Promise<void>;
    setProductStatus(page: Page, status: boolean): Promise<boolean>;
}
