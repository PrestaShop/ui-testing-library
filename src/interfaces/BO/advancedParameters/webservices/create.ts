import type FakerWebservice from '@data/faker/webservice';
import {type BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOWebservicesCreatePageInterface extends BOBasePagePageInterface {
  readonly pageTitleCreate: string;
  readonly pageTitleEdit: string;

  createEditWebservice(page: Page, webserviceData: FakerWebservice, toGenerate?: boolean): Promise<string>;
}
