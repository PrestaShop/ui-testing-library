import type {BOBasePagePageInterface} from '@interfaces/BO/index';
import type {Frame, Page} from '@playwright/test';

export interface BORouterPageInterface extends BOBasePagePageInterface {
    goToModuleManagerPage(page: Page): Promise<void>;
}
