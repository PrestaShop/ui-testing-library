import type {BOProductsCreateTabOptionsPageInterface} from '@interfaces/BO/catalog/products/create/tabOptions';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): BOProductsCreateTabOptionsPageInterface {
  if (semver.gte(psVersion, '0.0.0')) {
    return require('@versions/develop/pages/BO/catalog/products/create/tabOptions').optionsTab;
  }
  return require('@versions/develop/pages/BO/catalog/products/create/tabOptions').optionsTab;
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
