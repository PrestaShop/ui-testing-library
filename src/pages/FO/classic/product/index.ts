import type {FoProductPageInterface} from '@interfaces/FO/product';
import semver from 'semver';
import testContext from '@utils/test';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): FoProductPageInterface {
  if (semver.lt(psVersion, '7.8.0')) {
    return require('@versions/1.7.7/pages/FO/classic/product').productPage;
  }
  return require('@versions/develop/pages/FO/classic/product').productPage;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
