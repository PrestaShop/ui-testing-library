import FakerContact from '@data/faker/contact';
import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOContactsCreatePageInterface extends BOBasePagePageInterface {
  readonly pageTitleCreate: string;
  readonly pageTitleEdit: string;

  createEditContact(page: Page, contactData: FakerContact): Promise<string>;
}
