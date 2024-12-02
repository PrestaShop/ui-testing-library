import type SearchWeight from '@data/types/search';
import {BOBasePagePageInterface} from '@interfaces/BO';
import {Page} from '@playwright/test';

export interface BOSearchPageInterface extends BOBasePagePageInterface {
    readonly errorFillFieldMessage: string;
    readonly errorMaxWordLengthInvalidMessage: string;
    readonly pageTitle: string;
    readonly settingsUpdateMessage: string;
    readonly successfulUpdateStatusMessage: string;
    readonly updateSuccessMessage: string;

    clickAddMissingProductsToIndex(page: Page): Promise<string>;
    clickRebuildEntireIndex(page: Page): Promise<string>;
    clickRebuildEntireIndexCronJobLink(page: Page): Promise<void>;
    getBlacklistedWords(page: Page, idLang: number): Promise<string>;
    getMaximumApproximateWords(page: Page): Promise<number>;
    getMaximumWordLength(page: Page): Promise<number>;
    getMinimumWordLength(page: Page): Promise<number>;
    getNumIndexedProducts(page: Page): Promise<number>;
    getNumTotalProducts(page: Page): Promise<number>;
    getSearchExactEndMatchStatus(page: Page): Promise<boolean>;
    getWeightInputValue(page: Page, field: SearchWeight): Promise<number>;
    goToAliasesPage(page: Page): Promise<void>;
    goToTagsPage(page: Page): Promise<void>;
    setBlacklistedWords(page: Page, idLang: number, words: string): Promise<string>;
    setFuzzySearch(page: Page, toEnable?: boolean): Promise<string>;
    setIndexing(page: Page, toEnable?: boolean): Promise<string>;
    setMaximumApproximateWords(page: Page, maxWords: number): Promise<string>;
    setMaximumWordLength(page: Page, length: number|string): Promise<string>;
    setMinimumWordLength(page: Page, length: number): Promise<string>;
    setSearchExactEndMatch(page: Page, toEnable?: boolean): Promise<string>;
    setSearchWithinWord(page: Page, toEnable?: boolean): Promise<string>;
    setWeightInputValue(page: Page, field: SearchWeight, value: number): Promise<string>;
}
