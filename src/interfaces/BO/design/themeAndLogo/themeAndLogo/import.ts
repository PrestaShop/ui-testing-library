import {type BOThemeAndLogoBasePageInterface} from '@interfaces/BO/design/themeAndLogo/base';
import {type Page} from '@playwright/test';

export interface BOThemeAndLogoImportPageInterface extends BOThemeAndLogoBasePageInterface {
  readonly pageTitle: string;

  importFromFTP(page: Page, zipName: string): Promise<void>;
  importFromWeb(page: Page, themeUrl: string): Promise<void>;
  importFromYourComputer(page: Page, path: string): Promise<void>;
}
