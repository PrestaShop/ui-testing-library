import type {BrowserContext, Page} from '@playwright/test';

export interface CommonPageInterface {
    closePage(browserContext: BrowserContext, page: Page, tabId?: number): Promise<Page>;
    getPageTitle(page: Page): Promise<string>;
    goTo(page: Page, url: string): Promise<void>;
}
