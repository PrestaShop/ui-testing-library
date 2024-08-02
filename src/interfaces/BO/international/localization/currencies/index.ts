import type {BOLocalizationBasePageInterface} from '@interfaces/BO/international/localization/base';
import type {Page} from '@playwright/test';

import FakerCurrency from '@data/faker/currency';

export interface BOCurrenciesPageInterface extends BOLocalizationBasePageInterface {
    readonly cannotDeleteDefaultCurrencyMessage: string;
    readonly cannotDisableDefaultCurrencyMessage: string;
    readonly pageTitle: string;
    readonly successfulUpdateStatusMessage: string;

    bulkDeleteCurrencies(page: Page): Promise<string>;
    confirmDeleteCurrency(page: Page): Promise<void>;
    deleteCurrency(page: Page, row?: number): Promise<string>;
    filterTable(page: Page, filterType: string, filterBy: string, value: string): Promise<void>;
    getAllRowsColumnContent(page: Page, column: string): Promise<string[]>;
    getCurrencyFromTable(page: Page, row: number): Promise<FakerCurrency>;
    getExchangeRateValue(page: Page, row: number): Promise<number>;
    getNumberOfElementInGrid(page: Page): Promise<number>;
    getPaginationLabel(page: Page): Promise<string>;
    getStatus(page: Page, row?: number): Promise<boolean>;
    getTextColumnFromTableCurrency(page: Page, row: number, column: string): Promise<string>;
    getTextForEmptyTable(page: Page): Promise<string>;
    goToAddNewCurrencyPage(page: Page): Promise<void>;
    goToEditCurrencyPage(page: Page, row?: number): Promise<void>;
    isBulkActionsEnabled(page: Page): Promise<boolean>;
    paginationNext(page: Page): Promise<string>;
    paginationPrevious(page: Page): Promise<string>;
    resetAndGetNumberOfLines(page: Page): Promise<number>;
    resetFilter(page: Page): Promise<void>;
    selectPaginationLimit(page: Page, number: number): Promise<string>;
    selectRow(page: Page, row: number): Promise<void>;
    setStatus(page: Page, row?: number, valueWanted?: boolean): Promise<boolean>;
    sortTable(page: Page, sortBy: string, sortDirection: string): Promise<void>;
    updateExchangeRate(page: Page): Promise<string>;
}
