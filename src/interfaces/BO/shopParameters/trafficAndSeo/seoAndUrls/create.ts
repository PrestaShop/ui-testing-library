import type FakerSeoPage from '@data/faker/seoPage';
import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOSeoUrlsCreatePageInterface extends BOBasePagePageInterface {
  readonly editPageTitle: string;
  readonly pageTitle: string;

  createEditSeoPage(page: Page, seoPageData: FakerSeoPage): Promise<string>;
}
