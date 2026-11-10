import type {BOStoresPageInterface} from '@interfaces/BO/shopParameters/stores';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOStoresPageInterface {
  if (semver.lt(psVersion, '9.3.0')) {
    return require('@versions/9.2/pages/BO/shopParameters/stores');
  }
  return require('@versions/develop/pages/BO/shopParameters/stores');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
