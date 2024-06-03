import type {BOProductsCreateTabVirtualProductPageInterface} from '@interfaces/BO/catalog/products/create/tabVirtualProduct';

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): BOProductsCreateTabVirtualProductPageInterface {
  return require('@versions/develop/pages/BO/catalog/products/create/tabVirtualProduct').virtualProductTab;
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
