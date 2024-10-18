import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';
import FakerEmployeeRole from '@data/faker/employeeRole';

export interface BORolesCreatePageInterface extends BOBasePagePageInterface {
  readonly pageTitleCreate: string;
  readonly pageTitleEdit: (name: string) => string;

  createEditRole(page: Page, roleData: FakerEmployeeRole): Promise<string>;
}
