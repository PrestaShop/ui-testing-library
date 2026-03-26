import {FOBasePagePageInterface} from '@interfaces/FO';
import {type Page} from '@playwright/test';

export interface FOMyInformationsPageInterface extends FOBasePagePageInterface {
  readonly changeCommonPasswordMessage: string;
  readonly commonUsedPasswordMessage: string;
  readonly errorUpdateMessage: string;
  readonly invalidEmailAlertMessage: string;
  readonly invalidNumberOfCharacters: string;
  readonly minimumScoreAlertMessage: string;
  readonly noCommonWordsMessage: string;
  readonly noRepeatedWordsMessage: string;
  readonly noRepeatMessage: string;
  readonly pageTitle: string;
  readonly repeatGuessMessage: string;
  readonly successfulUpdateMessage: string;
  readonly top10CommonPasswordMessage: string;
  readonly veryCommonPasswordMessage: string;

  editAccount(page: Page, oldPassword: string, customer: any): Promise<string>;
  getGDPRLabel(page: Page): Promise<string>;
  getInvalidEmailAlert(page:Page):Promise<string>;
  getInvalidNewPasswordAlert(page:Page):Promise<string>;
  getInvalidPasswordAlert(page:Page):Promise<string>;
  hasGDPRLabel(page: Page): Promise<boolean>;
  unsubscribeNewsletter(page:Page, password:string):Promise<string>;
}
