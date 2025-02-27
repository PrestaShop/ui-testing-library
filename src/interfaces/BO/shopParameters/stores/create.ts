import type FakerStore from '@data/faker/store';
import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOStoresCreatePageInterface extends BOBasePagePageInterface {
  readonly pageTitleCreate: string;
  readonly pageTitleEdit: string;

  createEditStore(page: Page, storeData: FakerStore): Promise<string>;
  getInputValue(page: Page, inputName: string, languageId?: string): Promise<string>;
  getSelectValue(page: Page, name: string): Promise<string>;
  isActive(page: Page, toggle: string): Promise<boolean>;
}
