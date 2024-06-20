import {BOBasePagePageInterface} from '@interfaces/BO';
import {Page} from '@playwright/test';

export interface BOSearchPageInterface extends BOBasePagePageInterface {
    readonly pageTitle: string;
    readonly settingsUpdateMessage: string;
    readonly successfulUpdateStatusMessage: string;

    bulkDeleteAliases(page: Page): Promise<string>;
    bulkSetStatus(page: Page, enable?: boolean): Promise<string>;
    deleteAlias(page: Page, row: number): Promise<string>;
    filterTable(page: Page, filterType: string, filterBy: string, value: string): Promise<void>;
    getAllRowsColumnContent(page: Page, columnName: string): Promise<string[]>;
    getBlacklistedWords(page: Page, idLang: number): Promise<string>;
    getNumberOfElementInGrid(page: Page): Promise<number>;
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
    setStatus(page: Page, row: number, valueWanted?: boolean): Promise<boolean>;
    sortTable(page: Page, sortBy: string, sortDirection: string): Promise<void>;
}
