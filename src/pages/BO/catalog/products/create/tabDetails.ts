import type {BOProductsCreateTabDetailsPageInterface} from '@interfaces/BO/catalog/products/create/tabDetails';

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): BOProductsCreateTabDetailsPageInterface {
  return require('@versions/develop/pages/BO/catalog/products/create/tabDetails').detailsTab;
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
