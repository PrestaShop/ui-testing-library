import type {BOProductsCreateTabPricingPageInterface} from '@interfaces/BO/catalog/products/create/tabPricing';
import semver from 'semver';
import testContext from '@utils/test';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOProductsCreateTabPricingPageInterface {
  if (semver.lt(psVersion, '8.1.0')) {
    return require('@versions/8.0/pages/BO/catalog/products/create/tabPricing').pricingTab;
  }
  return require('@versions/develop/pages/BO/catalog/products/create/tabPricing').pricingTab;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
