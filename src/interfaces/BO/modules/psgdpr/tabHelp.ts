import {ModuleConfigurationPageInterface} from '@interfaces/BO/modules/moduleConfiguration';
import {type Page} from '@playwright/test';

export interface ModulePsGdprBoTabHelpPageInterface extends ModuleConfigurationPageInterface {
  clickQuestion(page: Page, groupName: string, nthQuestion: number): Promise<boolean>;
  downloadDocumentation(page: Page): Promise<string|null>;
  getCountQuestions(page: Page, groupName: string): Promise<number>;
}
