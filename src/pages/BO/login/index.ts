import type {LoginPageInterface} from '@interfaces/BO/login';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): LoginPageInterface {
  if (semver.lt(psVersion, '8.0.0')) {
    return require('@versions/1.7.8/pages/BO/login');
  }
  if (semver.lt(psVersion, '9.0.0')) {
    return require('@versions/8.1/pages/BO/login').loginPage;
  }
  return require('@versions/develop/pages/BO/login').loginPage;
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
