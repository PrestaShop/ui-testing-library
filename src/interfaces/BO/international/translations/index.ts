import {BOBasePagePageInterface} from '@interfaces/BO';

import type {Page} from '@playwright/test';

export interface BOTranslationsPageInterface extends BOBasePagePageInterface {
  readonly pageTitle: string;
  readonly successAlertMessage: string;
  readonly validationMessage: string;
  readonly validationResetMessage: string;

  addUpdateLanguage(page: Page, language: string): Promise<string>;
  exportInstalledModuleTranslations(page: Page, language: string, module: string): Promise<string | null>;
  exportPrestashopTranslations(page: Page, language: string, types: string[]): Promise<string | null>;
  getLanguagesFromUpdateResult(page: Page): Promise<string>;
  modifyTranslation(page: Page, translation: string, theme: string, language: string, 
                    module: string, emailType: string): Promise<void>
  resetTranslation(page: Page): Promise<string>;
  searchTranslation(page: Page, expression: string): Promise<void>;
  selectExportLanguage(page: Page, language: string): Promise<void>;
  translateExpression(page: Page, translation: string): Promise<string>;
  uncheckSelectedOptions(page: Page, types: string[]): Promise<void>;
}

