import type {BOLocalizationBasePageInterface} from '@interfaces/BO/international/localization/base';
import type {Page} from '@playwright/test';

import FakerCurrency from '@data/faker/currency';
import type {CurrencyFormat} from '@data/types/currency';

export interface BOCurrenciesCreatePageInterface extends BOLocalizationBasePageInterface {
    readonly editCurrencyPage: string;
    readonly pageTitle: string;
    readonly pageTitleEdit: (currency: string) => string;
    readonly resetCurrencyFormatMessage: string;

    addOfficialCurrency(page: Page, currencyData: FakerCurrency): Promise<string>;
    createUnOfficialCurrency(page: Page, currencyData: FakerCurrency): Promise<string>;
    editCurrency(page: Page, currencyData: FakerCurrency): Promise<string>;
    editCurrencyFormat(page: Page, row: number): Promise<boolean>;
    getNumberOfElementInGrid(page: Page): Promise<number>;
    getTextColumnFromTable(page: Page, row: number, column: number): Promise<string>;
    resetCurrencyFormat(page: Page, row: number): Promise<string | null>;
    restoreDefaultSettings(page: Page): Promise<boolean>;
    saveCurrencyForm(page: Page): Promise<string>;
    saveCurrencyFormat(page: Page): Promise<void>;
    setCurrencyFormatFormat(page: Page, format: CurrencyFormat): Promise<void>;
    setCurrencyFormatSymbol(page: Page, symbol: string): Promise<void>;
    setCurrencyPrecision(page: Page, value?: number): Promise<string>;
    updateExchangeRate(page: Page, value: number): Promise<string>;
}
