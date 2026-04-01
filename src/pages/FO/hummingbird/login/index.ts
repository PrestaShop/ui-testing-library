import type {FoLoginPageInterface} from '@interfaces/FO/login';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-require-imports */
function requirePage(): FoLoginPageInterface {
  if (semver.lt(psVersion, '9.1.0')) {
    return require('@versions/9.0/pages/FO/hummingbird/login').foLoginPage;
  }
  return require('@versions/develop/pages/FO/hummingbird/login').foLoginPage;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports */

export default requirePage();
