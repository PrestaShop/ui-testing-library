import type {BOProductsCreateTabCombinationsPageInterface} from '@interfaces/BO/catalog/products/create/tabCombinations';

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): BOProductsCreateTabCombinationsPageInterface {
  return require('@versions/develop/pages/BO/catalog/products/create/tabCombinations').combinationsTab;
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
