import type {BOCatalogProductsPageInterface} from '@interfaces/BO/catalog/products';

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): BOCatalogProductsPageInterface {
  return require('@versions/develop/pages/BO/catalog/products').productsPage;
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
