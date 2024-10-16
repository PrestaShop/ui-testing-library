import {BOBasePagePageInterface} from '@interfaces/BO';

import type {Page} from '@playwright/test';

import FakerLinkWidget from '@data/faker/linkWidget';
import {LinkWidgetPage} from '@data/types/linkWidget';

export interface BODesignLinkListCreatePageInterface extends BOBasePagePageInterface {
  readonly pageTitle: string;

  addCustomPages(page: Page, customPages: LinkWidgetPage[], idCustomPage?: number): Promise<void>;
  addLinkWidget(page: Page, linkWidgetData: FakerLinkWidget, idCustomPage?: number): Promise<string>;
  changeLanguage(page: Page, lang: string): Promise<void>;
  saveForm(page: Page): Promise<string>;
  selectContentPages(page: Page, contentPages: string[]): Promise<void>;
  selectProductPages(page: Page, productPages: string[]): Promise<void>;
  selectStaticPages(page: Page, staticPages: string[]): Promise<void>;
}
