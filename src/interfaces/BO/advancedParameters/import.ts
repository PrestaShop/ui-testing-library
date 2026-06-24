import {type BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOImportPageInterface extends BOBasePagePageInterface {
  readonly importModalTitle: string;
  readonly importPanelTitle: string;
  readonly pageTitle: string;

  abortImport(page: Page): Promise<boolean>;
  chooseFromHistoryFTP(page: Page): Promise<boolean>;
  clickOnDownloadedFile(page: Page): Promise<void>;
  closeImportModal(page: Page): Promise<boolean>;
  deleteDataMatchingConfig(page: Page): Promise<void>;
  deleteFile(page: Page, row?: number): Promise<boolean>;
  downloadSampleFile(page: Page, type: string): Promise<string | null>;
  getDataMatchingConfigs(page: Page): Promise<string>;
  getImportedFilesList(page: Page): Promise<string>;
  getImportValidationMessage(page: Page): Promise<string>;
  goToImportNextStep(page: Page): Promise<string>;
  isChooseFromHistoryButtonVisible(page: Page): Promise<boolean>;
  isForceAllIDNumbersVisible(page: Page): Promise<boolean>;
  isLoadDataMatchingConfigVisible(page: Page): Promise<boolean>;
  loadDataMatchingConfig(page: Page, name: string): Promise<void>;
  saveDataMatchingConfig(page: Page, name: string): Promise<void>;
  selectFileType(page: Page, fileType: string): Promise<void>;
  setForceAllIDNumbers(page: Page, toEnable?: boolean): Promise<void>;
  setMatchReferences(page: Page, toEnable?: boolean): Promise<void>;
  setTruncate(page: Page, toEnable?: boolean): Promise<void>;
  startFileImport(page: Page): Promise<string>;
  uploadImportFile(page: Page, fileType: string, filePath: string): Promise<string>;
  useFile(page: Page, row?: number): Promise<string>;
}
