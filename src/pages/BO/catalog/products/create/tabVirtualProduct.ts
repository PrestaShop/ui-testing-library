import type {BOProductsCreateTabVirtualProductPageInterface} from '@interfaces/BO/catalog/products/create/tabVirtualProduct';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): BOProductsCreateTabVirtualProductPageInterface {
  if (semver.gte(psVersion, '0.0.0')) {
    return require('@versions/develop/pages/BO/catalog/products/create/tabVirtualProduct').virtualProductTab;
  }
  return require('@versions/develop/pages/BO/catalog/products/create/tabVirtualProduct').virtualProductTab;
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
