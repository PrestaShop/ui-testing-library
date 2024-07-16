import type {CommonPageInterface} from '@interfaces/index';
import type {Page} from '@playwright/test';

export interface FOBasePagePageInterface extends CommonPageInterface {
    readonly content: string;
    readonly restrictedContentCountry: string;

    changeCurrency(page: Page, isoCode?: string, symbol?: string): Promise<void>;
    changeLanguage(page: Page, lang?: string): Promise<void>;
    clickAutocompleteSearchResult(page: Page, nthResult: number): Promise<void>;
    clickOnBreadCrumbLink(page: Page, link: string): Promise<void>;
    clickOnHeaderLink(page: Page, link: string, hasPageChange?: boolean): Promise<void>;
    closeAutocompleteSearch(page: Page): Promise<void>;
    countAutocompleteSearchResult(page: Page, productName: string): Promise<number>
    currencyExists(page: Page, currencyName?: string): Promise<boolean>;
    getAutocompleteSearchResult(page: Page, productName: string): Promise<string>;
    getBreadcrumbText(page: Page): Promise<string>;
    getCartNotificationsNumber(page: Page): Promise<number>;
    getCopyright(page: Page): Promise<string>;
    getDefaultCurrency(page: Page): Promise<string>;
    getDefaultShopLanguage(page: Page): Promise<string>;
    getFooterLinksBlockTitle(page: Page, position: number): Promise<string>;
    getFooterLinksTextContent(page: Page, position: number): Promise<Array<string>>;
    getRestrictedText(page: Page): Promise<string|null>;
    getSearchInput(page: Page): Promise<string>;
    getSearchValue(page: Page): Promise<string>;
    getShopLanguage(page: Page): Promise<string>;
    getStoreInformation(page: Page): Promise<string>;
    goToCartPage(page: Page): Promise<void>;
    goToCategory(page: Page, categoryID: number): Promise<void>;
    goToFooterLink(page: Page, textSelector: string): Promise<void>;
    goToHomePage(page: Page): Promise<void>;
    goToLoginPage(page: Page): Promise<void>;
    goToMyAccountPage(page: Page): Promise<void>;
    goToSubCategory(page: Page, categoryID: number, subCategoryID: number): Promise<void>;
    hasAutocompleteSearchResult(page: Page, productName: string): Promise<boolean>;
    isAutocompleteSearchResultVisible(page: Page): Promise<boolean>;
    isCurrencyDropdownExist(page: Page): Promise<boolean>;
    isCurrencyVisible(page: Page): Promise<boolean>;
    isCustomerConnected(page: Page): Promise<boolean>;
    isLanguageListVisible(page: Page): Promise<boolean>;
    isRestrictedPage(page: Page): Promise<boolean>;
    languageExists(page: Page, lang?: string): Promise<boolean>;
    logout(page: Page): Promise<void>;
    searchProduct(page: Page, productName: string): Promise<void>;
    setProductNameInSearchInput(page: Page, productName: string): Promise<void>;
}
