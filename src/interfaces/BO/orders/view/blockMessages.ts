import {type OrderMessage} from '@data/types/order';
import {BOViewOrderBasePageInterface} from '@interfaces/BO/orders/view/viewOrderBasePage';
import {type Page} from '@playwright/test';

export interface BOProductBlockMessagesPageInterface extends BOViewOrderBasePageInterface {
  clickOnConfigureMessageLink(page: Page): Promise<void>;
  getMessagesNumber(page: Page): Promise<number>;
  getTextMessage(page: Page, messageID?: number, messageFrom?: string): Promise<string>;
  isEmployeeIconVisible(page: Page, messageID?: number): Promise<boolean>;
  isEmployeePrivateIconVisible(page: Page, messageID?: number): Promise<boolean>;
  isMessageVisible(page: Page, messageID?: number, messageFrom?: string): Promise<boolean>;
  sendMessage(page: Page, messageData: OrderMessage): Promise<string>;
}
