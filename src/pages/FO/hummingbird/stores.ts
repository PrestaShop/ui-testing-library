import type {FoStoresPageInterface} from '@interfaces/FO/stores';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-require-imports */
function requirePage(): FoStoresPageInterface {
  if (semver.lt(psVersion, '9.1.0')) {
    return require('@versions/9.0/pages/FO/hummingbird/stores').foStoresPage;
  }
  return require('@versions/develop/pages/FO/hummingbird/stores').foStoresPage;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports */

export default requirePage();
