import type {BOProductsPageInterface} from '@interfaces/BO/catalog/products';

/* eslint-disable global-require */
function requirePage(): BOProductsPageInterface {
  return require('@versions/develop/pages/BO/catalog/products').productsPage;
}
/* eslint-enable global-require */

export default requirePage();
