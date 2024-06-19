import {ModuleConfigurationPageInterface} from '@interfaces/BO/modules/moduleConfiguration';
import type {Page} from '@playwright/test';

export interface ModuleBlockwishlistMainPageInterface extends ModuleConfigurationPageInterface {
    readonly pageTitle: string;

    isTabActive(page: Page, name: 'Configuration'|'Statistics'): Promise<boolean>;
    goToStatisticsTab(page: Page): Promise<void>;
}
