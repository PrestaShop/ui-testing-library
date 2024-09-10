import {ModuleConfigurationPageInterface} from '@interfaces/BO/modules/moduleConfiguration';
import {Page} from '@playwright/test';

export interface ModulePsNewProductsMainPageInterface extends ModuleConfigurationPageInterface {
    readonly emptyErrorMessage: string;
    readonly invalidNumberMessage: string;
    readonly pageSubTitle: string;
    readonly updateSettingsSuccessMessage: string;

    getNumDaysConsideredAsNew(page: Page): Promise<string>;
    getNumProductsToDisplay(page: Page): Promise<string>;
    setNumDaysConsideredAsNew(page: Page, value: number|string): Promise<string>;
    setNumProductsToDisplay(page: Page, value: number|string): Promise<string>;
}
