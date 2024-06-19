import {BOBasePagePageInterface} from '@interfaces/BO';
import type {Page} from '@playwright/test';

export interface ModuleConfigurationPageInterface extends BOBasePagePageInterface {
    clickHeaderBack(page: Page): Promise<void>;
    clickHeaderManageHooks(page: Page): Promise<void>;
    clickHeaderTranslate(page: Page): Promise<void>;
    closeTranslateModal(page: Page): Promise<void>;
    getPageSubtitle(page: Page): Promise<string>;
    isModalTranslateVisible(page: Page): Promise<boolean>;
}
