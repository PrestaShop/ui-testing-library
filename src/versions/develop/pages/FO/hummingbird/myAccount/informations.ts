import {type FOMyInformationsPageInterface} from '@interfaces/FO/myAccount/informations';
import {Page} from '@playwright/test';
import {FOMyInformationsPage as FOMyInformationsPageClassic} from '@versions/develop/pages/FO/classic/myAccount/informations';

/**
 * @class
 * @extends FOBasePage
 */
class FOMyInformationsPage extends FOMyInformationsPageClassic implements FOMyInformationsPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use
   */
  constructor() {
    super('hummingbird');

    // FOBasePage
    this.alertSuccessBlock = '.alert-success';

    // Selectors
    this.invalidPasswordAlertDanger = `${this.createAccountForm} label[for="field-password"] ~ div.help-block .alert`;
    this.invalidNewPasswordAlertDanger = `${this.createAccountForm} label[for="field-new_password"] ~ div.help-block .alert`;
  }

  /**
   * Edit account information
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

    // Force (because H2 use Validation API)
    await page.evaluate(() => {
      const form: HTMLFormElement|null = document.querySelector('form#customer-form');

      if (form) {
        form.submit();
      }
    });
    await page.waitForTimeout(3000);

    return this.getTextContent(page, this.notificationsBlock);
  }
}

const foMyInformationsPage = new FOMyInformationsPage();
export {foMyInformationsPage, FOMyInformationsPage};
