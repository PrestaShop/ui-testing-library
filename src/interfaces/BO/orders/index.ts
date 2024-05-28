import {BOBasePagePageInterface} from '@interfaces/BO';

import type {Page} from '@playwright/test';
import type FakerOrderStatus from '@data/faker/orderStatus';

export interface BOOrdersPageInterface extends BOBasePagePageInterface {
    readonly pageTitle: string;

    bulkOpenInNewTabs(page:Page, isAllOrders:boolean, row:number[]):Promise<Page>;
    bulkUpdateOrdersStatus(page:Page, status:string, isAllOrders:boolean, rows:number[]):Promise<string>;
    clickOnBulkActionsButton(page:Page):Promise<void>;
    clickOnMoreLink(page: Page, row: number): Promise<void>;
    downloadDeliverySlip(page:Page, row:number):Promise<string|null>;
    downloadInvoice(page:Page, row:number):Promise<string|null>;
    exportDataToCsv(page:Page):Promise<string | null>;
    filterOrders(page: Page, filterType: string, filterBy: string, value: string): Promise<void>;
    filterOrdersByDate(page:Page, dateFrom:string, dateTo:string):Promise<void>;
    getAllRowsColumnContent(page:Page, column:string):Promise<string[]>;
    getCustomerEmail(page: Page): Promise<string>;
    getCustomerInvoiceAddressDetails(page: Page): Promise<string>;
    getNumberOfElementInGrid(page:Page):Promise<number>;
    getNumberOfOrdersInPage(page:Page):Promise<number>;
    getOrderATIPrice(page:Page, row:number):Promise<number>;
    getOrderFromTable(page:Page, row:number):Promise<{
        id: number,
        reference: string,
        newClient:string,
        delivery: string,
        customer: string,
        totalPaid: string,
        payment: string,
        status: string,
    }>
    getOrderIDNumber(page:Page, row:number):Promise<number>;
    getOrderInCsvFormat(page:Page, row:number):Promise<string>;
    getPaginationLabel(page: Page): Promise<string>;
    getProductDetailsFromTable(page: Page, row: number): Promise<string>;
    getProductsNumberFromTable(page: Page): Promise<number>;
    getShippingDetails(page: Page): Promise<string>;
    getTextColumn(page: Page, columnName: string, row: number): Promise<string>;
    goToCreateOrderPage(page:Page):Promise<void>;
    goToOrder(page:Page, row:number):Promise<void>;
    openOrderDetails(page: Page): Promise<void>;
    paginationNext(page: Page): Promise<string>;
    paginationPrevious(page: Page): Promise<string>;
    previewOrder(page: Page, row: number): Promise<boolean>;
    resetAndGetNumberOfLines(page:Page):Promise<number>;
    resetFilter(page:Page):Promise<void>;
    selectAllOrders(page:Page):Promise<void>;
    selectOrdersRows(page:Page, rows:number[]):Promise<void>;
    selectPaginationLimit(page: Page, number: number): Promise<string>;
    setOrderStatus(page:Page, row:number, status:FakerOrderStatus):Promise<string>;
    sortTable(page: Page, sortBy: string, sortDirection: string): Promise<void>;
    viewCustomer(page:Page, row:number):Promise<Page>;
}
