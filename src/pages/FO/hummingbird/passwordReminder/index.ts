import {type FOPasswordReminderPageInterface} from '@interfaces/FO/passwordReminder';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): FOPasswordReminderPageInterface {
  return require('@versions/develop/pages/FO/hummingbird/passwordReminder');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
