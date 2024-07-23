import {type BOThemeAndLogoBasePageInterface} from '@interfaces/BO/design/themeAndLogo/base';
import {type Page} from '@playwright/test';

export interface BOThemeAvancedConfigurationPageInterface extends BOThemeAndLogoBasePageInterface {
  readonly pageTitle: string;

  clickHowToUseParentsChildThemesLink(page: Page): Promise<Page>;
  clickOnUploadChildThemeButton(page: Page): Promise<string>;
  closeModal(page: Page): Promise<boolean>;
  downloadTheme(page: Page): Promise<string|null>;
  getHowToUseParentsChildThemesLink(page: Page): Promise<string>;
  uploadTheme(page: Page, filePath: string): Promise<string>;
}
