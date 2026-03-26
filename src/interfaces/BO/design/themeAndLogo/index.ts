import {type BOThemeAndLogoBasePageInterface} from '@interfaces/BO/design/themeAndLogo/base';
import {type Page} from '@playwright/test';

export interface BOThemeAndLogoPageInterface extends BOThemeAndLogoBasePageInterface {
  readonly pageTitle: string;
  readonly successExportMessage: string;

  enableTheme(page: Page, themeName: string): Promise<string>;
  exportCurrentTheme(page: Page): Promise<string>;
  getNumberOfThemes(page: Page): Promise<number>;
  goToChooseLayoutsPage(page: Page): Promise<void>;
  goToNewThemePage(page: Page): Promise<void>;
  removeTheme(page: Page, themeName: string): Promise<string>;
}
