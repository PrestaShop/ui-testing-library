import type {FoLoginPageInterface} from '@interfaces/FO/login';
import testContext from '@utils/testContext';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): FoLoginPageInterface {
  if (semver.gte(psVersion, '8.0.0')) {
    return require('@versions/8.0.0/pages/FO/login').loginPage;
  }
  return require('@versions/8.0.0/pages/FO/login').loginPage;
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
