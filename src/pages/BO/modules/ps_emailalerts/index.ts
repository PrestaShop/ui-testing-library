import type {ModulePsEmailAlertsMainPageInterface} from '@interfaces/BO/modules/ps_emailalerts';

/* eslint-disable global-require */
function requirePage(): ModulePsEmailAlertsMainPageInterface {
  return require('@versions/develop/pages/BO/modules/ps_emailalerts');
}
/* eslint-enable global-require */

export default requirePage();
