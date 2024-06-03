import type {BOProductsCreateTabShippingPageInterface} from '@interfaces/BO/catalog/products/create/tabShipping';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): BOProductsCreateTabShippingPageInterface {
  if (semver.gte(psVersion, '0.0.0')) {
    return require('@versions/develop/pages/BO/catalog/products/create/tabShipping').shippingTab;
  }
  return require('@versions/develop/pages/BO/catalog/products/create/tabShipping').shippingTab;
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
