import type {BOStocksTabPageInterface} from '@interfaces/BO/catalog/products/create/stocksTab';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require */
function requirePage(): BOStocksTabPageInterface {
  if (semver.gte(psVersion, '0.0.0')) {
    return require('@versions/develop/pages/BO/catalog/products/create/stocksTab');
  }
  return require('@versions/develop/pages/BO/catalog/products/create/stocksTab');
}
/* eslint-enable global-require */

export default requirePage();
