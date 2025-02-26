import {type ImageTypeRegeneration, type ImageTypeRegenerationSpecific} from '@data/types/imageType';
import {BOBasePagePageInterface} from '@interfaces/BO';
import type {Page} from '@playwright/test';

export interface BOImageSettingsPageInterface extends BOBasePagePageInterface {
  readonly messageSettingsUpdated: string;
  readonly messageThumbnailsRegenerated: string;
  readonly pageTitle: string;

  bulkDeleteImageTypes(page: Page): Promise<string>;
  deleteImageType(page: Page, row: number, deleteLinkedImages?: boolean): Promise<string>;
  filterTable(page: Page, filterType: string, filterBy: string, value: string): Promise<void>;
  getAllRowsColumnContent(page: Page, columnName: string): Promise<string[]>;
  getImageTypeStatus(page: Page, row: number, columnName: string): Promise<boolean>;
  getNumberOfElementInGrid(page: Page): Promise<number>;
  getRegenerateThumbnailsFormats(
    page: Page,
    image: ImageTypeRegeneration|ImageTypeRegenerationSpecific,
  ): Promise<string[]>;
  getRegenerateThumbnailsImage(page: Page): Promise<string>;
  getTextColumn(page: Page, row: number, columnName: string): Promise<string>;
  gotoEditImageTypePage(page: Page, row: number): Promise<void>;
  goToNewImageTypePage(page: Page): Promise<void>;
  isBaseFormatToGenerateChecked(page: Page, baseFormat: string): Promise<boolean>;
  isImageFormatToGenerateChecked(page: Page, imageFormat: string): Promise<boolean>;
  isImageFormatToGenerateDisabled(page: Page, imageFormat: string): Promise<boolean>;
  paginationNext(page: Page): Promise<string>;
  paginationPrevious(page: Page): Promise<string>;
  regenerateThumbnails(
    page: Page,
    image?: ImageTypeRegeneration,
    format?: string,
    erasePreviousImages?: boolean,
  ): Promise<string>;
  resetAndGetNumberOfLines(page: Page): Promise<number>;
  resetFilter(page: Page): Promise<void>;
  selectPaginationLimit(page: Page, number: number): Promise<string>;
  setBaseFormatChecked(page: Page, baseFormat: string, valueWanted: boolean): Promise<string>;
  setImageFormatToGenerateChecked(page: Page, imageFormat: string, valueWanted: boolean): Promise<string>;
  sortTable(page: Page, sortBy: string, sortDirection: string): Promise<void>;
}
