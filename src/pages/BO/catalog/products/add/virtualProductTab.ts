import type {BOVirtualProductTabPageInterface} from '@interfaces/BO/catalog/products/add/virtualProductTab';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require */
function requirePage(): BOVirtualProductTabPageInterface {
  if (semver.gte(psVersion, '0.0.0')) {
    return require('@versions/develop/pages/BO/catalog/products/add/virtualProductTab');
  }
  return require('@versions/develop/pages/BO/catalog/products/add/virtualProductTab');
}
/* eslint-enable global-require */

export default requirePage();
