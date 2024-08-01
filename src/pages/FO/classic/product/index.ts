import type {FoProductPageInterface} from '@interfaces/FO/product';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): FoProductPageInterface {
  if (semver.lt(psVersion, '9.0.0')) {
    return require('@versions/8.1.0/pages/FO/classic/product');
  }
  return require('@versions/develop/pages/FO/classic/product').productPage;
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
