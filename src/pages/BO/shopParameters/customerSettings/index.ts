import type {BOCustomerSettingsPageInterface} from '@interfaces/BO/shopParameters/customerSettings';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOCustomerSettingsPageInterface {
  return require('@versions/develop/pages/BO/shopParameters/customerSettings');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
