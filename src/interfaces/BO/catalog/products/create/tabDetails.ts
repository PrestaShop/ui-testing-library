import {BOBasePagePageInterface} from '@interfaces/BO';

import type {Page} from '@playwright/test';

import type FakerProduct from '@data/faker/product';
import type {ProductFeatures} from '@data/types/product';

export interface BOProductsCreateTabDetailsPageInterface extends BOBasePagePageInterface {
    readonly featureCustomValueNotDefaultLanguageMessage: string;

    addNewCustomizations(page: Page, productData: FakerProduct): Promise<void>;
    addNewFile(page: Page, productData: FakerProduct): Promise<void>;
    clickOnManageAllFiles(page: Page): Promise<Page>;
    clickonManageFeatures(page: Page): Promise<Page>;
    deleteCustomizations(page: Page, productData: FakerProduct): Promise<void>;
    deleteFeatures(page: Page, productFeatures: ProductFeatures[]): Promise<void>;
    deleteFiles(page: Page, productData: FakerProduct): Promise<void>;
    getErrorMessageInReferencesForm(page: Page, inputNumber: number): Promise<string>;
    getNoFileAttachedMessage(page: Page): Promise<string>;
    getValue(page: Page, inputName: string): Promise<string>;
    searchFile(page: Page, fileName: string): Promise<string>;
    setCondition(page: Page, productData: FakerProduct): Promise<void>;
    setEAN13(page: Page, value: string): Promise<void>;
    setFeature(page: Page, productFeatures: ProductFeatures[]): Promise<void>;
    setISBN(page: Page, value: string): Promise<void>;
    setMPN(page: Page, value: string): Promise<void>;
    setProductDetails(page: Page, productData: FakerProduct): Promise<void>;
    setUPC(page: Page, value: string): Promise<void>;
}
