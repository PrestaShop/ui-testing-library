import {BOBasePagePageInterface} from '@interfaces/BO';
import {Page} from '@playwright/test';

export interface BOStatisticsPageInterface extends BOBasePagePageInterface {
    readonly pageTitle: string;
    readonly subTabTitleStatsstock: string;
    readonly subTabTitleStatsbestmanufacturers: string;
    readonly subTabTitleStatsbestcategories: string;
    readonly subTabTitleStatsbestcustomers: string;
    readonly subTabTitleStatsbestsuppliers: string;
    readonly subTabTitleStatsbestvouchers: string;
    readonly subTabTitleStatsbestproducts: string;
    readonly subTabTitleStatscarrier: string;
    readonly subTabTitleStatscheckup: string;
    readonly subTabTitleStatscatalog: string;
    readonly subTabTitleStatsregistrations: string;
    readonly subTabTitleStatsnewsletter: string;
    readonly subTabTitlePagesnotfound: string;
    readonly subTabTitleStatsproduct: string;
    readonly subTabTitleStatspersonalinfos: string;
    readonly subTabTitleStatssales: string;
    readonly subTabTitleStatssearch: string;
    readonly subTabTitleStatsforecast: string;

    getSubTabTitle(page: Page): Promise<string>;
    goToSubTab(page: Page, moduleTag: string): Promise<void>;
}
