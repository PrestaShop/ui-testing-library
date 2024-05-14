import type {FoLoginPageInterface} from '@interfaces/FO/login';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): FoLoginPageInterface {
  if (semver.gte(psVersion, '0.0.0')) {
    return require('@versions/develop/pages/FO/classic/login').loginPage;
  }
  return require('@versions/develop/pages/FO/classic/login').loginPage;
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
