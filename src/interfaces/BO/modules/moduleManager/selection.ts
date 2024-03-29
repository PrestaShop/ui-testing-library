import {BOBasePagePageInterface} from '@interfaces/BO';
import type {Page} from '@playwright/test';

export interface ModuleManagerSelectionPageInterface extends BOBasePagePageInterface {
    readonly installMessageSuccessful: (moduleTag: string) => string;

    goToTabSelection(page: Page): Promise<void>;
    installModule(page: Page, moduleTag: string): Promise<boolean>;
}
