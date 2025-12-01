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

    // Selectors
    this.invalidPasswordAlertDanger = `${this.createAccountForm} div.field-password-policy div.alert-danger`;
    this.invalidNewPasswordAlertDanger = `${this.createAccountForm} div:nth-child(6) div.help-block`;
  }

  /**
   * Edit account information
   * ---- ISO to Classic ----
   * @param page {Page} Browser tab
   * @param oldPassword {string} The old password
   * @param customer {object} Customer's information to fill form
   * @returns {Promise<string>}
   */
  async editAccount(page: Page, oldPassword: string, customer: any): Promise<string> {
    await page
      .locator(this.genderRadioButton(this.theme, customer.socialTitle === 'Mr.' ? 1 : 2))
      .evaluate((el: HTMLElement) => el.click());
    await this.setValue(page, this.firstNameInput, customer.firstName);
    await this.setValue(page, this.lastNameInput, customer.lastName);
    await this.setValue(page, this.newEmailInput, customer.email);
    await this.setValue(page, this.passwordInput, oldPassword);
    await this.setValue(page, this.newPasswordInput, customer.password);

    await this.setValue(
      page,
      this.birthdateInput,
      `${customer.monthOfBirth}/${customer.dayOfBirth}/${customer.yearOfBirth}`,
    );

    await this.setChecked(page, this.customerPrivacyCheckbox);
    if (await this.elementVisible(page, this.psgdprCheckbox, 500)) {
      await this.setChecked(page, this.psgdprCheckbox);
    }

    await this.clickAndWaitForLoadState(page, this.saveButton);

    return this.getTextContent(page, this.notificationsBlock);
  }
}

const foMyInformationsPage = new FOMyInformationsPage();
export {foMyInformationsPage, FOMyInformationsPage};
