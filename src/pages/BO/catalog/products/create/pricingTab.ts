import type {BOPricingTabPageInterface} from '@interfaces/BO/catalog/products/create/pricingTab';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require */
function requirePage(): BOPricingTabPageInterface {
  if (semver.gte(psVersion, '0.0.0')) {
    return require('@versions/develop/pages/BO/catalog/products/create/pricingTab');
  }
  return require('@versions/develop/pages/BO/catalog/products/create/pricingTab');
}
/* eslint-enable global-require */

export default requirePage();
