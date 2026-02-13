import type {BOTagsCreatePageInterface} from '@interfaces/BO/shopParameters/search/tags/create';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOTagsCreatePageInterface {
  if (semver.lt(psVersion, '9.2.0')) {
    return require('@versions/9.1/pages/BO/shopParameters/search/tags/create').boTagsCreatePage;
  }
  return require('@versions/develop/pages/BO/shopParameters/search/tags/create').boTagsCreatePage;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
