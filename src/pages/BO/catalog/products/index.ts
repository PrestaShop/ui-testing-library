import type {BOProductsPageInterface} from '@interfaces/BO/catalog/products';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require */
function requirePage(): BOProductsPageInterface {
  if (semver.gte(psVersion, '0.0.0')) {
    return require('@versions/develop/pages/BO/catalog/products');
  }
  return require('@versions/develop/pages/BO/catalog/products');
}
/* eslint-enable global-require */

export default requirePage();
