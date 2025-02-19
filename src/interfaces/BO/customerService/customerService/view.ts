import type FakerContactMessage from '@data/faker/contactMessage';
import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOCustomerServiceViewPageInterface extends BOBasePagePageInterface {
  readonly forwardMessageSuccessMessage: string;
  readonly pageTitle: string;

  addResponse(page: Page, response: string): Promise<void>;
  clickOnForwardMessageButton(page: Page): Promise<boolean>;
  forwardMessage(page: Page, messageData: FakerContactMessage): Promise<void>;
  getAttachedFileHref(page: Page): Promise<string>;
  getBadgeNumber(page: Page): Promise<string>;
  getCustomerMessage(page: Page): Promise<string>;
  getOrdersAndMessagesTimeline(page: Page): Promise<string>;
  getThreadMessages(page: Page): Promise<string>;
  getYourAnswerFormContent(page: Page): Promise<string>;
  getYourAnswerFormTitle(page: Page): Promise<string>;
  setStatus(page: Page, status: string): Promise<string>;
}
