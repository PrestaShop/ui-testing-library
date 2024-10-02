import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BODesignEmailThemesPreviewPageInterface extends BOBasePagePageInterface {
  readonly errorMessageSendEmail: string;
  readonly pageTitle: string;
  readonly pageTitleFR: string;
  readonly successMessageSendEmail: (layout: string) => string;
  readonly successMessageSendEmailFR: (layout: string) => string;

  getNumberOfLayoutInGrid(page: Page): Promise<number>;
  getTextFromViewLayoutPage(page: Page): Promise<string>;
  goBackToEmailThemesPage(page: Page): Promise<void>;
  sendTestEmail(page: Page, row: number): Promise<String>;
  viewHTTPLink(page: Page, row: number): Promise<Page>;
  viewRawHtml(page: Page, row: number): Promise<Page>;
  viewRawText(page: Page, row: number): Promise<Page>;
}
