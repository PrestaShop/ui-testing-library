import {BOBasePagePageInterface} from '@interfaces/BO';
import { type Page } from '@playwright/test';

export interface BODesignPositionsPageInterface extends BOBasePagePageInterface {
    readonly messageModuleAddedFromHook: string;
    readonly pageTitle: string;

    clickHeaderHookModule(page: Page): Promise<void>;
}
