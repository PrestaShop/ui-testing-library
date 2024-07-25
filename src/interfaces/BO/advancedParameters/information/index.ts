import {BOBasePagePageInterface} from '@interfaces/BO';
import type {Page} from '@playwright/test';

export interface BOInformationPageInterface extends BOBasePagePageInterface {
    readonly pageTitle: string;

    hasChangedFiles(page: Page): Promise<boolean>;
    hasOverrides(page: Page): Promise<boolean>;
    isBlockCheckYourConfigurationVisible(page: Page): Promise<boolean>;
    isBlockConfigurationInformationVisible(page: Page): Promise<boolean>;
    isBlockDatabaseInformationVisible(page: Page): Promise<boolean>;
    isBlockListChangedFilesVisible(page: Page): Promise<boolean>;
    isBlockListOverridesVisible(page: Page): Promise<boolean>;
    isBlockMailConfigurationVisible(page: Page): Promise<boolean>;
    isBlockServerInformationVisible(page: Page): Promise<boolean>;
    isBlockStoreInformationVisible(page: Page): Promise<boolean>;
    isBlockYourInformationVisible(page: Page): Promise<boolean>;
}
