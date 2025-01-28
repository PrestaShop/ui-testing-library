import type FakerCategory from '@data/faker/category';
import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOCategoriesCreatePageInterface extends BOBasePagePageInterface {
  readonly pageTitleCreate: string;
  readonly pageTitleEdit: string;

  createEditCategory(page: Page, categoryData: FakerCategory): Promise<string>;
  editHomeCategory(page: Page, categoryData: FakerCategory): Promise<string>;
  getValue(page: Page, inputName: string): Promise<string>;
}
