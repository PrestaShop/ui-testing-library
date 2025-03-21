import type {BOProductsCreateTabCombinationsPageInterface} from '@interfaces/BO/catalog/products/create/tabCombinations';
import semver from 'semver';
import testContext from '@utils/test';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOProductsCreateTabCombinationsPageInterface {
  if (semver.lt(psVersion, '7.3.0')) {
    return require('@versions/1.7.2/pages/BO/catalog/products/create/tabCombinations').combinationsTab;
  }
  if (semver.lt(psVersion, '8.1.0')) {
    return require('@versions/8.0/pages/BO/catalog/products/create/tabCombinations').combinationsTab;
  }
  return require('@versions/develop/pages/BO/catalog/products/create/tabCombinations').combinationsTab;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
