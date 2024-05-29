import type {PageWaitForSelectorOptionsState} from '@data/types/playwright';
import type {BrowserContext, Frame, Page} from '@playwright/test';

export interface CommonPageInterface {
    changePage(browserContext: BrowserContext, tabId?: number): Promise<Page>;
    closePage(browserContext: BrowserContext, page: Page, tabId?: number): Promise<Page>;
    getPageTitle(page: Page): Promise<string>;
    goTo(page: Page, url: string): Promise<void>;
    goToFo(page: Page): Promise<void>;
    openLinkWithTargetBlank(
        page: Page,
        selector: string,
        newPageSelector?: string,
        state?: 'load' | 'domcontentloaded' | 'networkidle',
        waitForVisible?: boolean,
    ): Promise<Page>
    reloadPage(page: Page): Promise<void>;
    resize(page: Page, mobileSize: boolean): Promise<void>;
    waitForSelector(page: Page | Frame, selector: string, state: PageWaitForSelectorOptionsState, timeout?: number): Promise<void>
    waitForSelectorAndClick(page: Frame | Page, selector: string, timeout?: number): Promise<void>
}
