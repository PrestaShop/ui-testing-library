import {ModuleConfigurationPageInterface} from '@interfaces/BO/modules/moduleConfiguration';
import type {Page} from '@playwright/test';

export interface ModuleBlockwishlistMainPageInterface extends ModuleConfigurationPageInterface {
    readonly defaultValueCreateButtonLabel: string;
    readonly defaultValueWishlistDefaultTitle: string;
    readonly defaultValueWishlistPageName: string;
    readonly pageTitle: string;

    getInputValue(page: Page, input: string): Promise<string>
    goToStatisticsTab(page: Page): Promise<void>;
    isTabActive(page: Page, name: 'Configuration'|'Statistics'): Promise<boolean>;
    setFormWording(
        page: Page,
        wishlistDefaultTitle?: string|undefined,
        createButtonLabel?: string|undefined,
        wishlistPageName?: string|undefined,
    ): Promise<string>
}
