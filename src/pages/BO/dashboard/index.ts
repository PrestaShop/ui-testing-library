import type {DashboardPageInterface} from '@interfaces/BO/dashboard';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-require-imports */
function requirePage(): DashboardPageInterface {
  if (semver.lt(psVersion, '9.0.0')) {
    return require('@versions/develop/pages/BO/dashboard');
  }
  return require('@versions/develop/pages/BO/dashboard');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports */

export default requirePage();
