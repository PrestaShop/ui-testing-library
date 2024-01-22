import type ModuleData from '@data/faker/module';

import {BOBasePagePageInterface} from '@interfaces/BO';
import type {Page} from '@playwright/test';

export interface ModuleManagerPageInterface extends BOBasePagePageInterface {
    pageTitle: string;

    goToConfigurationPage(page: Page, moduleTag: string): Promise<void>;
    searchModule(page: Page, module: ModuleData): Promise<boolean>;
}
