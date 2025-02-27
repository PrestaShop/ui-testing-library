import {type FOBasePagePageInterface} from '@interfaces/FO';
import type {Page} from '@playwright/test';

export interface FoStoresPageInterface extends FOBasePagePageInterface {
  readonly pageTitle: string;

  getStoreImageMain(page: Page, idStore: number): Promise<string|null>;
}
