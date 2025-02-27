import type {BOSearchPageInterface} from '@interfaces/BO/shopParameters/search';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOSearchPageInterface {
  if (semver.lt(psVersion, '9.0.0')) {
    return require('@versions/8.2/pages/BO/shopParameters/search');
  }
  return require('@versions/develop/pages/BO/shopParameters/search').boSearchPage;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
