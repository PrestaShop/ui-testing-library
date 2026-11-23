import type FakerCMSCategory from '@data/faker/cmsCategory';
import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOCMSPageCategoriesCreatePageInterface extends BOBasePagePageInterface {
  readonly pageTitleCreate: string;
  readonly pageTitleEdit: string;

  cancelPageCategory(page: Page): Promise<void>;
  createEditPageCategory(page: Page, pageCategoryData: FakerCMSCategory): Promise<string>;
  getSelectedParentCategoryId(page: Page): Promise<number>;
}
