import type {ModuleBlockwishlistStatisticsPageInterface} from '@interfaces/BO/modules/blockwishlist/statistics';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-require-imports */
function requirePage(): ModuleBlockwishlistStatisticsPageInterface {
  if (semver.gte(psVersion, '0.0.0')) {
    return require('@versions/develop/pages/BO/modules/blockwishlist/statistics');
  }
  return require('@versions/develop/pages/BO/modules/blockwishlist/statistics');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports */

export default requirePage();
