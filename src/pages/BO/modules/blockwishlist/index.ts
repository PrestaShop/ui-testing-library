import type {ModuleBlockwishlistMainPageInterface} from '@interfaces/BO/modules/blockwishlist/index';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-require-imports */
function requirePage(): ModuleBlockwishlistMainPageInterface {
  if (semver.gte(psVersion, '0.0.0')) {
    return require('@versions/develop/pages/BO/modules/blockwishlist/index');
  }
  return require('@versions/develop/pages/BO/modules/blockwishlist/index');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports */

export default requirePage();
