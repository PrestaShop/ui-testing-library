import type {BOProductsCreateTabDetailsPageInterface} from '@interfaces/BO/catalog/products/create/tabDetails';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): BOProductsCreateTabDetailsPageInterface {
  if (semver.gte(psVersion, '0.0.0')) {
    return require('@versions/develop/pages/BO/catalog/products/create/tabDetails').detailsTab;
  }
  return require('@versions/develop/pages/BO/catalog/products/create/tabDetails').detailsTab;
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
