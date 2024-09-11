import type FakerSupplier from '@data/faker/supplier';
import {BOBasePagePageInterface} from '@interfaces/BO';
import type {Page} from '@playwright/test';

export interface BOSuppliersCreatePageInterface extends BOBasePagePageInterface {
  readonly pageTitle: string;
  readonly pageTitleEdit: string;

  addKeywords(page: Page, keywords: string[], idLang?: number): Promise<void>;
  createEditSupplier(page: Page, supplierData: FakerSupplier): Promise<string>;
  deleteKeywords(page: Page, lang?: string): Promise<void>;
}
