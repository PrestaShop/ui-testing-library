import {BOBasePagePageInterface} from '@interfaces/BO';
import type {Page} from '@playwright/test';

export interface ModuleBlockwishlistMainPageInterface extends BOBasePagePageInterface {
    readonly pageTitle: string;

    isTabActive(page: Page, name: 'Configuration'|'Statistics'): Promise<boolean>;
    goToStatisticsTab(page: Page): Promise<void>;
}
