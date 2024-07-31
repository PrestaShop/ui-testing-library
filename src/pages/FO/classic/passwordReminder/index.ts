import {type FOPasswordReminderPageInterface} from '@interfaces/FO/passwordReminder';

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): FOPasswordReminderPageInterface {
  return require('@versions/develop/pages/FO/classic/passwordReminder').passwordReminderPage;
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
