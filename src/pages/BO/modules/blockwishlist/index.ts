import type {ModuleBlockwishlistMainPageInterface} from '@interfaces/BO/modules/blockwishlist/index';
import semver from 'semver';

const psVersion = global.getPSVersion();

/* eslint-disable global-require */
function requirePage(): ModuleBlockwishlistMainPageInterface {
  if (semver.gte(psVersion, '8.0.0')) {
    return require('@versions/8.0.0/pages/BO/modules/blockwishlist/index');
  }
  return require('@versions/8.0.0/pages/BO/modules/blockwishlist/index');
}
/* eslint-enable global-require */

export default requirePage();
