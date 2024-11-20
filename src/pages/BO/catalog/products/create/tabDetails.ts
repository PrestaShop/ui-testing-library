import type {BOProductsCreateTabDetailsPageInterface} from '@interfaces/BO/catalog/products/create/tabDetails';
import semver from 'semver';
import testContext from '@utils/test';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOProductsCreateTabDetailsPageInterface {
  if (semver.lt(psVersion, '8.1.0')) {
    return require('@versions/8.0/pages/BO/catalog/products/create/tabDetails').detailsTab;
  }
  if (semver.lt(psVersion, '8.3.0')) {
    return require('@versions/8.2/pages/BO/catalog/products/create/tabDetails').detailsTab;
  }
  return require('@versions/develop/pages/BO/catalog/products/create/tabDetails').detailsTab;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
