import type {BOTagsPageInterface} from '@interfaces/BO/shopParameters/search/tags';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOTagsPageInterface {
  if (semver.lt(psVersion, '9.2.0')) {
    return require('@versions/9.1/pages/BO/shopParameters/search/tags').boTagsPage;
  }
  return require('@versions/develop/pages/BO/shopParameters/search/tags').boTagsPage;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
