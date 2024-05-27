import type {BOShippingTabPageInterface} from '@interfaces/BO/catalog/products/create/shippingTab';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require */
function requirePage(): BOShippingTabPageInterface {
  if (semver.gte(psVersion, '0.0.0')) {
    return require('@versions/develop/pages/BO/catalog/products/create/shippingTab');
  }
  return require('@versions/develop/pages/BO/catalog/products/create/shippingTab');
}
/* eslint-enable global-require */

export default requirePage();