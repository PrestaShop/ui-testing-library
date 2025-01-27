import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOFeaturesPageInterface extends BOBasePagePageInterface {
  readonly pageTitle: string;

  bulkDeleteFeatures(page: Page): Promise<string>;
  changePosition(page: Page, actualPosition: number, newPosition: number): Promise<string | null>;
  clickOnEditFeature(page: Page, row: number): Promise<void>;
  deleteFeature(page: Page, row: number): Promise<string>;
  filterTable(page: Page, filterBy: string, value: string): Promise<void>;
  getAllRowsColumnContent(page: Page, columnName: string, sortColumnName?: string): Promise<string[]>;
  getNumberOfElementInGrid(page: Page): Promise<number>;
  getTextColumn(page: Page, row: number, columnName: string, sortColumnName?: string): Promise<string>;
  goToAddFeaturePage(page: Page): Promise<void>;
  paginationNext(page: Page): Promise<number>;
  paginationPrevious(page: Page): Promise<number>;
  resetAndGetNumberOfLines(page: Page): Promise<number>;
  resetFilter(page: Page): Promise<void>;
  selectPaginationLimit(page: Page, number: number): Promise<number>;
  sortTable(page: Page, sortBy: string, sortDirection: string): Promise<void>;
  viewFeature(page: Page, row: number): Promise<void>;
}
