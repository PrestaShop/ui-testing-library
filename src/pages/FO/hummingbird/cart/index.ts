import type {FoCartHummingbirdPageInterface} from '@interfaces/FO/cart';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-require-imports */
function requirePage(): FoCartHummingbirdPageInterface {
  if (semver.lt(psVersion, '9.1.0')) {
    return require('@versions/9.0/pages/FO/hummingbird/cart').foCartPage;
  }
  return require('@versions/develop/pages/FO/hummingbird/cart').foCartPage;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports */

export default requirePage();
