import type ModuleData from '@data/faker/module';

import {BOBasePagePageInterface} from '@interfaces/BO';
import type {Page} from '@playwright/test';

export interface ModuleManagerPageInterface extends BOBasePagePageInterface {
    pageTitle: string;
    readonly resetModuleSuccessMessage: (moduleTag: string) => string;

    goToConfigurationPage(page: Page, moduleTag: string): Promise<void>;
    isModalActionVisible(page: Page, module: ModuleData, action: string): Promise<boolean>;
    isModuleVisible(page: Page, module: ModuleData): Promise<boolean>;
    searchModule(page: Page, module: ModuleData): Promise<boolean>;
    setActionInModule(
        page: Page,
        module: ModuleData,
        action: string,
        cancel?: boolean,
        forceDeletion?: boolean,
    ): Promise<string | null>
}
