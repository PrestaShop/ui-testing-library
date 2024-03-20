import {BOBasePagePageInterface} from '@interfaces/BO';
import type {Page} from '@playwright/test';

export interface ModuleManagerUninstalledModulesPageInterface extends BOBasePagePageInterface {
    readonly installMessageSuccessful: (moduleTag: string) => string;

    goToTabUninstalledModules(page: Page): Promise<void>;
    installModule(page: Page, moduleTag: string): Promise<boolean>;
}
