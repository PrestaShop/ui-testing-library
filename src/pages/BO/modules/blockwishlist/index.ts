import type {ModuleBlockwishlistMainPageInterface} from '@interfaces/BO/modules/blockwishlist/index';
import utilsTest from '@utils/test';
import semver from 'semver';

const psVersion = utilsTest.getPSVersion();

/* eslint-disable global-require */
function requirePage(): ModuleBlockwishlistMainPageInterface {
  if (semver.gte(psVersion, '0.0.0')) {
    return require('@versions/develop/pages/BO/modules/blockwishlist/index');
  }
  return require('@versions/develop/pages/BO/modules/blockwishlist/index');
}
/* eslint-enable global-require */

export default requirePage();
