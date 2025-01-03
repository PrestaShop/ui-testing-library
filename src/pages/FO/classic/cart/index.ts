import type {FoCartPageInterface} from '@interfaces/FO/cart';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): FoCartPageInterface {
  if (semver.lt(psVersion, '7.1.2')) {
    return require('@versions/1.7.1/pages/FO/classic/cart').cartPage;
  }
  if (semver.lt(psVersion, '7.6.0')) {
    return require('@versions/1.7.5/pages/FO/classic/cart').cartPage;
  }
  return require('@versions/develop/pages/FO/classic/cart').cartPage;
}

/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
