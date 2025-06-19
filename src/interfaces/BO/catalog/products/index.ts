import {BOBasePagePageInterface} from '@interfaces/BO';

import type {Page} from '@playwright/test';

import {ProductFilterMinMax} from '@data/types/product';
import type FakerProduct from '@data/faker/product';

export interface BOProductsPageInterface extends BOBasePagePageInterface {
     readonly alertDangerIDFilterValue: string;
     readonly alertDangerPriceFilterValue: string;
     readonly alertDangerQuantityFilterValue: string;
     readonly modalCreateProduct: string;
     readonly modalDialog: string;
     readonly packOfProductsDescription: string;
     readonly pageTitle: string;
     readonly productWithCombinationsDescription: string;
     readonly standardProductDescription: string;
     readonly virtualProductDescription: string;

    bulkActionsProduct(page: Page, action: string): Promise<string>;
    bulkSelectProducts(page: Page, products?: FakerProduct[]): Promise<boolean>
    clickOnAddNewProduct(page: Page): Promise<void>;
    clickOnBulkActionsProducts(page: Page, action: string): Promise<string>;
    clickOnCancelDialogButton(page: Page): Promise<boolean>;
    clickOnClearFilterLink(page: Page): Promise<void>;
    clickOnConfirmDialogButton(page: Page): Promise<string>;
    clickOnDeleteProductButton(page: Page, row?: number): Promise<boolean>;
    clickOnDeleteProductFromStoreButton(page: Page, row: number): Promise<boolean>;
    clickOnDuplicateProductButton(page: Page, row?: number): Promise<boolean>;
    clickOnNewProductButton(page: Page): Promise<boolean>;
    clickOnPreviewProductButton(page: Page, row?: number): Promise<Page>;
    closeBulkActionsProgressModal(page: Page, action: string): Promise<boolean>;
    closeNewProductModal(page: Page): Promise<boolean>;
    filterProducts(page: Page, filterBy: string, value: string|ProductFilterMinMax, filterType?: string): Promise<void>;
    filterProductsByCategory(page: Page, categoryName: string): Promise<void>;
    filterProductsByID(page: Page, idMin: number, idMax: number): Promise<void>;
    filterProductsByPrice(page: Page, priceMin: number, priceMax: number): Promise<void>;
    filterProductsByQuantity(page: Page, quantityMin: number, quantityMax: number): Promise<void>;
    getAlertDangerBlockContent(page: Page): Promise<string>;
    getAllRowsColumnContent(page: Page, column: number): Promise<string[]>;
    getFilterByCategoryButtonName(page: Page): Promise<string>;
    getNumberOfProductsFromHeader(page: Page): Promise<number>;
    getNumberOfProductsFromList(page: Page): Promise<number>;
    getPaginationLabel(page: Page): Promise<string>;
    getProductDescription(page: Page): Promise<string>;
    getProductPriceFromList(page: Page, row: number, withTaxes: boolean): Promise<number>;
    getProductShopsId(page: Page, row: number): Promise<number[]>;
    getProductStatusFromList(page: Page, row: number): Promise<boolean>;
    getTextColumn(page: Page, columnName: string, row: number): Promise<string|number|boolean>;
    getTextColumnFromTable(page: Page, row: number, column: number): Promise<string>;
    getTextForEmptyTable(page: Page): Promise<string>;
    goToProductPage(page: Page, row?: number): Promise<void>;
    hasProductType(page: Page, productType: string): Promise<boolean>;
    isClearFilterLinkVisible(page: Page): Promise<boolean>;
    isNewProductModalVisibleInFrame(page: Page): Promise<boolean>;
    isPositionColumnVisible(page: Page): Promise<boolean>;
    isProductPageV2(page:Page):Promise<boolean>;
    isResetButtonVisible(page: Page): Promise<boolean>;
    isRowChecked(page: Page, row: number): Promise<boolean>;
    paginationNext(page: Page): Promise<string>;
    paginationPrevious(page: Page): Promise<string>;
    resetAndGetNumberOfLines(page: Page): Promise<number>;
    resetFilter(page: Page): Promise<void>;
    resetFilterCategory(page: Page): Promise<void>;
    selectPaginationLimit(page: Page, number: number): Promise<string>;
    selectProductType(page: Page, productType: string): Promise<void>;
    setPaginationPage(page: Page, number: number): Promise<string>;
    sortTable(page: Page, sortBy: string, sortDirection: string): Promise<void>;
}
