import type FakerBrand from '@data/faker/brand';
import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOBrandsCreatePageInterface extends BOBasePagePageInterface {
  readonly pageTitle: string;
  readonly pageTitleEdit: string;

  createEditBrand(page: Page, brandData: FakerBrand): Promise<string>;
}
