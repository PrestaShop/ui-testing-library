import type FakerAttribute from '@data/faker/attribute';
import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOAttributesCreatePageInterface extends BOBasePagePageInterface {
  readonly createPageTitle: string;
  readonly editPageTitle: (name: string) => string;

  addEditAttribute(page: Page, attributeData: FakerAttribute): Promise<string>;
  getValue(page: Page, inputName: string, languageId?: number): Promise<string>;
}
