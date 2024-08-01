import type {DashboardPageInterface} from '@interfaces/BO/dashboard';
import utilsTest from '@utils/test';
import semver from 'semver';

const psVersion = utilsTest.getPSVersion();

/* eslint-disable global-require */
function requirePage(): DashboardPageInterface {
  if (semver.gte(psVersion, '0.0.0')) {
    return require('@versions/develop/pages/BO/dashboard');
  }
  return require('@versions/develop/pages/BO/dashboard');
}
/* eslint-enable global-require */

export default requirePage();
