import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BODesignEmailThemesPageInterface extends BOBasePagePageInterface {
  readonly emailThemeConfigurationSuccessfulMessage: string;
  readonly pageTitle: string;

  previewEmailTheme(page: Page, name: string): Promise<void>;
  selectDefaultEmailTheme(page: Page, emailTheme: string): Promise<string>;
}
