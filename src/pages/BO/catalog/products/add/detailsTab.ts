import type {BODetailsTabPageInterface} from '@interfaces/BO/catalog/products/add/detailsTab';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require */
function requirePage(): BODetailsTabPageInterface {
  if (semver.gte(psVersion, '0.0.0')) {
    return require('@versions/develop/pages/BO/catalog/products/add/detailsTab');
  }
  return require('@versions/develop/pages/BO/catalog/products/add/detailsTab');
}
/* eslint-enable global-require */

export default requirePage();
