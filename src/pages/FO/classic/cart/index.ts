import type {FoCartPageInterface} from '@interfaces/FO/cart';
import utilsTest from '@utils/test';
import semver from 'semver';

const psVersion = utilsTest.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): FoCartPageInterface {
  if (semver.gte(psVersion, '0.0.0')) {
    return require('@versions/develop/pages/FO/classic/cart').cartPage;
  }
  return require('@versions/develop/pages/FO/classic/cart').cartPage;
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
