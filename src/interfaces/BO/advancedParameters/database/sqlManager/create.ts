import type FakerSqlQuery from '@data/faker/sqlQuery';
import {type BOBasePagePageInterface} from '@interfaces/BO';
import type {Page} from '@playwright/test';

export interface BOSQLManagerCreatePageInterface extends BOBasePagePageInterface {
  readonly editPageTitle: string;
  readonly pageTitle: string;

  createEditSQLQuery(page: Page, sqlQueryData: FakerSqlQuery): Promise<string>;
}
