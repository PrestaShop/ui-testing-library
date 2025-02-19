import type FakerOrderMessage from '@data/faker/orderMessage';
import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOOrderMessagesCreatePageInterface extends BOBasePagePageInterface {
  readonly pageTitle: string;
  readonly pageTitleEdit: string;
  readonly pageTitleView: string;

  addEditOrderMessage(page: Page, orderMessageData: FakerOrderMessage): Promise<string>;
}
