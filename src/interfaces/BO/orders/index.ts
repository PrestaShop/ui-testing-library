import {BOBasePagePageInterface} from '@interfaces/BO';

import {type Page} from '@playwright/test';
import OrderStatusData from '@data/faker/orderStatus';

export interface BOOrdersPageInterface extends BOBasePagePageInterface {
    readonly pageTitle: string;

    goToCreateOrderPage(page:Page):Promise<void>;
    exportDataToCsv(page:Page):Promise<string | null>;
    filterOrders(page: Page, filterType: string, filterBy: string, value: string): Promise<void>;
    filterOrdersByDate(page:Page, dateFrom:string, dateTo:string):Promise<void>;
    resetFilter(page:Page):Promise<void>;
    resetAndGetNumberOfLines(page:Page):Promise<number>;
    getNumberOfElementInGrid(page:Page):Promise<number>;
    goToOrder(page:Page, row:number):Promise<void>;
    getTextColumn(page: Page, columnName: string, row: number): Promise<string>;
    getOrderIDNumber(page:Page, row:number):Promise<number>;
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
    getNumberOfOrdersInPage(page:Page):Promise<number>;
    getAllRowsColumnContent(page:Page, column:string):Promise<string[]>;
    getOrderInCsvFormat(page:Page, row:number):Promise<string>;
    setOrderStatus(page:Page, row:number, status:OrderStatusData):Promise<string>;
    downloadInvoice(page:Page, row:number):Promise<string|null>;
    downloadDeliverySlip(page:Page, row:number):Promise<string|null>;
    viewCustomer(page:Page, row:number):Promise<Page>;
    getOrderATIPrice(page:Page, row:number):Promise<number>;
    selectAllOrders(page:Page):Promise<void>;
    selectOrdersRows(page:Page, rows:number[]):Promise<void>;
    clickOnBulkActionsButton(page:Page):Promise<void>;
    bulkOpenInNewTabs(page:Page, isAllOrders:boolean, row:number[]);
    bulkUpdateOrdersStatus(page:Page, status:string, isAllOrders:boolean, rows:number[]):Promise<string>;
    sortTable(page: Page, sortBy: string, sortDirection: string): Promise<void>;
    getPaginationLabel(page: Page): Promise<string>;
    selectPaginationLimit(page: Page, number: number): Promise<string>;
    paginationNext(page: Page): Promise<string>;
    paginationPrevious(page: Page): Promise<string>;
    previewOrder(page: Page, row: number): Promise<boolean>;
    getShippingDetails(page: Page): Promise<string>;
    getCustomerEmail(page: Page): Promise<string>;
    getCustomerInvoiceAddressDetails(page: Page): Promise<string>;
    getProductsNumberFromTable(page: Page): Promise<number>;
    getProductDetailsFromTable(page: Page, row: number): Promise<string>;
    clickOnMoreLink(page: Page, row: number): Promise<void>;
    openOrderDetails(page: Page): Promise<void>;
}
