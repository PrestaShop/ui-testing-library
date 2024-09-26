import type FakerEmployee from '@data/faker/employee';
import {type BOTeamBasePageInterface} from '@interfaces/BO/advancedParameters/team/base';
import type {Page} from '@playwright/test';

export interface BOMyProfilePageInterface extends BOTeamBasePageInterface {
  readonly errorInvalidFirstNameMessage: string;
  readonly errorInvalidFormatImageMessage: string;
  readonly errorInvalidLastNameMessage: string;
  readonly successfulUpdateMessageFR: string;

  getAlertError(page: Page): Promise<string>;
  getAlertSuccess(page: Page): Promise<string>;
  isGravatarEnabled(page: Page): Promise<boolean>;
  updateEditEmployee(page: Page, currentPassword: string, newEmployeeData: FakerEmployee): Promise<void>;
}
