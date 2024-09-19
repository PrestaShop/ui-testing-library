import type FakerModule from '@data/faker/module';
import {type ModuleInfo} from '@data/types/module';
import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface ModuleManagerPageInterface extends BOBasePagePageInterface {
    pageTitle: string;
    readonly disableModuleSuccessMessage: (moduleTag: string) => string;
    readonly enableModuleSuccessMessage: (moduleTag: string) => string;
    readonly installModuleSuccessMessage: (moduleTag: string) => string;
    readonly resetModuleSuccessMessage: (moduleTag: string) => string;
    readonly uninstallModuleSuccessMessage: (moduleTag: string) => string;
    readonly updateModuleSuccessMessage: (moduleTag: string) => string;
    readonly uploadModuleSuccessMessage: string;

    bulkActions(page: Page, action: string): Promise<string | null>;
    closeUploadModuleModal(page: Page): Promise<boolean>;
    filterByCategory(page: Page, category: string): Promise<void>;
    filterByStatus(page: Page, status: string): Promise<void>;
    getAllModulesStatus(page: Page, statusToFilterBy: string): Promise<{ name: string, status: boolean }[]>;
    getBlockModuleTitle(page: Page, position: number): Promise<string | null>;
    getModuleName(page: Page, module: FakerModule): Promise<string>;
    getModuleInformationNth(page: Page, nth: number): Promise<ModuleInfo>;
    getNumberOfBlocks(page: Page): Promise<number>;
    getNumberOfModules(page: Page): Promise<number>;
    goToAlertsTab(page: Page): Promise<void>;
    goToConfigurationPage(page: Page, moduleTag: string): Promise<void>;
    isBulkActionsButtonDisabled(page: Page): Promise<boolean>;
    isModalActionVisible(page: Page, module: FakerModule, action: string): Promise<boolean>;
    isModuleStatus(page: Page, moduleTag: string, action: string): Promise<boolean>;
    isModuleVisible(page: Page, module: FakerModule): Promise<boolean>;
    searchModule(page: Page, module: FakerModule): Promise<boolean>;
    selectModule(page: Page, moduleTag: string): Promise<void>;
    setActionInModule(
        page: Page,
        module: FakerModule,
        action: string,
        cancel?: boolean,
        forceDeletion?: boolean,
    ): Promise<string | null>;
    uploadModule(page: Page, file: string): Promise<string | null>;
}
