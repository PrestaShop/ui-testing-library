import {type BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOImportPageInterface extends BOBasePagePageInterface {
  readonly importModalTitle: string;
  readonly importPanelTitle: string;
  readonly pageTitle: string;

  chooseFromHistoryFTP(page: Page): Promise<boolean>;
  clickOnDownloadedFile(page: Page): Promise<void>;
  closeImportModal(page: Page): Promise<boolean>;
  deleteFile(page: Page, row?: number): Promise<boolean>;
  downloadSampleFile(page: Page, type: string): Promise<string | null>;
  getImportedFilesList(page: Page): Promise<string>;
  getImportValidationMessage(page: Page): Promise<string>;
  goToImportNextStep(page: Page): Promise<string>;
  isChooseFromHistoryButtonVisible(page: Page): Promise<boolean>;
  isForceAllIDNumbersVisible(page: Page): Promise<boolean>;
  selectFileType(page: Page, fileType: string): Promise<void>;
  setForceAllIDNumbers(page: Page, toEnable?: boolean): Promise<void>;
  startFileImport(page: Page): Promise<string>;
  uploadImportFile(page: Page, fileType: string, filePath: string): Promise<string>;
  useFile(page: Page, row?: number): Promise<string>;
}
