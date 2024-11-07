import {BOBasePagePageInterface} from '@interfaces/BO';

import type {Page} from '@playwright/test';

import FakerProduct from '@data/faker/product';
import type {ProductPricingCatalogPriceRule, ProductPricingSummary, ProductSpecificPrice} from '@data/types/product';

export interface BOProductsCreateTabPricingPageInterface extends BOBasePagePageInterface {
    addEcoTax(page: Page, ecoTax: number): Promise<void>
    clickOnAddSpecificPriceButton(page: Page): Promise<void>;
    clickOnEditSpecificPriceIcon(page: Page, row: number): Promise<void>;
    clickOnHideCatalogPriceRulesButton(page: Page): Promise<boolean>;
    clickOnManageCatalogPriceRuleLink(page: Page): Promise<Page>
    clickOnShowCatalogPriceRuleButton(page: Page): Promise<void>;
    deleteSpecificPrice(page: Page, row: number): Promise<string|null>;
    getCatalogPriceRuleData(page: Page, row: number) :Promise<ProductPricingCatalogPriceRule>
    getSummary(page: Page): Promise<ProductPricingSummary>;
    getUnitPriceValue(page: Page): Promise<string>;
    getValue(page: Page, inputName: string): Promise<string>
    setCostPrice(page: Page, costPrice: number): Promise<void>;
    setDisplayOnSaleFlag(page: Page): Promise<void>;
    setDisplayRetailPricePerUnit(page: Page, toEnable: true): Promise<void>;
    setProductPricing(page: Page, productData: FakerProduct): Promise<void>;
    setRetailPrice(page: Page, isTaxExcluded: boolean, price: number): Promise<void>;
    setRetailPricePerUnit(page: Page, isTaxExcluded: boolean, price: number, unit: string): Promise<void>;
    setSpecificPrice(page: Page, specificPriceData: ProductSpecificPrice): Promise<string|null>;
    setTaxRule(page: Page, taxRule: string): Promise<void>;
}
