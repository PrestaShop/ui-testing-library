import type {BOProductsCreateTabStocksPageInterface} from '@interfaces/BO/catalog/products/create/tabStocks';

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): BOProductsCreateTabStocksPageInterface {
  return require('@versions/develop/pages/BO/catalog/products/create/tabStocks').stocksTab;
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
