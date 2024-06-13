import type {BOProductsCreateTabStocksPageInterface} from '@interfaces/BO/catalog/products/create/tabStocks';
import semver from 'semver';
import testContext from '@utils/test';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): BOProductsCreateTabStocksPageInterface {
  if (semver.lt(psVersion, '8.1.0')) {
    return require('@versions/8.0/pages/BO/catalog/products/create/tabStocks').stocksTab;
  }
  return require('@versions/develop/pages/BO/catalog/products/create/tabStocks').stocksTab;
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
