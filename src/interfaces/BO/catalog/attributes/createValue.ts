import type FakerAttributeValue from '@data/faker/attributeValue';
import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';

export interface BOAttributesValueCreatePageInterface extends BOBasePagePageInterface {
  readonly createPageTitle: string;
  readonly editPageTitle: (name: string) => string;

  addEditValue(page: Page, valueData: FakerAttributeValue, saveAndStay?: boolean): Promise<string>;
  getInputValue(page: Page, input: string, languageId?: number): Promise<string>;
}
