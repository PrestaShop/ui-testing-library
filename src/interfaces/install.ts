import {type CommonPageInterface} from '@interfaces/index';
import {type Page} from '@playwright/test';

export interface InstallPageInterface extends CommonPageInterface {
  readonly fifthStepEnTitle: string;
  readonly finalStepEnTitle: string;
  readonly firstStepEnTitle: string;
  readonly firstStepFrTitle: string;
  readonly fourthStepEnTitle: string;
  readonly secondStepEnTitle: string;
  readonly sixthStepEnTitle: string;
  readonly thirdStepEnTitle: string;

  agreeToTermsAndConditions(page: Page):Promise<void>;
  fillDatabaseForm(page: Page): Promise<void>;
  fillInformationForm(page: Page): Promise<void>;
  getStepTitle(page : Page, step: string): Promise<string>;
  goToFOAfterInstall(page: Page): Promise<Page>;
  isDatabaseConnected(page: Page): Promise<boolean>;
  isInstallationInProgress(page: Page): Promise<boolean>;
  isInstallationStepFinished(page: Page, step: string, timeout?: number): Promise<boolean>;
  isInstallationSuccessful(page: Page): Promise<boolean>;
  isThirdStepVisible(page: Page): Promise<boolean>;
  nextStep(page: Page): Promise<void>;
  setInstallLanguage(page: Page): Promise<void>;
  waitForFinishedFifthStep(page: Page): Promise<void>;
  waitForFinishedForthStep(page: Page): Promise<void>;
}
