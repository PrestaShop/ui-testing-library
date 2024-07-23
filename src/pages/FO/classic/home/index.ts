import type {FoHomePageInterface} from '@interfaces/FO/home';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): FoHomePageInterface {
  // >= 9.0
  if (semver.gte(psVersion, '9.0.0')) {
    return require('@versions/develop/pages/FO/classic/home').homePage;
  }
  return require('@versions/8.1/pages/FO/classic/home');
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
