import type {BOAliasCreatePageInterface} from '@interfaces/BO/shopParameters/search/alias/create';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOAliasCreatePageInterface {
  if (semver.lt(psVersion, '9.0.0')) {
    return require('@versions/8.2/pages/BO/shopParameters/search/alias/create');
  }
  return require('@versions/develop/pages/BO/shopParameters/search/alias/create').boSearchAliasCreatePage;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
