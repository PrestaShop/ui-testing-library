import {BOBasePagePageInterface} from '@interfaces/BO';
import {Page} from '@playwright/test';

export interface BOSearchPageInterface extends BOBasePagePageInterface {
    readonly errorFillFieldMessage: string;
    readonly errorMaxWordLengthInvalidMessage: string;
    readonly pageTitle: string;
    readonly settingsUpdateMessage: string;
    readonly successfulUpdateStatusMessage: string;
    readonly updateSuccessMessage: string;

    bulkDeleteAliases(page: Page): Promise<string>;
    bulkSetStatus(page: Page, enable?: boolean): Promise<string>;
    deleteAlias(page: Page, row: number): Promise<string>;
    clickAddMissingProductsToIndex(page: Page): Promise<string>;
    clickRebuildEntireIndex(page: Page): Promise<string>;
    filterTable(page: Page, filterType: string, filterBy: string, value: string): Promise<void>;
    getAllRowsColumnContent(page: Page, columnName: string): Promise<string[]>;
    getBlacklistedWords(page: Page, idLang: number): Promise<string>;
    getMaximumApproximateWords(page: Page): Promise<number>;
    getMaximumWordLength(page: Page): Promise<number>;
    getMinimumWordLength(page: Page): Promise<number>;
    getNumberOfElementInGrid(page: Page): Promise<number>;
    getNumIndexedProducts(page: Page): Promise<number>;
    getNumTotalProducts(page: Page): Promise<number>;
    getSearchExactEndMatchStatus(page: Page): Promise<boolean>;
    getStatus(page: Page, row: number): Promise<boolean>;
    getTextColumn(page: Page, row: number, columnName: string): Promise<string>;
    goToAddNewAliasPage(page: Page): Promise<void>;
    gotoEditAliasPage(page: Page, row: number): Promise<void>;
    goToTagsPage(page: Page): Promise<void>;
    paginationNext(page: Page): Promise<string>;
    paginationPrevious(page: Page): Promise<string>;
    resetAndGetNumberOfLines(page: Page): Promise<number>;
    resetFilter(page: Page): Promise<void>;
    selectPaginationLimit(page: Page, number: number): Promise<string>;
    setBlacklistedWords(page: Page, idLang: number, words: string): Promise<string>;
    setFuzzySearch(page: Page, toEnable?: boolean): Promise<string>;
    setIndexing(page: Page, toEnable?: boolean): Promise<string>;
    setMaximumApproximateWords(page: Page, maxWords: number): Promise<string>;
    setMaximumWordLength(page: Page, length: number|string): Promise<string>;
    setMinimumWordLength(page: Page, length: number): Promise<string>;
    setSearchExactEndMatch(page: Page, toEnable?: boolean): Promise<string>;
    setSearchWithinWord(page: Page, toEnable?: boolean): Promise<string>;
    setStatus(page: Page, row: number, valueWanted?: boolean): Promise<boolean>;
    sortTable(page: Page, sortBy: string, sortDirection: string): Promise<void>;
}
