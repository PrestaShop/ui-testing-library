import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BODesignEmailThemesPageInterface extends BOBasePagePageInterface {
  readonly emailThemeConfigurationSuccessfulMessage: string;
  readonly pageTitle: string;
  readonly pageTitleFR: string;

  configureGenerateEmails(page: Page, theme: string, language: string, themeToOvewrite: string, overwrite: boolean)
    : Promise<string>;
  previewEmailTheme(page: Page, name: string): Promise<void>;
  selectDefaultEmailTheme(page: Page, emailTheme: string): Promise<string>;
  selectTranslateEmailLanguage(page: Page, language: string): Promise<void>;
}
