import {BOBasePagePageInterface} from '@interfaces/BO';
import type {Page} from '@playwright/test';

export interface MarketplacePageInterface extends BOBasePagePageInterface {
  readonly installMessageSuccessful: (moduleTag: string) => string;
  readonly pageTitle: string;

  goToMarketplacePage(page: Page): Promise<void>;
  installModule(page: Page, moduleTag: string): Promise<string|null>;
  goToModuleConfigurationPage(page:Page):Promise<void>;
}
