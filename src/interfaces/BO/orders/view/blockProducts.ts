import {type ProductDiscount} from '@data/types/product';
import {BOViewOrderBasePageInterface} from '@interfaces/BO/orders/view/viewOrderBasePage';
import {type Frame, type Page} from '@playwright/test';

export interface BOProductBlockProductsPageInterface extends BOViewOrderBasePageInterface {
    addDiscount(page: Page, discountData: ProductDiscount): Promise<string>;
    addPartialRefundProduct(
        page: Page,
        productRow: number,
        quantity?: number,
        amount?: number,
        shipping?: number,
    ): Promise<string>
    addProductToCart(page: Page, quantity?: number, createNewInvoice?: boolean): Promise<string | null>;
    addQuantity(page: Page, quantity: number): Promise<void>;
    cancelAddProductToCart(page: Page): Promise<void>;
    checkGenerateVoucher(page: Page, toEnable: boolean): Promise<void>;
    checkReturnedQuantity(page: Page, row?: number): Promise<void>;
    clickOnReturnProducts(page: Page): Promise<string>;
    deleteDiscount(page: Page, row?: number): Promise<string>;
    deleteProduct(page: Page, row: number): Promise<string | null>;
    getInvoicesFromSelectOptions(page: Page): Promise<string>;
    getNewInvoiceCarrierName(page: Page): Promise<string>;
    getOrderTotalDiscounts(page: Page): Promise<number>;
    getOrderTotalPrice(page: Page): Promise<number>;
    getOrderTotalProducts(page: Page): Promise<number>;
    getOrderTotalShipping(page: Page): Promise<number>
    getOrderWrappingTotal(page: Page): Promise<number>;
    getPaginationLabel(page: Page): Promise<string>;
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
    getProductNameFromTable(page: Page, row: number): Promise<string>;
    getProductsNumber(page: Frame | Page): Promise<number>;
    getSearchedProductDetails(page: Page): Promise<{ stockLocation: string, available: number, price: number}>;
    getSearchedProductInformation(page: Page): Promise<{ available: number, price: number}>;
    getTextColumnFromDiscountTable(page: Page, column: string, row?: number): Promise<string>;
    isAddButtonDisabled(page: Page): Promise<boolean>;
    isAddProductTableRowVisible(page: Page): Promise<boolean>;
    isDiscountListTableVisible(page: Page): Promise<boolean>;
    isFreeShippingSelected(page: Page): Promise<boolean>;
    isRefundedColumnVisible(page: Page): Promise<boolean>;
    modifyProductPrice(page: Page, row: number, price: number): Promise<void>;
    modifyProductPriceForMultiInvoice(page: Page, row: number, price: number): Promise<void>;
    modifyProductQuantity(page: Page, row: number, quantity: number): Promise<number>;
    paginationNext(page: Page): Promise<string>;
    paginationPrevious(page: Page): Promise<string>;
    searchProduct(page: Page, name: string): Promise<void>;
    selectFreeShippingCheckbox(page: Page): Promise<void>;
    selectInvoice(page: Page, invoice?: string): Promise<void>;
    selectPaginationLimit(page: Page, number: number): Promise<boolean>;
    setReturnedProductQuantity(page: Page, row: number, quantity: number): Promise<void>;
    updateProductPrice(page: Page, price: number): Promise<void>;
}
