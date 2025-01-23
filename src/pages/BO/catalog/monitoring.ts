import {type BOMonitoringPageInterface} from '@interfaces/BO/catalog/monitoring';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOMonitoringPageInterface {
  return require('@versions/develop/pages/BO/catalog/monitoring');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
