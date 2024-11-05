import type {BOCustomerGroupsPageInterface} from '@interfaces/BO/shopParameters/customerSettings/groups';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOCustomerGroupsPageInterface {
  return require('@versions/develop/pages/BO/shopParameters/customerSettings/groups');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
