import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOCustomerSessionsPageInterface extends BOBasePagePageInterface {
  readonly pageTitle: string;

}
