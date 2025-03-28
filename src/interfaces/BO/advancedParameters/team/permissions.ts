import {type BOBasePagePageInterface} from '@interfaces/BO';
import type {Page} from '@playwright/test';

export interface BOPermissionsPageInterface extends BOBasePagePageInterface {
  getNumberOfElementInMenu(page: Page): Promise<number>;
  getNumberOfModulesUnChecked(page: Page, permission: string): Promise<number>;
  getNumberOfPagesUnChecked(page: Page, permission: string): Promise<number>;
  goToProfileSubTab(page: Page, profileName: string): Promise<boolean>;
  isAllPermissionPerformed(page: Page, permission: string, isChecked?: boolean): Promise<boolean>;
  isBulkPermissionPerformed(page: Page, permission: string, isChecked?: boolean): Promise<boolean>;
  isPageChecked(page: Page, className: string, access: string): Promise<boolean>;
  setPermission(page: Page, className: string, access: string): Promise<boolean>;
  setPermissionOnAllModules(page: Page, permission: string, toCheck?: boolean): Promise<boolean>;
  setPermissionOnAllPages(page: Page, permission: string, toCheck?: boolean): Promise<boolean>;
}
