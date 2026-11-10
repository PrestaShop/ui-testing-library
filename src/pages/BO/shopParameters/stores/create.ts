import type {BOStoresCreatePageInterface} from '@interfaces/BO/shopParameters/stores/create';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOStoresCreatePageInterface {
  if (semver.lt(psVersion, '9.3.0')) {
    return require('@versions/9.2/pages/BO/shopParameters/stores/create');
  }
  return require('@versions/develop/pages/BO/shopParameters/stores/create');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
