import type {LoginPageInterface} from '@interfaces/BO/login';
import testContext from '@utils/testContext';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require */
function requirePage(): LoginPageInterface {
  if (semver.gte(psVersion, '0.0.0')) {
    return require('@versions/develop/pages/BO/login');
  }
  return require('@versions/develop/pages/BO/login');
}
/* eslint-enable global-require */

export default requirePage();
