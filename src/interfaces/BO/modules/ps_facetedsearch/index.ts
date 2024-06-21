import {ModuleConfigurationPageInterface} from '@interfaces/BO/modules/moduleConfiguration';
import {Page} from '@playwright/test';

export interface ModulePsFacetedsearchMainPageInterface extends ModuleConfigurationPageInterface {
    readonly msgSuccessfulCreation: (name: string) => string;
    readonly msgSuccessfulDelete: string;
    readonly pageSubTitle: string;

    deleteFilterTemplate(page: Page, row: number): Promise<string>;
    editFilterTemplate(page: Page, row: number): Promise<void>;
    goToAddNewTemplate(page: Page): Promise<void>;
}
