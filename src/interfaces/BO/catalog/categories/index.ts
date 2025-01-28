import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOCategoriesPageInterface extends BOBasePagePageInterface {
  readonly pageCategoryTitle: (categoryName: string) => string;
  readonly pageRootTitle: string;
  readonly pageTitle: string;
  readonly successfulUpdateStatusMessage: string;

  bulkSetStatus(page: Page, enable?: boolean): Promise<string>;
  changeCategoryPosition(page: Page, actualPosition: number, newPosition: number): Promise<string|null>;
  deleteCategoriesBulkActions(page: Page, modeID?: number): Promise<string>;
  deleteCategory(page: Page, row: number, modeID?: number): Promise<string>;
  exportDataToCsv(page: Page): Promise<string|null>;
  filterCategories(page: Page, filterType: string, filterBy: string, value?: string): Promise<void>;
  getAllRowsColumnContent(page: Page, column: string): Promise<string[]>;
  getCategoryInCsvFormat(page: Page, row: number): Promise<string>;
  getNumberOfElementInGrid(page: Page): Promise<number>;
  getStatus(page: Page, row: number): Promise<boolean>;
  getTextColumnFromTableCategories(page: Page, row: number, column: string): Promise<string>;
  goToAddNewCategoryPage(page: Page): Promise<void>;
  goToEditCategoryPage(page: Page, row: number): Promise<void>;
  goToEditHomeCategoryPage(page: Page): Promise<void>;
  goToViewSubCategoriesPage(page: Page, row: number): Promise<void>;
  paginationNext(page: Page): Promise<string>;
  paginationPrevious(page: Page): Promise<string>;
  resetAndGetNumberOfLines(page: Page): Promise<number>;
  resetFilter(page: Page): Promise<void>;
  selectPaginationLimit(page: Page, number: number): Promise<string>;
  setStatus(page: Page, row: number, valueWanted?: boolean): Promise<boolean>;
  sortTable(page: Page, sortBy: string, sortDirection: string): Promise<void>;
}
