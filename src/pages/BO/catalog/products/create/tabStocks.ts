import type {BOProductsCreateTabStocksPageInterface} from '@interfaces/BO/catalog/products/create/tabStocks';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): BOProductsCreateTabStocksPageInterface {
  if (semver.gte(psVersion, '0.0.0')) {
    return require('@versions/develop/pages/BO/catalog/products/create/tabStocks').stocksTab;
  }
  return require('@versions/develop/pages/BO/catalog/products/create/tabStocks').stocksTab;
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
