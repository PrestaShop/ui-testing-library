import {FOBasePagePageInterface} from '@interfaces/FO';
import type {Page} from '@playwright/test';

export interface FoCategoryPageInterface extends FOBasePagePageInterface {
    readonly messageAddedToWishlist: string;

    addToWishList(page: Page, idxProduct: number): Promise<string>;
    clearAllFilters(page: Page): Promise<boolean>;
    clickBlockCategory(page: Page, categoryName: string): Promise<void>;
    closeFilter(page: Page, row: number): Promise<void>;
    filterByCheckbox(page: Page, facetType: string, checkboxName: string, toEnable: boolean): Promise<void>;
    filterByPrice(page: Page, minPrice: number, maxPrice: number, filterFrom: number, filterTo: number): Promise<void>;
    getActiveFilters(page: Page): Promise<string>;
    getAllProductsAttribute(page: Page, attribute: string): Promise<string[]>;
    getCategoryDescription(page: Page): Promise<string>;
    getCategoryImageMain(page: Page, name: string): Promise<string | null>;
    getHeaderPageName(page: Page): Promise<object>;
    getMaximumPrice(page: Page): Promise<number>;
    getMinimumPrice(page: Page): Promise<number>;
    getNThChildFromIDProduct(page: Page, idProduct: number): Promise<number | null>;
    getNumBlockCategories(page: Page): Promise<number>;
    getNumberOfProducts(page: Page): Promise<number>;
    getNumberOfProductsDisplayed(page: Page): Promise<number>;
    getNumSearchFiltersCheckbox(page: Page, facetType: string, facetLabel?: string): Promise<number>;
    getPagesList(page: Page): Promise<string>;
    getProductHref(page: Page, productRow: number): Promise<string>;
    getProductPrice(page: Page, productRow: number): Promise<number>;
    getProductTag(page: Page, id: number): Promise<string>;
    getProductsNumber(page: Page): Promise<number>;
    getShowingItems(page: Page): Promise<string>;
    getSortByValue(page: Page): Promise<string>;
    goToNextPage(page: Page): Promise<void>;
    goToPreviousPage(page: Page): Promise<void>;
    goToProductPage(page: Page, id: number): Promise<void>;
    hasBlockCategories(page: Page): Promise<boolean>;
    hasSearchFilters(page: Page): Promise<boolean>;
    hasSearchFilterType(page: Page, facetType: string, facetLabel?: string): Promise<boolean>;
    isActiveFilterNotVisible(page: Page): Promise<boolean>;
    isAddedToWishlist(page: Page, idxProduct: number): Promise<boolean>;
    isCategoryPage(page: Page): Promise<boolean>;
    isPagesListVisible(page: Page): Promise<boolean>;
    isSearchFilterDropdown(page: Page, facetType: string, facetLabel?: string): Promise<boolean>;
    isSearchFilterRadio(page: Page, facetType: string, facetLabel?: string): Promise<boolean>;
    isSearchFiltersCheckbox(page: Page, facetType: string, facetLabel?: string): Promise<boolean>;
    isSortButtonVisible(page: Page): Promise<boolean>;
    quickViewProduct(page: Page, id: number): Promise<void>;
    sortProductsList(page: Page, sortBy: string): Promise<void>;
}
