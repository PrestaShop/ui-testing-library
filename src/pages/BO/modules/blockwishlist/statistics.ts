import type {ModuleBlockwishlistStatisticsPageInterface} from '@interfaces/BO/modules/blockwishlist/statistics';
import utilsTest from '@utils/test';
import semver from 'semver';

const psVersion = utilsTest.getPSVersion();

/* eslint-disable global-require */
function requirePage(): ModuleBlockwishlistStatisticsPageInterface {
  if (semver.gte(psVersion, '0.0.0')) {
    return require('@versions/develop/pages/BO/modules/blockwishlist/statistics');
  }
  return require('@versions/develop/pages/BO/modules/blockwishlist/statistics');
}
/* eslint-enable global-require */

export default requirePage();
