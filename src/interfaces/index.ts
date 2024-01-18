import type {Page} from '@playwright/test';

export interface CommonPageInterface {
    getPageTitle(page: Page): Promise<string>;

    goTo(page: Page, url: string): Promise<void>;
}
