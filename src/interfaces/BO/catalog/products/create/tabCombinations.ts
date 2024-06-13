import {BOBasePagePageInterface} from '@interfaces/BO';

import type {Page, Frame} from '@playwright/test';

import type {
  ProductAttributes,
  ProductCombinationBulk,
  ProductCombinationBulkRetailPrice,
  ProductCombinationBulkSpecificReferences,
  ProductCombinationBulkStock,
  ProductCombinationOptions,
  ProductStockMovement,
} from '@data/types/product';

export interface BOProductsCreateTabCombinationsPageInterface extends BOBasePagePageInterface {
    bulkEditRetailPrice(page: Frame | Page, editRetailPriceData: ProductCombinationBulkRetailPrice): Promise<void>;
    bulkEditSpecificPrice(page: Frame|Page, specificReferencesData: ProductCombinationBulkSpecificReferences): Promise<void>;
    bulkEditStock(page: Frame | Page, editStockData: ProductCombinationBulkStock): Promise<void>;
    clearFilter(page: Page): Promise<number>;
    clickOnAttributesAndFeaturesLink(page: Page): Promise<Page>;
    clickOnCancelButton(page: Page): Promise<boolean>;
    clickOnDeleteIcon(page: Page, action: string, row: number): Promise<string | null | boolean>;
    clickOnEditCombinationsByBulkActions(page: Page): Promise<string>;
    clickOnEditDefaultBehaviourLink(page: Page): Promise<Page>;
    clickOnEditIcon(page: Page, row:number): Promise<boolean>;
    clickOnGenerateCombinationButton(page: Page): Promise<boolean>;
    clickOnLearnMoreButton(page: Page): Promise<Page>;
    clickOnNextCombinationButton(page: Page): Promise<void>;
    clickOnPreviousCombinationButton(page: Page): Promise<void>;
    closeEditCombinationModal(page: Page): Promise<boolean>;
    editCombination(page: Page, combinationData: ProductCombinationOptions, row: number): Promise<string | null>;
    editCombinationFromModal(page: Page, combinationData: ProductCombinationOptions): Promise<string>;
    editCombinationRowQuantity(page: Page, row: number, quantity: number): Promise<void>;
    editCombinationsByBulkActions(page: Page, editCombinationsData: ProductCombinationBulk): Promise<string>;
    filterCombinationsBySize(page: Page, sizeID: number): Promise<void>;
    generateCombinationModalIsClosed(page: Page): Promise<boolean>;
    generateCombinations(page: Page): Promise<string | null>;
    getAllRowsColumnContent(page: Page, numberOfCombinations: number, column: string): Promise<string[]>;
    getCombinationNameFromModal(page: Page): Promise<string>;
    getFilterBySizeButtonName(page: Page): Promise<string>;
    getNumberOfCombinationsFromList(page: Page): Promise<number>;
    getPaginationLabel(page: Page): Promise<string>;
    getRecentStockMovements(page: Page, row: number): Promise<ProductStockMovement>;
    getTextColumn(page: Page, column: string, row: number): Promise<string>;
    paginationNext(page: Page): Promise<string>
    paginationPrevious(page: Page): Promise<string>;
    saveCombinationsForm(page: Page): Promise<string|null>;
    selectAllCombinations(page: Page, allCombinations: boolean): Promise<boolean>;
    selectAllValues(page: Page, attribute: string): Promise<string>;
    selectAttribute(page: Page, combination: string): Promise<void>;
    selectPaginationLimit(page: Page, number: number): Promise<string>;
    setLabelWhenInStock(page: Page, label: string): Promise<void>;
    setLabelWhenOutOfStock(page: Page, label: string): Promise<void>;
    setOptionWhenOutOfStock(page: Page, option: string): Promise<void>;
    setProductAttributes(page: Page, attributes: ProductAttributes[]): Promise<string|null>;
    sortTable(page: Page, sortBy: string, column: number, sortDirection: string): Promise<void>;
}
