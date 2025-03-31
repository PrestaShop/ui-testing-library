import {BOBasePagePageInterface} from '@interfaces/BO';
import {Page} from '@playwright/test';

export interface BOSearchResultsPageInterface extends BOBasePagePageInterface {
  readonly pageTitle: string;

  getNumberResults(page: Page, type?: string): Promise<number>;
  getSearchPanelsLinksNumber(page: Page): Promise<number>;
  getSearchPanelsLinkText(page: Page, nthLink: number): Promise<string>;
  getSearchPanelsLinkURL(page: Page, nthLink: number): Promise<string>;
  getTextColumn(page: Page, type: string, row: number, columnName: string): Promise<string>;
}
