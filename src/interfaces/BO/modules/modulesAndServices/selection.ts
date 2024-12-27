import {BOBasePagePageInterface} from '@interfaces/BO';
import type {Page} from '@playwright/test';

export interface SelectionPageInterface extends BOBasePagePageInterface {
  readonly installMessageSuccessful: (moduleTag: string) => string;
  readonly pageTitle: string;

  installModule(page: Page, moduleTag: string): Promise<string | null>;
  goToInstalledModulesPage(page: Page): Promise<void>;
}
