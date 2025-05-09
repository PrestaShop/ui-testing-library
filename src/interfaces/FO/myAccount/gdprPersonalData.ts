import {FOBasePagePageInterface} from '@interfaces/FO';
import {type Page} from '@playwright/test';

export interface FOMyGDPRPersonalDataPageInterface extends FOBasePagePageInterface {
  readonly pageTitle: string;

  exportDataToCSV(page: Page): Promise<string | null>;
  exportDataToPDF(page: Page): Promise<string | null>;
  goToContactUsPage(page: Page): Promise<void>;
}
