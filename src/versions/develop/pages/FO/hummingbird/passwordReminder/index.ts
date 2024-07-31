import {type FOPasswordReminderPageInterface} from '@interfaces/FO/passwordReminder';
import {PasswordReminderPage as PasswordReminderPageVersion} from '@versions/develop/pages/FO/classic/passwordReminder/index';

/**
 * Password Reminder page, contains functions that can be used on the page
 * @class
 * @extends FOBasePage
 */
class PasswordReminderPage extends PasswordReminderPageVersion implements FOPasswordReminderPageInterface {
  /**
   * @constructs
   * Setting up texts and selectors to use on my account page
   */
  constructor() {
    super('hummingbird');

    this.emailAddressText = 'section.renew-password > div.mb-3:nth-child(1)';
    this.sendResetLinkSuccessAlert = '#content .alert-success';
    this.errorMessageAlert = '#content .alert-danger';
  }
}

module.exports = new PasswordReminderPage();
