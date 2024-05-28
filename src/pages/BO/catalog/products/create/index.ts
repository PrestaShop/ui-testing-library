import type {BOProductsCreatePageInterface} from '@interfaces/BO/catalog/products/create';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require */
function requirePage(): BOProductsCreatePageInterface {
  if (semver.gte(psVersion, '0.0.0')) {
    return require('@versions/develop/pages/BO/catalog/products/create');
  }
  return require('@versions/develop/pages/BO/catalog/products/create');
}
/* eslint-enable global-require */

export default requirePage();
