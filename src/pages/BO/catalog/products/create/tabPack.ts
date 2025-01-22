import type {BOProductsCreateTabPackPageInterface} from '@interfaces/BO/catalog/products/create/tabPack';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOProductsCreateTabPackPageInterface {
  return require('@versions/develop/pages/BO/catalog/products/create/tabPack');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
