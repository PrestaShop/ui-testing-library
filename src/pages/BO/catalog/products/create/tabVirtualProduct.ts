import type {BOProductsCreateTabVirtualProductPageInterface} from '@interfaces/BO/catalog/products/create/tabVirtualProduct';
import semver from 'semver';
import testContext from '@utils/test';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): BOProductsCreateTabVirtualProductPageInterface {
  if (semver.lt(psVersion, '8.1.0')) {
    return require('@versions/8.0/pages/BO/catalog/products/create/tabVirtualProduct').virtualProductTab;
  }
  return require('@versions/develop/pages/BO/catalog/products/create/tabVirtualProduct').virtualProductTab;
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
