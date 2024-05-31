import {FOBasePagePageInterface} from '@interfaces/FO';
import type {ProductAttribute, ProductDetailsWithDiscount} from '@data/types/product';
import type {Page} from '@playwright/test';

export interface FoCartPageInterface extends FOBasePagePageInterface {
    readonly alertChooseDeliveryAddressWarningText: string;
    readonly cartRuleAlertMessageText: string;
    readonly cartRuleAlreadyInYourCartErrorText: string;
    readonly cartRuleAlreadyUsedErrorText: string;
    readonly cartRuleLimitUsageErrorText: string;
    readonly cartRuleMustEnterVoucherErrorText: string;
    readonly cartRuleNotExistingErrorText: string;
    readonly noItemsInYourCartMessage: string;
    readonly pageTitle: string;

    addPromoCode(page: Page, code: string, clickOnPromoCodeLink?: boolean): Promise<void>;
    clickOnProceedToCheckout(page: Page): Promise<void>;
    clickOnPromoCode(page: Page): Promise<void>;
    deleteProduct(page: Page, productID: number): Promise<void>;
    editProductQuantity(page: Page, productID: number, quantity: number | string): Promise<void>;
    getATIPrice(page: Page): Promise<number>;
    getAlertWarning(page: Page): Promise<string>;
    getAlertWarningForPromoCode(page: Page): Promise<string>;
    getCartRuleErrorMessage(page: Page): Promise<string>;
    getCartRuleName(page: Page, line?: number): Promise<string>;
    getDiscountValue(page: Page, line?: number): Promise<number>;
    getHighlightPromoCode(page: Page): Promise<string>;
    getNoItemsInYourCartMessage(page: Page): Promise<string>;
    getNotificationMessage(page: Page): Promise<string>;
    getProductAttributes(page: Page, row: number): Promise<ProductAttribute[]>;
    getProductDetail(page: Page, row: number): Promise<ProductDetailsWithDiscount>;
    getProductsNumber(page: Page): Promise<number>;
    getSubtotalDiscountValue(page: Page): Promise<number>;
    isAlertWarningForMinimumPurchaseVisible(page: Page): Promise<boolean>;
    isCartRuleNameVisible(page: Page, line?: number): Promise<boolean>;
    isProceedToCheckoutButtonDisabled(page: Page): Promise<boolean>;
    removeVoucher(page: Page, line?: number): Promise<void>;
    setProductQuantity(page: Page, productRow?: number, quantity?: number): Promise<number>;
}
