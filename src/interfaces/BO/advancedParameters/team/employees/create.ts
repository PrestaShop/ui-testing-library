import {BOBasePagePageInterface} from '@interfaces/BO';
import {type Page} from '@playwright/test';
import FakerEmployee from '@data/faker/employee';

export interface BOEmployeesCreatePageInterface extends BOBasePagePageInterface {
  readonly pageTitleCreate: string;

  createEditEmployee(page: Page, employeeData: FakerEmployee): Promise<string>;
}
