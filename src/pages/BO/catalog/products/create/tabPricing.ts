import type {BOProductsCreateTabPricingPageInterface} from '@interfaces/BO/catalog/products/create/tabPricing';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): BOProductsCreateTabPricingPageInterface {
  if (semver.gte(psVersion, '0.0.0')) {
    return require('@versions/develop/pages/BO/catalog/products/create/tabPricing').pricingTab;
  }
  return require('@versions/develop/pages/BO/catalog/products/create/tabPricing').pricingTab;
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
