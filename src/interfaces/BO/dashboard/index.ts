import type DashboardTrafficSource from '@data/types/dashboard';
import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface DashboardPageInterface extends BOBasePagePageInterface {
    readonly pageTitle: string;

    clickOnAbandonedCartsLink(page: Page): Promise<void>;
    clickOnActiveShoppingCartsLink(page: Page): Promise<void>;
    clickOnConfigureActivityOverviewLink(page: Page): Promise<boolean>;
    clickOnConfigureProductsAndSalesLink(page: Page): Promise<boolean>;
    clickOnDetailsButtonOfRecentOrdersTable(page: Page, row?: number): Promise<void>;
    clickOnNewCustomersLink(page: Page): Promise<void>;
    clickOnNewMessagesLink(page: Page): Promise<void>;
    clickOnNewSubscriptionsLink(page: Page): Promise<void>;
    clickOnOrdersLink(page: Page): Promise<void>;
    clickOnOutOfStockProductsLink(page: Page): Promise<void>;
    clickOnProductReviewsLink(page: Page): Promise<void>;
    clickOnReturnExchangeLink(page: Page): Promise<void>;
    clickOnTotalSubscribersLink(page: Page): Promise<void>;
    clickOnVisitsLink(page: Page): Promise<void>;
    closeDialogUpdateNotification(page: Page): Promise<boolean>;
    closeHelpCard(page: Page): Promise<boolean>;
    getFormActivityOverviewValue(page: Page, inputName: string): Promise<string>;
    getBestSellersTabTitle(page: Page): Promise<string>;
    getHelpDocumentTitle(page: Page): Promise<string>;
    getMostViewedTabTitle(page: Page): Promise<string>;
    getNumberOfAbandonedCarts(page: Page): Promise<number>;
    getNumberOfActiveShoppingCarts(page: Page): Promise<number>;
    getNumberOfNewCustomers(page: Page): Promise<number>;
    getNumberOfNewMessages(page: Page): Promise<number>;
    getNumberOfNewSubscriptions(page: Page): Promise<number>;
    getNumberOfOrders(page: Page): Promise<number>;
    getNumberOfProductReviews(page: Page): Promise<number>;
    getNumberOfReturnExchange(page: Page): Promise<number>;
    getNumberOfTotalSubscribers(page: Page): Promise<number>;
    getNumberOfVisits(page: Page): Promise<number>;
    getOutOfStockProducts(page: Page): Promise<number>;
    getRecentOrdersTitle(page: Page): Promise<string>;
    getSalesScore(page: Page): Promise<number>;
    getTopSearchersTabTitle(page: Page): Promise<string>;
    getTrafficSources(page: Page): Promise<DashboardTrafficSource[]>;
    goToBestSellersTab(page: Page): Promise<void>;
    goToMostViewedTab(page: Page): Promise<void>;
    goToTopSearchersTab(page: Page): Promise<void>;
    isBestSellersTableVisible(page: Page): Promise<boolean>;
    isMostViewedTableVisible(page: Page): Promise<boolean>;
    isTopSearchersTableVisible(page: Page): Promise<boolean>;
    openHelpCard(page: Page): Promise<boolean>;
    setDemoMode(page: Page, toEnable: boolean): Promise<void>;
    setFormActivityOverview(
        page: Page,
        nbActiveCarts?: number | undefined,
        nbOnlineVisitors?: number | undefined,
        nbAbandonedCartsMin?: number | undefined,
        nbAbandonedCartsMax?: number | undefined,
    ): Promise<void>
    setFormProductAndSales(
        page: Page,
        nbRecentsOrders?: number | undefined,
        nbBestSellers?: number | undefined,
        nbMostViewed?: number | undefined,
        nbTopSearches?: number | undefined,
    ): Promise<void>
}
