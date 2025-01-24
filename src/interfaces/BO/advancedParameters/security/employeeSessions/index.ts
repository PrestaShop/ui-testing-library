import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOEmployeeSessionsPageInterface extends BOBasePagePageInterface {
  readonly pageTitle: string;

}
