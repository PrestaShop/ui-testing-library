import {BOBasePagePageInterface} from '@interfaces/BO';

import type {Page} from '@playwright/test';

export interface BOViewOrderBasePageInterface extends BOBasePagePageInterface {
    readonly pageTitle: string;

    getOrderID(page: Page): Promise<number>;
    getOrderReference(page: Page): Promise<string>;
    doesStatusExist(page: Page, statusName: string): Promise<boolean>;
    isUpdateStatusButtonDisabled(page: Page): Promise<boolean>;
    selectOrderStatus(page: Page, status: string): Promise<void>;
    getOrderStatus(page: Page): Promise<string>;
    getOrderStatusID(page: Page): Promise<number>;
    modifyOrderStatus(page: Page, status: string): Promise<string>;
    isViewInvoiceButtonVisible(page: Page): Promise<boolean>;
    viewInvoice(page: Page): Promise<string | null>;
    isPartialRefundButtonVisible(page: Page): Promise<boolean>;
    clickOnPartialRefund(page: Page): Promise<void>;
    isDeliverySlipButtonVisible(page: Page): Promise<boolean>;
    viewDeliverySlip(page: Page): Promise<string | null>;
    isReturnProductsButtonVisible(page: Page): Promise<boolean>;
    isReturnProductsButtonDisabled(page: Page): Promise<boolean>;
    clickOnReturnProductsButton(page: Page): Promise<void>;
}
