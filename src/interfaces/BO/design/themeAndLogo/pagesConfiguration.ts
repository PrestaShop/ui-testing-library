import type FakerModule from '@data/faker/module';
import {type BOThemeAndLogoBasePageInterface} from '@interfaces/BO/design/themeAndLogo/base';
import {type Page} from '@playwright/test';

export interface BOPagesConfigurationPageInterface extends BOThemeAndLogoBasePageInterface {
  readonly pageTitle: string;
  readonly successMessage: string;

  setActionInModule(page: Page, module: FakerModule, action: string): Promise<string | null>;
}
