import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOStockPageInterface extends BOBasePagePageInterface {
  readonly pageTitle: string;

  bulkEditQuantityWithArrowUpDownButtons(page: Page, quantity: number, direction: string): Promise<string>;
  bulkEditQuantityWithInput(page: Page, quantity: number): Promise<string>;
  clickOnApplyNewQuantity(page: Page): Promise<string>;
  filterByCategory(page: Page, category: string[]): Promise<void>;
  filterByStatus(page: Page, status: string): Promise<void>;
  getAllRowsColumnContent(page: Page, column: string): Promise<string[]>;
  getNumberOfProductsFromList(page: Page): Promise<number>;
  getStockQuantityForProduct(page: Page, row: number): Promise<{reserved: number, available: number, physical: number}>;
  getTextColumnFromTableStocks(page: Page, row: number, column: string): Promise<string>;
  getTotalNumberOfProducts(page: Page): Promise<number>;
  goToSubTabMovements(page: Page): Promise<void>;
  isProductLowStock(page: Page, row: number): Promise<boolean>;
  paginateTo(page: Page, pageNumber?: number): Promise<number>;
  resetFilter(page: Page): Promise<number>;
  setDisplayProductsBelowLowOfStock(page: Page, toCheck: boolean): Promise<void>;
  setQuantityByArrowUpDown(page: Page, row: number, quantity: number, direction: string): Promise<void>;
  setQuantityWithInput(page: Page, row: number, quantity: number): Promise<void>;
  simpleFilter(page: Page, value: string): Promise<void>;
  sortTable(page: Page, sortBy: string, sortDirection: string): Promise<void>;
  updateRowQuantityWithArrowUpDownButtons(page: Page, row: number, quantity: number, direction: string): Promise<string>;
  updateRowQuantityWithInput(page: Page, row: number, quantity: number): Promise<string>;
}
