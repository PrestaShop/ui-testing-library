import type FakerContactMessage from '@data/faker/contactMessage';
import {FOBasePagePageInterface} from '@interfaces/FO';
import {type Page} from '@playwright/test';

export interface FoContactUsPageInterface extends FOBasePagePageInterface {
  readonly badFileExtensionErrorMessage: string;
  readonly invalidContent: string;
  readonly invalidEmail: string;
  readonly pageTitle: string;
  readonly validationMessage: string;

  getAlertError(page: Page): Promise<string>;
  getAlertSuccess(page: Page): Promise<string>;
  getEmailFieldValue(page: Page): Promise<string>;
  getEmailUsLink(page: Page): Promise<string>;
  getGDPRLabel(page: Page): Promise<string>;
  getSendButtonLabel(page: Page): Promise<string>;
  hasGDPRLabel(page: Page): Promise<boolean>;
  isAttachmentInputVisible(page: Page): Promise<boolean>;
  sendMessage(page: Page, contactUsData: FakerContactMessage, file?: string|null): Promise<void>;
}
