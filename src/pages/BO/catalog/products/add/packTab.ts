import type {BOPackTabPageInterface} from '@interfaces/BO/catalog/products/add/packTab';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require */
function requirePage(): BOPackTabPageInterface {
  if (semver.gte(psVersion, '0.0.0')) {
    return require('@versions/develop/pages/BO/catalog/products/add/packTab');
  }
  return require('@versions/develop/pages/BO/catalog/products/add/packTab');
}
/* eslint-enable global-require */

export default requirePage();
