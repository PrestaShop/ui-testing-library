import type FakerModule from '@data/faker/module';

import {BOBasePagePageInterface} from '@interfaces/BO';
import type {Page} from '@playwright/test';

export interface ModuleManagerPageInterface extends BOBasePagePageInterface {
    pageTitle: string;
    readonly resetModuleSuccessMessage: (moduleTag: string) => string;

    goToConfigurationPage(page: Page, moduleTag: string): Promise<void>;
    isModalActionVisible(page: Page, module: FakerModule, action: string): Promise<boolean>;
    isModuleVisible(page: Page, module: FakerModule): Promise<boolean>;
    searchModule(page: Page, module: FakerModule): Promise<boolean>;
    setActionInModule(
        page: Page,
        module: FakerModule,
        action: string,
        cancel?: boolean,
        forceDeletion?: boolean,
    ): Promise<string | null>
}
