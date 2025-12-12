import {type FOMyInformationsPageInterface} from '@interfaces/FO/myAccount/informations';
import {type Page} from '@playwright/test';
import {FOMyInformationsPage as FOMyInformationsPageVersion} from '@versions/develop/pages/FO/hummingbird/myAccount/informations';

/**
 * Hummingbird 1
 * @class
 * @extends MyAccountPageVersion
 */
class FOMyInformationsPage extends FOMyInformationsPageVersion implements FOMyInformationsPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use on create products page
   */
  constructor() {
    super();

    // FOBasePage
    this.alertSuccessBlock = '.alert-success ul li';

    // Messages
    this.invalidNumberOfCharacters = 'Password must be between 8 and 72 characters long';

    // Selectors
    this.invalidPasswordAlertDanger = `${this.createAccountForm} div.field-password-policy div.alert-danger`;
    this.invalidNewPasswordAlertDanger = `${this.createAccountForm} div:nth-child(6) div.help-block`;
  }

  /**
   * Get invalid new password alert
   * @param page {Page} Browser tab
   * @returns {Promise<string>}
   */
  async getInvalidNewPasswordAlert(page:Page):Promise<string> {
    return this.getTextContent(page, this.invalidNewPasswordAlertDanger);
  }
}

const foMyInformationsPage = new FOMyInformationsPage();
export {foMyInformationsPage, FOMyInformationsPage};
