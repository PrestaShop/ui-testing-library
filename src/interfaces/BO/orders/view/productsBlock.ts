import {BOBasePagePageInterface} from '@interfaces/BO';

import type {Frame, Page} from '@playwright/test';

import {ProductDiscount} from '@data/types/product';

export interface BOProductBlockPageInterface extends BOBasePagePageInterface {
    addPartialRefundProduct(page: Page, productRow: number, quantity: number, amount: number, shipping: number): Promise<string>
    getProductsNumber(page: Frame | Page): Promise<number>;
    getProductNameFromTable(page: Page, row: number): Promise<string>;
    modifyProductQuantity(page: Page, row: number, quantity: number): Promise<number>;
    modifyProductPrice(page: Page, row: number, price: number): Promise<void>;
    modifyProductPriceForMultiInvoice(page: Page, row: number, price: number): Promise<void>;
    deleteProduct(page: Page, row: number): Promise<string | null>;
    getOrderTotalPrice(page: Page): Promise<number>;
    getOrderWrappingTotal(page: Page): Promise<number>;
    getOrderTotalProducts(page: Page): Promise<number>;
    getOrderTotalDiscounts(page: Page): Promise<number>;
    getOrderTotalShipping(page: Page): Promise<number>
    selectInvoice(page: Page, invoice: string): Promise<void>;
    getInvoicesFromSelectOptions(page: Page): Promise<string>;
    getNewInvoiceCarrierName(page: Page): Promise<string>;
    isFreeShippingSelected(page: Page): Promise<boolean>;
    selectFreeShippingCheckbox(page: Page): Promise<void>;
    addQuantity(page: Page, quantity: number): Promise<void>;
    updateProductPrice(page: Page, price: number): Promise<void>;
    addProductToCart(page: Page, quantity: number = 1, createNewInvoice: boolean = false): Promise<string | null>;
    cancelAddProductToCart(page: Page): Promise<void>;
    isAddButtonDisabled(page: Page): Promise<boolean>;
    isAddProductTableRowVisible(page: Page): Promise<boolean>;
    getProductDetails(page: Frame | Page, row: number):Promise<{
        reference: string,
        total: number,
        quantity: number,
        productId: string,
        name: string,
        available: number,
        orderDetailId: string,
        basePrice: number,
    }>;
    isRefundedColumnVisible(page: Page): Promise<boolean>;
    searchProduct(page: Page, name: string): Promise<void>;
    getSearchedProductDetails(page: Page): Promise<{ stockLocation: string, available: number, price: number}>;
    getSearchedProductInformation(page: Page): Promise<{ available: number, price: number}>;
    addDiscount(page: Page, discountData: ProductDiscount): Promise<string>;
    isDiscountListTableVisible(page: Page): Promise<boolean>;
    getTextColumnFromDiscountTable(page: Page, column: string, row: number): Promise<string>;
    deleteDiscount(page: Page, row: number): Promise<string>;
    getPaginationLabel(page: Page): Promise<string>;
    paginationNext(page: Page): Promise<string>;
    paginationPrevious(page: Page): Promise<string>;
    selectPaginationLimit(page: Page, number: number): Promise<boolean>;
    setReturnedProductQuantity(page: Page, row: number, quantity: number): Promise<void>;
    checkReturnedQuantity(page: Page, row: number): Promise<void>;
    checkGenerateVoucher(page: Page, toEnable: boolean): Promise<void>;
    clickOnReturnProducts(page: Page): Promise<string>;
}
