import type {BOProductsCreateTabOptionsPageInterface} from '@interfaces/BO/catalog/products/create/tabOptions';

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): BOProductsCreateTabOptionsPageInterface {
  return require('@versions/develop/pages/BO/catalog/products/create/tabOptions').optionsTab;
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
