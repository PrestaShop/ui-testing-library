import {type BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOThemeAndLogoBasePageInterface extends BOBasePagePageInterface
{
  deleteTheme(page: Page, themeName: string): Promise<string>;
  goToSubTabAdvancedCustomization(page: Page): Promise<void>;
  goToSubTabPagesConfiguration(page: Page): Promise<void>;
  hasSubTabAdvancedCustomization(page: Page): Promise<boolean>;
  hasSubTabPagesConfiguration(page: Page): Promise<boolean>;
  useTheme(page: Page, themeName: string): Promise<string>;
}
