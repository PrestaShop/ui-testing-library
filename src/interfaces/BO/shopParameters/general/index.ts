import {BOBasePagePageInterface} from '@interfaces/BO';
import {Page} from '@playwright/test';

export interface BOShopParametersPageInterface extends BOBasePagePageInterface {
    readonly pageTitle: string;

    goToSubTabMaintenance(page: Page): Promise<void>;
    selectRoundMode(page: Page, roundMode: string): Promise<string>;
    setAllowIframes(page: Page, toEnable?: boolean): Promise<string>;
    setDisplayBestSellers(page: Page, toEnable?: boolean): Promise<string>;
    setDisplayBrands(page: Page, toEnable?: boolean): Promise<string>;
    setDisplaySuppliers(page: Page, toEnable?: boolean): Promise<string>;
    setMultiStoreStatus(page: Page, toEnable?: boolean): Promise<string>;
}
