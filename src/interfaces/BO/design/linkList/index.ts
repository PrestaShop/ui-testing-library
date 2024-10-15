import {BOBasePagePageInterface} from '@interfaces/BO';

import type {Page} from '@playwright/test';

import FakerLinkWidget from '@data/faker/linkWidget';
import {LinkWidgetPage} from '@data/types/linkWidget';

export interface BODesignLinkListPageInterface extends BOBasePagePageInterface {
  readonly pageTitle: string;

  deleteLinkWidget(page: Page, hookName: string, row: number): Promise<string>;
  getAllRowsColumnContent(page: Page, columnName: string, sortColumnName: string, hookName: string): Promise<string[]>;
  getNumberOfElementInGrid(page: Page, hookName: string): Promise<number>;
  getTextColumn(page: Page, row: number, columnName: string, sortColumnName: string, hookName: string): Promise<string>;
  goToEditBlock(page: Page, hookName: string, row: number): Promise<void>;
  goToNewLinkWidgetPage(page: Page): Promise<void>;
  sortLinkWidget(page: Page, sortBy: string, sortDirection: string, hookName: string): Promise<void>;
}
