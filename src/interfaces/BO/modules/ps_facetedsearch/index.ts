import {ModuleConfigurationPageInterface} from '@interfaces/BO/modules/moduleConfiguration';
import {Page} from '@playwright/test';

export interface ModulePsFacetedsearchMainPageInterface extends ModuleConfigurationPageInterface {
    readonly msgSuccessfulCreation: (name: string) => string;
    readonly msgSuccessfulDelete: string;
    readonly pageSubTitle: string;
    readonly settingsErrorMessage: string;
    readonly settingsSavedMessage: string;

    deleteFilterTemplate(page: Page, row: number): Promise<string>;
    editFilterTemplate(page: Page, row: number): Promise<void>;
    getCategoryFilterDepthValue(page: Page): Promise<number>;
    goToAddNewTemplate(page: Page): Promise<void>;
    setCategoryFilterDepthValue(page: Page, value: string): Promise<string>;
}
