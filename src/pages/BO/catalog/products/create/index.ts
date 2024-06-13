import type {BOProductsCreatePageInterface} from '@interfaces/BO/catalog/products/create';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): BOProductsCreatePageInterface {
  if (semver.lt(psVersion, '8.1.0')) {
    return require('@versions/8.0/pages/BO/catalog/products/create').createProduct;
  }
  if (semver.lt(psVersion, '9.0.0')) {
    return require('@versions/8.1/pages/BO/catalog/products/create').createProduct;
  }
  return require('@versions/develop/pages/BO/catalog/products/create').createProduct;
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
