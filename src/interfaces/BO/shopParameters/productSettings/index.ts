import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOProductSettingsPageInterface extends BOBasePagePageInterface {
    readonly pageTitle: string;

    changeCatalogModeStatus(page: Page, toEnable?: boolean): Promise<string>;
    chooseQuantityDiscountsBasedOn(page: Page, basedOn: string): Promise<string>;
    isDisplayNotificationIfProductInCartChecked(page: Page): Promise<boolean>;
    setAllowOrderingOutOfStockStatus(page: Page, toEnable?: boolean): Promise<string>;
    setDefaultActivationStatus(page: Page, toEnable?: boolean): Promise<string>;
    setDefaultPackStockManagement(page: Page, option: string): Promise<string>;
    setDefaultProductsOrder(page: Page, orderBy: string, orderMethod?: string): Promise<string>;
    setDeliveryTimeInStock(page: Page, deliveryTimeText: string): Promise<string>;
    setDeliveryTimeOutOfStock(page: Page, deliveryTimeText?: string): Promise<string>;
    setDisplayAddToCartButton(page: Page, toEnable?: boolean): Promise<string>;
    setDisplayAvailableQuantitiesStatus(page: Page, toEnable?: boolean): Promise<string>;
    setDisplayDiscountedPriceStatus(page: Page, toEnable?: boolean): Promise<string>;
    setDisplayNotificationIfProductInCartStatus(page: Page, toEnable?: boolean): Promise<string>;
    setDisplayRemainingQuantities(page: Page, quantity: number): Promise<string>;
    setDisplayUnavailableProductAttributesStatus(page: Page, toEnable?: boolean): Promise<string>;
    setEnableStockManagementStatus(page: Page, toEnable?: boolean): Promise<string>;
    setForceUpdateFriendlyURLStatus(page: Page, toEnable?: boolean): Promise<string>;
    setLabelOfInStockProducts(page: Page, label: string): Promise<string>;
    setLabelOosAllowedBackorders(page: Page, label: string): Promise<string>;
    setLabelOosDeniedBackorders(page: Page, label: string): Promise<string>;
    setMaxSizeOfSummaryValue(page: Page, size: number): Promise<string>;
    setProductsDisplayedPerPage(page: Page, numberOfProducts: number): Promise<string>;
    setSeparatorOfAttributeOnProductLink(page: Page, separator: string): Promise<string>;
    setShowPricesStatus(page: Page, toEnable?: boolean): Promise<string>;
    updateNumberOfDays(page: Page, numberOfDays: number): Promise<string>;
}
