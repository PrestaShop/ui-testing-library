import type {ModuleAutoupgradeMainPageInterface} from '@interfaces/BO/modules/autoupgrade';
import semver from 'semver';
import testContext from '@utils/test';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-require-imports */
function requirePage(): ModuleAutoupgradeMainPageInterface {
  if (semver.lt(psVersion, '7.4.0')) {
    return require('@versions/1.7.3/pages/BO/modules/autoupgrade').autoupgrade;
  }
  return require('@versions/develop/pages/BO/modules/autoupgrade').autoupgrade;
}

/* eslint-enable global-require, @typescript-eslint/no-require-imports */

export default requirePage();
