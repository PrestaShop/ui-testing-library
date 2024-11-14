import type {FoLoginPageInterface} from '@interfaces/FO/login';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): FoLoginPageInterface {
  if (semver.lte(psVersion, '7.3.0')) {
    return require('@versions/1.7.2/pages/FO/classic/login').loginPage;
  }
  return require('@versions/develop/pages/FO/classic/login').loginPage;
}

/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
