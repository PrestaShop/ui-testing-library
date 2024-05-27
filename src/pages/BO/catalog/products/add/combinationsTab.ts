import type {BOCombinationsTabPageInterface} from '@interfaces/BO/catalog/products/add/combinationsTab';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require */
function requirePage(): BOCombinationsTabPageInterface {
  if (semver.gte(psVersion, '0.0.0')) {
    return require('@versions/develop/pages/BO/catalog/products/add/combinationsTab');
  }
  return require('@versions/develop/pages/BO/catalog/products/add/combinationsTab');
}
/* eslint-enable global-require */

export default requirePage();
