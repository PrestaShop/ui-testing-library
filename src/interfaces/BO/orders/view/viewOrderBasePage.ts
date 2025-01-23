import {BOBasePagePageInterface} from '@interfaces/BO';

import type {Page} from '@playwright/test';

export interface BOViewOrderBasePageInterface extends BOBasePagePageInterface {
    readonly commentSuccessfullMessage: string;
    readonly discountCannotExceedTotalErrorMessage: string;
    readonly discountMustBeNumberErrorMessage: string;
    readonly errorAddSameProduct: string;
    readonly errorAddSameProductInInvoice: (invoice: string) => string;
    readonly errorAssignSameStatus: string;
    readonly errorMinimumQuantityMessage: string;
    readonly invalidPercentValueErrorMessage: string;
    readonly noAvailableDocumentsMessage: string;
    readonly pageTitle: string;
    readonly partialRefundValidationMessage: string;
    readonly percentValueNotPositiveErrorMessage: string;
    readonly successfulAddProductMessage: string;
    readonly successfulDeleteProductMessage: string;
    readonly updateSuccessfullMessage: string;
    readonly validationSendMessage: string;

    clickOnPartialRefund(page: Page): Promise<void>;
    clickOnReturnProductsButton(page: Page): Promise<void>;
    doesStatusExist(page: Page, statusName: string): Promise<boolean>;
    getOrderID(page: Page): Promise<number>;
    getOrderReference(page: Page): Promise<string>;
    getOrderStatus(page: Page): Promise<string>;
    getOrderStatusID(page: Page): Promise<number>;
    isDeliverySlipButtonVisible(page: Page): Promise<boolean>;
    isPartialRefundButtonVisible(page: Page): Promise<boolean>;
    isReturnProductsButtonDisabled(page: Page): Promise<boolean>;
    isReturnProductsButtonVisible(page: Page): Promise<boolean>;
    isUpdateStatusButtonDisabled(page: Page): Promise<boolean>;
    isViewInvoiceButtonVisible(page: Page): Promise<boolean>;
    modifyOrderStatus(page: Page, status: string): Promise<string>;
    selectOrderStatus(page: Page, status: string): Promise<void>;
    viewDeliverySlip(page: Page): Promise<string | null>;
    viewInvoice(page: Page): Promise<string | null>;
}
