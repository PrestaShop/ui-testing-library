import type {BOProductsCreateTabCombinationsPageInterface} from '@interfaces/BO/catalog/products/create/tabCombinations';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): BOProductsCreateTabCombinationsPageInterface {
  if (semver.gte(psVersion, '0.0.0')) {
    return require('@versions/develop/pages/BO/catalog/products/create/tabCombinations').combinationsTab;
  }
  return require('@versions/develop/pages/BO/catalog/products/create/tabCombinations').combinationsTab;
}
/* eslint-disable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
