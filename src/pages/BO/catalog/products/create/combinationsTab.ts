import type {BOCombinationsTabPageInterface} from '@interfaces/BO/catalog/products/create/combinationsTab';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require */
function requirePage(): BOCombinationsTabPageInterface {
  if (semver.gte(psVersion, '0.0.0')) {
    return require('@versions/develop/pages/BO/catalog/products/create/combinationsTab');
  }
  return require('@versions/develop/pages/BO/catalog/products/create/combinationsTab');
}
/* eslint-enable global-require */

export default requirePage();
