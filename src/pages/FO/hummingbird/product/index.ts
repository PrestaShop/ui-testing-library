import type {FoProductHummingbirdPageInterface} from '@interfaces/FO/product';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-require-imports */
function requirePage(): FoProductHummingbirdPageInterface {
  if (semver.lt(psVersion, '9.1.0')) {
    return require('@versions/9.0/pages/FO/hummingbird/product').foProductPage;
  }
  return require('@versions/develop/pages/FO/hummingbird/product').foProductPage;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports */

export default requirePage();
