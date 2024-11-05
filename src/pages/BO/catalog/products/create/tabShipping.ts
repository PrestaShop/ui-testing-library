import type {BOProductsCreateTabShippingPageInterface} from '@interfaces/BO/catalog/products/create/tabShipping';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOProductsCreateTabShippingPageInterface {
  return require('@versions/develop/pages/BO/catalog/products/create/tabShipping').shippingTab;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
