import type {ModuleAutoupgradeMainPageInterface} from '@interfaces/BO/modules/autoupgrade';
import testContext from '@utils/test';

/* eslint-disable global-require, @typescript-eslint/no-require-imports */
function requirePage(): ModuleAutoupgradeMainPageInterface {
  return require('@versions/develop/pages/BO/modules/autoupgrade');
}

/* eslint-enable global-require, @typescript-eslint/no-require-imports */

export default requirePage();
