import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOZonesPageInterface extends BOBasePagePageInterface {
  readonly pageTitle: string;

  bulkDeleteZones(page: Page): Promise<string>;
  bulkSetStatus(page: Page, wantedStatus: boolean): Promise<string>;
  deleteZone(page: Page, row: number): Promise<string>;
  filterZones(page: Page, filterType: string, filterBy: string, value?: string): Promise<void>;
  getAllRowsColumnContent(page: Page, columnName: string): Promise<string[]>;
  getNumberOfElementInGrid(page: Page): Promise<number>;
  getTextColumn(page: Page, row: number, columnName: string): Promise<string>;
  getZoneStatus(page: Page, row: number): Promise<boolean>;
  goToAddNewZonePage(page: Page): Promise<void>;
  goToEditZonePage(page: Page, row: number): Promise<void>;
  goToSubTabCountries(page: Page): Promise<void>;
  goToSubTabStates(page: Page): Promise<void>;
  paginationNext(page: Page): Promise<string>;
  paginationPrevious(page: Page): Promise<string>;
  resetAndGetNumberOfLines(page: Page): Promise<number>;
  selectPaginationLimit(page: Page, number: number): Promise<string>;
  setZoneStatus(page: Page, row: number, wantedStatus: boolean): Promise<boolean>;
  sortTable(page: Page, sortBy: string, sortDirection: string): Promise<void>;
}
