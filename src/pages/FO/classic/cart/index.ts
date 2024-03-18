import type {FoCartPageInterface} from '@interfaces/FO/cart';
import testContext from '@utils/testContext';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): FoCartPageInterface {
  if (semver.gte(psVersion, '0.0.0')) {
    return require('@versions/develop/pages/FO/classic/cart').cartPage;
  }
  return require('@versions/develop/pages/FO/classic/cart').cartPage;
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
