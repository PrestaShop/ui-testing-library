import {ModuleConfigurationPageInterface} from '@interfaces/BO/modules/moduleConfiguration';
import {type Page} from '@playwright/test';

export interface ModulePsGdprBoTabCustomerActivityPageInterface extends ModuleConfigurationPageInterface {
  copyTable(page: Page): Promise<string>;
  exportTable(page: Page, exportType: 'csv' | 'excel' | 'pdf'): Promise<string | null>;
  getAllRowsColumnContent(page: Page, columnNth: number): Promise<string[]>;
  getNumberOfElementInGrid(page: Page): Promise<number>;
  getTextColumnFromTable(page: Page, rowNth: number, columnNth: number): Promise<string>;
  sortTable(page: Page, columnNth: number, sortDirection: string): Promise<void>;
}
