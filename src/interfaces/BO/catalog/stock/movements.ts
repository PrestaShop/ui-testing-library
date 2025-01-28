import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOStockMovementsPageInterface extends BOBasePagePageInterface {
  readonly emptyTableMessage: string;
  readonly pageTitle: string;

  clickOnMovementTypeLink(page: Page, row: number): Promise<Page>;
  getAdvancedFiltersMovementTypeChoices(page: Page): Promise<string[]>;
  getAllRowsColumnContent(page: Page, column: string): Promise<string[]>;
  getNumberOfElementInGrid(page: Page): Promise<number>;
  getTextColumnFromTable(page: Page, row: number, column: string): Promise<string>;
  getTextForEmptyTable(page: Page): Promise<string>;
  isAdvancedFiltersVisible(page: Page): Promise<boolean>;
  paginateTo(page: Page, pageNumber?: number): Promise<number>;
  resetAdvancedFilter(page: Page): Promise<void>;
  setAdvancedFiltersCategory(page: Page, categoryName: string, status?: boolean): Promise<void>;
  setAdvancedFiltersDate(page: Page, type: 'inf'|'sup', date: string, onChange?: boolean): Promise<void>;
  setAdvancedFiltersEmployee(page: Page, employeeName: string): Promise<void>;
  setAdvancedFiltersMovementType(page: Page, movementType: 'None'|'Employee Edition'|'Customer Order'): Promise<void>;
  setAdvancedFiltersStatus(page: Page, status: boolean | null): Promise<void>;
  setAdvancedFiltersVisible(page: Page): Promise<void>;
  sortTable(page: Page, sortBy: string, sortDirection: string): Promise<void>;
}
