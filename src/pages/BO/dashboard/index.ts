import type {DashboardPageInterface} from '@interfaces/BO/dashboard';
import semver from 'semver';

const psVersion = global.getPSVersion();

/* eslint-disable global-require */
function requirePage(): DashboardPageInterface {
  if (semver.gte(psVersion, '8.0.0')) {
    return require('@versions/8.0.0/pages/BO/dashboard');
  }
  return require('@versions/8.0.0/pages/BO/dashboard');
}
/* eslint-enable global-require */

export default requirePage();
