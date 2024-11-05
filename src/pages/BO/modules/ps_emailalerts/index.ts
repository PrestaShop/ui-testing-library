import type {ModulePsEmailAlertsMainPageInterface} from '@interfaces/BO/modules/ps_emailalerts';

/* eslint-disable global-require, @typescript-eslint/no-require-imports */
function requirePage(): ModulePsEmailAlertsMainPageInterface {
  return require('@versions/develop/pages/BO/modules/ps_emailalerts');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports */

export default requirePage();
