import type {FoHomePageInterface} from '@interfaces/FO/home';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): FoHomePageInterface {
  // >= 1.7.7.9
  if (semver.gte(psVersion, '7.7.0')) {
    return require('@versions/develop/pages/FO/classic/home').homePage;
  }
  return require('@versions/1.7.6/pages/FO/classic/home');
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
