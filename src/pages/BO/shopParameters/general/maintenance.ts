import type {BOMaintenancePageInterface} from '@interfaces/BO/shopParameters/general/maintenance';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOMaintenancePageInterface {
  return require('@versions/develop/pages/BO/shopParameters/general/maintenance');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
