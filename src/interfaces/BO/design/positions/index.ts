import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BODesignPositionsPageInterface extends BOBasePagePageInterface {
    readonly messageModuleAddedFromHook: string;
    readonly messageModuleRemovedFromHook: string;
    readonly pageTitle: string;

    clickHeaderHookModule(page: Page): Promise<void>;
    filterModule(page: Page, moduleName: string): Promise<void>;
    getHookDescription(page: Page, hookRow: number): Promise<string>;
    getHookId(page: Page, hookRow: number): Promise<number>;
    getHookName(page: Page, hookRow: number): Promise<string>;
    getHookStatus(page: Page, hookRow: number): Promise<boolean>;
    getHookTitle(page: Page, hookRow: number): Promise<string>;
    getModuleFilter(page: Page): Promise<string>;
    getModulesInHook(page: Page, hookName: string): Promise<string>;
    getNumberOfHooks(page: Page): Promise<number>;
    getSelectedHookCount(page: Page): Promise<number>;
    isHookVisible(page: Page, hookName: string): Promise<boolean>;
    searchHook(page: Page, hookValue: string): Promise<string>;
    selectHookModule(page: Page, hookName: string, moduleName: string): Promise<boolean>;
    unhookSelection(page: Page): Promise<string>;
}
