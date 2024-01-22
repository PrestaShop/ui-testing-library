import type {LoginPageInterface} from '@interfaces/BO/login';
import semver from 'semver';

const psVersion = global.getPSVersion();

/* eslint-disable global-require */
function requirePage(): LoginPageInterface {
  if (semver.gte(psVersion, '8.0.0')) {
    return require('@versions/8.0.0/pages/BO/login');
  }
  return require('@versions/8.0.0/pages/BO/login');
}
/* eslint-enable global-require */

export default requirePage();
