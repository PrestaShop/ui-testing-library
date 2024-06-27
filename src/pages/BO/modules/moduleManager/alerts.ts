import type {ModuleManagerAlertsPageInterface} from '@interfaces/BO/modules/moduleManager/alerts';

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): ModuleManagerAlertsPageInterface {
  return require('@versions/develop/pages/BO/modules/moduleManager/alerts');
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
