import ImportContent from '@data/types/localization';
import {type BOLocalizationBasePageInterface} from '@interfaces/BO/international/localization/base';
import type {Page} from '@playwright/test';

export interface BOLocalizationPageInterface extends BOLocalizationBasePageInterface {
  readonly importLocalizationPackSuccessfulMessage: string;
  readonly pageTitle: string;
  readonly successfulSettingsUpdateMessage: string;

  importLocalizationPack(
    page: Page,
    country: string,
    contentToImport: ImportContent,
    downloadPackData?: boolean,
  ): Promise<string>;
  setDefaultCountry(page: Page, country: string): Promise<string>;
  setDefaultCurrency(page: Page, currency: string): Promise<string>;
  setDefaultLanguage(page: Page, language: string, languageFromBrowser?: boolean): Promise<string>
}
