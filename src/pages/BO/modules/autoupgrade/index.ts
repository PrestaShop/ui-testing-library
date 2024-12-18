import type {ModuleAutoupgradeMainPageInterface} from '@interfaces/BO/modules/autoupgrade';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-require-imports */
function requirePage(): ModuleAutoupgradeMainPageInterface {
  if (semver.gte(psVersion, '0.0.0')) {
    return require('@versions/develop/pages/BO/modules/autoupgrade');
  }
  return require('@versions/develop/pages/BO/modules/autoupgrade');
}

/* eslint-enable global-require, @typescript-eslint/no-require-imports */

export default requirePage();
