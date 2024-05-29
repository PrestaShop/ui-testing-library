import type {BOProductsCreatePageInterface} from '@interfaces/BO/catalog/products/create';

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): BOProductsCreatePageInterface {
  return require('@versions/develop/pages/BO/catalog/products/create/index');
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
