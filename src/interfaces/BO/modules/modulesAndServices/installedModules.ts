import {BOBasePagePageInterface} from '@interfaces/BO';
import type {Page} from '@playwright/test';
import FakerModule from '@data/faker/module';

export interface InstalledModulesPageInterface extends BOBasePagePageInterface {
  readonly pageTitle: string;

  goToSelectionPage(page: Page): Promise<void>;
  goToModuleConfigurationPage(page: Page, moduleTag: string): Promise<void>;
  isModuleVisible(page: Page, module: FakerModule): Promise<boolean>,
  searchModule(page: Page, module: FakerModule): Promise<boolean>;
  uninstallModule(page: Page, moduleTag: string): Promise<string | null>
}
