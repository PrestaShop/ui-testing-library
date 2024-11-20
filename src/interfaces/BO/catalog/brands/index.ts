import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOBrandsPageInterface extends BOBasePagePageInterface {
  readonly pageTitle: string;
  readonly successfulUpdateStatusMessage: string;

  bulkSetBrandsStatus(page: Page, enable?: boolean): Promise<string>;
  deleteBrand(page: Page, row?: number): Promise<string>;
  deleteBrandAddress(page: Page, row?: number): Promise<string>;
  deleteWithBulkActions(page: Page, tableName: string): Promise<string>;
  exportBrandsDataToCsv(page: Page): Promise<string | null>;
  filterAddresses(page: Page, filterType: string, filterBy: string, value?: string): Promise<void>;
  filterBrands(page: Page, filterType: string, filterBy: string, value?: string): Promise<void>;
  filterBrandsEnabled(page: Page, value: string): Promise<void>;
  getAllRowsColumnContentAddressesTable(page: Page, column: string): Promise<string[]>;
  getAllRowsColumnContentBrandsTable(page: Page, column: string): Promise<string[]>;
  getBrandInCsvFormat(page: Page, row: number): Promise<string>;
  getBrandStatus(page: Page, row: number): Promise<boolean>;
  getNumberOfElementInGrid(page: Page, tableName: string): Promise<number>;
  getTextColumnFromTableAddresses(page: Page, row: number, column: string): Promise<string>;
  getTextColumnFromTableBrands(page: Page, row: number, column: string): Promise<string>;
  goToAddNewBrandAddressPage(page: Page): Promise<void>;
  goToAddNewBrandPage(page: Page): Promise<void>;
  goToEditBrandAddressPage(page: Page, row?: number): Promise<void>;
  goToEditBrandPage(page: Page, row?: number): Promise<void>;
  goToSubTabSuppliers(page: Page): Promise<void>;
  paginationNext(page: Page, tableName: string): Promise<string>;
  paginationPrevious(page: Page, tableName: string): Promise<string>;
  resetAndGetNumberOfLines(page: Page, tableName: string): Promise<number>;
  selectPaginationLimit(page: Page, tableName: string, number: number): Promise<string>;
  setBrandStatus(page: Page, row: number, valueWanted?: boolean): Promise<boolean>;
  sortTableAddresses(page: Page, sortBy: string, sortDirection?: string): Promise<void>;
  sortTableBrands(page: Page, sortBy: string, sortDirection?: string): Promise<void>;
  viewBrand(page: Page, row?: number): Promise<void>;
}
