import {type FOMyInformationsPageInterface} from '@interfaces/FO/myAccount/informations';
import {Page} from '@playwright/test';
import {FOMyInformationsPage as FOMyInformationsPageClassic} from '@versions/develop/pages/FO/classic/myAccount/informations';

/**
 * @class
 * @extends FOBasePage
 */
class FOMyInformationsPage extends FOMyInformationsPageClassic implements FOMyInformationsPageInterface {
  private readonly invalidNewPasswordRequirements: string;

  /**
   * @constructs
   * Setting up texts and selectors to use
   */
  constructor() {
    super('hummingbird');

    // FOBasePage
    this.alertSuccessBlock = '.alert-success';

    // Messages
    this.invalidNumberOfCharacters = 'Enter a password between 8 and 72 characters';

    // Selectors
    this.invalidPasswordAlertDanger = `${this.createAccountForm} label[for="field-password"] ~ div.help-block .alert`;
    this.invalidNewPasswordAlertDanger = `${this.createAccountForm} label[for="field-new_password"] ~ div.help-block .alert`;
    this.invalidNewPasswordRequirements = `${this.createAccountForm} label[for="field-new_password"] ~ `
      + 'div[data-ps-target="password-feedback-target"] div.password-requirements i.text-danger + span';
  }

  /**
   * Get invalid new password alert
   * @param page {Page} Browser tab
   * @returns {Promise<string>}
   */
  async getInvalidNewPasswordAlert(page:Page):Promise<string> {
    // Fetch validation messages
    let validationMessage = await page.locator(this.newPasswordInput).evaluate(
      (element: HTMLInputElement) => element.validationMessage,
    );
    console.log(`validationMessage: ${validationMessage}`);

    const requirementsLocators = await page.locator(this.invalidNewPasswordRequirements);
    const requirementsLocatorsCount = await requirementsLocators.count();
    console.log(`count: ${requirementsLocatorsCount}`);

    for (let i = 0; i < requirementsLocatorsCount; i++) {
      console.log(`nth(${i}): ${await requirementsLocators.nth(i).textContent()}`);
      validationMessage = validationMessage.concat(await requirementsLocators.nth(i).textContent() ?? '');
    }

    return validationMessage;
  }
}

const foMyInformationsPage = new FOMyInformationsPage();
export {foMyInformationsPage, FOMyInformationsPage};
