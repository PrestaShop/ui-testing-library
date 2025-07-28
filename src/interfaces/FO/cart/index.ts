import {FOBasePagePageInterface} from '@interfaces/FO';
import type {ProductAttribute, ProductDetailsWithDiscount} from '@data/types/product';
import type {Page} from '@playwright/test';

export interface FoCartPageInterface extends FOBasePagePageInterface {
    readonly alertChooseDeliveryAddressWarningText: string;
    readonly cartRuleAlertMessageText: string;
    readonly cartRuleAlreadyInYourCartErrorText: string;
    readonly cartRuleAlreadyUsedErrorText: string;
    readonly cartRuleCannotUseVoucherAlertMessageText: string;
    readonly cartRuleChooseCarrierAlertMessageText: string;
    readonly cartRuleLimitUsageErrorText: string;
    readonly cartRuleMustEnterVoucherErrorText: string;
    readonly cartRuleNotExistingErrorText: string;
    readonly errorNotificationForProductQuantity: string;
    readonly minimumAmountErrorMessage: string;
    readonly noItemsInYourCartMessage: string;
    readonly pageTitle: string;

    addPromoCode(page: Page, code: string, clickOnPromoCodeLink?: boolean): Promise<void>;
    clickOnProceedToCheckout(page: Page): Promise<void>;
    clickOnProductCustomization(page: Page, row?: number): Promise<boolean>;
    clickOnPromoCode(page: Page): Promise<void>;
    closeProductCustomizationModal(page: Page, row?: number): Promise<boolean>
    deleteProduct(page: Page, productID: number): Promise<void>;
    editProductQuantity(page: Page, productID: number, quantity: number | string): Promise<void>;
    getATIPrice(page: Page): Promise<number>;
    getAlertWarning(page: Page): Promise<string>;
    getAlertWarningForPromoCode(page: Page): Promise<string>;
    getCartRuleErrorMessage(page: Page): Promise<string>;
    getCartRuleName(page: Page, line?: number): Promise<string>;
    getCartRuleValue(page: Page, line?: number): Promise<string>;
    getHighlightPromoCode(page: Page): Promise<string>;
    getNoItemsInYourCartMessage(page: Page): Promise<string>;
    getNotificationMessage(page: Page): Promise<string>;
    getProductAttributes(page: Page, row: number): Promise<ProductAttribute[]>;
    getProductCustomizationModal(page: Page, row?: number): Promise<string>;
    getProductDetail(page: Page, row: number): Promise<ProductDetailsWithDiscount>;
    getProductName(page: Page, row: number): Promise<string>;
    getProductPrice(page: Page, row: number): Promise<number>;
    getProductQuantity(page: Page, row: number): Promise<number>;
    getProductsNumber(page: Page): Promise<number>;
    getSubtotalDiscountValue(page: Page): Promise<number>;
    getSubtotalProductsValue(page: Page): Promise<number>;
    getSubtotalShippingValue(page: Page): Promise<string>;
    hasSubtotalDiscount(page: Page): Promise<boolean>;
    isAlertWarningForMinimumPurchaseVisible(page: Page): Promise<boolean>;
    isCartRuleNameVisible(page: Page, line?: number): Promise<boolean>;
    isProceedToCheckoutButtonDisabled(page: Page): Promise<boolean>;
    removeVoucher(page: Page, line?: number): Promise<boolean>;
    setProductQuantity(page: Page, productRow?: number, quantity?: number): Promise<number>;
}

//@todo : Move methods in FoCartPageInterface
export interface FoCartHummingbirdPageInterface extends FoCartPageInterface {
    setQuantity(page: Page, productID: number, quantity: number | string): Promise<void>
}
