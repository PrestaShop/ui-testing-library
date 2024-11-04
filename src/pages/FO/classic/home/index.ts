import type {FoHomePageInterface} from '@interfaces/FO/home';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): FoHomePageInterface {
  // < 1.7.7.0
  if (semver.lt(psVersion, '7.7.0')) {
    return require('@versions/1.7.6/pages/FO/classic/home');
  }
  if (semver.lt(psVersion, '7.8.0')) {
    return require('@versions/1.7.7/pages/FO/classic/home').foHomePage;
  }
  // < 9.0.0
  if (semver.lt(psVersion, '9.0.0')) {
    return require('@versions/8.1/pages/FO/classic/home').foHomePage;
  }
  return require('@versions/develop/pages/FO/classic/home').foHomePage;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
