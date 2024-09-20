import {type ProductOrderConfirmation} from '@data/types/product';
import {FOBasePagePageInterface} from '@interfaces/FO';
import type {Page} from '@playwright/test';

export interface FoCheckoutOrderConfirmationPageInterface extends FOBasePagePageInterface {
    readonly orderConfirmationCardTitle: string;
    readonly pageTitle: string;

    clickOnCustomizedButton(page: Page): Promise<boolean>;
    closeModalProductCustomization(page: Page): Promise<boolean>;
    getBlockTitle(page: Page): Promise<string>;
    getGiftWrappingValue(page: Page): Promise<number>;
    getModalProductCustomizationContent(page: Page): Promise<string>;
    getNumberOfProducts(page: Page): Promise<number>;
    getOrderConfirmationCardTitle(page: Page): Promise<string>;
    getOrderDetails(page: Page): Promise<string>;
    getOrderReferenceValue(page: Page): Promise<string>;
    getOrderShippingTotal(page: Page): Promise<string>;
    getOrderSubTotal(page: Page): Promise<string>;
    getOrderTotal(page: Page): Promise<string>;
    getPaymentInformation(page: Page): Promise<string>;
    getPaymentMethod(page: Page): Promise<string>;
    getProductsBlockNumber(page: Page): Promise<number>;
    getProductDetailsInRow(page: Page, row: number): Promise<ProductOrderConfirmation>;
    getShippingMethod(page: Page): Promise<string>;
    goToAllProductsPage(page: Page): Promise<void>;
    goToContactUsPage(page: Page): Promise<void>;
    isFinalSummaryVisible(page: Page): Promise<boolean>;
    quickViewProduct(page: Page, row: number): Promise<void>;
}
