import type {BOProductsCreateTabPackPageInterface} from '@interfaces/BO/catalog/products/create/tabPack';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): BOProductsCreateTabPackPageInterface {
  if (semver.gte(psVersion, '0.0.0')) {
    return require('@versions/develop/pages/BO/catalog/products/create/tabPack').packtab;
  }
  return require('@versions/develop/pages/BO/catalog/products/create/tabPack').packtab;
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
