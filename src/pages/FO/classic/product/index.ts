import type {FoProductPageInterface} from '@interfaces/FO/product';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): FoProductPageInterface {
  if (semver.gte(psVersion, '0.0.0')) {
    return require('@versions/develop/pages/FO/classic/product').cartPage;
  }
  return require('@versions/develop/pages/FO/classic/product').cartPage;
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
