import type FakerCMSPage from '@data/faker/cmsPage';
import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOCMSPagesCreatePageInterface extends BOBasePagePageInterface {
  readonly editPageTitle: (pageTitle: string) => string;
  readonly pageTitleCreate: string;

  cancelPage(page: Page): Promise<void>;
  createEditPage(page: Page, pageData: FakerCMSPage): Promise<string>;
  previewPage(page: Page): Promise<Page>;
}
