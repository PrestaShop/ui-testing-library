import {type BOLogsPageInterface} from '@interfaces/BO/advancedParameters/logs';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOLogsPageInterface {
  return require('@versions/develop/pages/BO/advancedParameters/logs');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
