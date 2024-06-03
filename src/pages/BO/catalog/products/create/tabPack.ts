import type {BOProductsCreateTabPackPageInterface} from '@interfaces/BO/catalog/products/create/tabPack';

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): BOProductsCreateTabPackPageInterface {
  return require('@versions/develop/pages/BO/catalog/products/create/tabPack').packtab;
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
