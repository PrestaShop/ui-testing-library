import type {BOProductsCreateTabPricingPageInterface} from '@interfaces/BO/catalog/products/create/tabPricing';

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): BOProductsCreateTabPricingPageInterface {
  return require('@versions/develop/pages/BO/catalog/products/create/tabPricing').pricingTab;
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
