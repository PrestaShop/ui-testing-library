import type {BOMaintenancePageInterface} from '@interfaces/BO/shopParameters/general/maintenance';
import semver from 'semver';
import testContext from '@utils/test';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOMaintenancePageInterface {
  if (semver.lt(psVersion, '7.4.0')) {
    return require('@versions/1.7.3/pages/BO/shopParameters/general/maintenance').maintenancePage;
  }
  if (semver.lt(psVersion, '7.8.0')) {
    return require('@versions/1.7.7/pages/BO/shopParameters/general/maintenance').maintenancePage;
  }
  return require('@versions/develop/pages/BO/shopParameters/general/maintenance').maintenancePage;
}

/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
