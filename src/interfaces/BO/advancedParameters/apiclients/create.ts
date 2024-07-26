import type FakerAPIClient from '@data/faker/apiClient';
import {BOBasePagePageInterface} from '@interfaces/BO';
import type {Page} from '@playwright/test';

export interface BOApiClientsCreatePageInterface extends BOBasePagePageInterface {
  readonly apiClientGeneratedMessage: string;
  readonly apiClientRegeneratedMessage: string;
  readonly pageTitleCreate: string;
  readonly pageTitleEdit: (apiClientName: string) => string

  addAPIClient(page: Page, apiClientData: FakerAPIClient): Promise<string>;
  copyClientSecret(page: Page): Promise<void>;
  getApiScopes(page: Page, group: string, isChecked?: boolean): Promise<string[]>;
  getClientSecret(page: Page): Promise<string>;
  getValue(page: Page, inputName: string): Promise<string>;
  hasScopes(page: Page): Promise<boolean>;
  isAPIScopeChecked(page: Page, scope: string): Promise<boolean>;
  isAPIScopeDisabled(page: Page, scope: string): Promise<boolean>;
  isEnabled(page: Page): Promise<boolean>;
  regenerateClientSecret(page: Page): Promise<string>;
  saveForm(page: Page): Promise<string>;
  setEnabled(page: Page, valueWanted?: boolean): Promise<boolean>;
}
