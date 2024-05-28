import {BOBasePagePageInterface} from '@interfaces/BO';

import type {Page} from '@playwright/test';

export interface BOProductsCreateTabSeoPageInterface extends BOBasePagePageInterface {
    clickOnGenerateUrlFromNameButton(page: Page): Promise<void>;
    getErrorMessageOfFriendlyUrl(page: Page): Promise<string>;
    getValue(page: Page, inputName: string, languageId?: string): Promise<string>
    searchOptionTarget(page: Page, target: string): Promise<void>;
    selectRedirectionPage(page: Page, redirectionPage: string): Promise<void>;
    setFriendlyUrl(page: Page, friendlyUrl: string): Promise<void>;
    setMetaDescription(page: Page, metaDescription: string): Promise<void>;
    setMetaTitle(page: Page, metaTitle: string): Promise<void>;
    setTag(page: Page, tag: string): Promise<void>;
}
