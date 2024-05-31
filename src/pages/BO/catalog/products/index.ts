import type {BOProductsPageInterface} from '@interfaces/BO/catalog/products';
import semver from 'semver';
import testContext from '@utils/test';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): BOProductsPageInterface {
  if (semver.gte(psVersion, '0.0.0')) {
    return require('@versions/develop/pages/BO/catalog/products').productsPage;
  }
  return require('@versions/develop/pages/BO/catalog/products').productsPage;
}
/* eslint-disable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
