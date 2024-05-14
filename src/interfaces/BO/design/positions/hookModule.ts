import type FakerModule from "@data/faker/module";
import type {BOBasePagePageInterface} from '@interfaces/BO';

import type {Page} from '@playwright/test';

export interface BODesignPositionsHookModulePageInterface extends BOBasePagePageInterface {
    readonly pageTitle: string;

    saveForm(page: Page): Promise<string>;
    setHook(page: Page, hookName: string): Promise<void>;
    setModule(page: Page, module: FakerModule): Promise<void>;
}
