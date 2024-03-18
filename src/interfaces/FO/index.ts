import type {CommonPageInterface} from '@interfaces/index';
import type {Page} from '@playwright/test';

export interface FOBasePagePageInterface extends CommonPageInterface {
    changeLanguage(page: Page, lang: string): Promise<void>;
    goToHomePage(page: Page): Promise<void>;
    goToLoginPage(page: Page): Promise<void>;
    isCustomerConnected(page: Page): Promise<boolean>;
    logout(page: Page): Promise<void>;
}
