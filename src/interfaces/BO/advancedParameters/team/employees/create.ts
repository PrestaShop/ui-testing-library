import {BOTeamBasePageInterface} from '@interfaces/BO/advancedParameters/team/base';
import {type Page} from '@playwright/test';
import FakerEmployee from '@data/faker/employee';

export interface BOEmployeesCreatePageInterface extends BOTeamBasePageInterface {
  readonly pageTitleCreate: string;

  createEditEmployee(page: Page, employeeData: FakerEmployee): Promise<string>;
}
