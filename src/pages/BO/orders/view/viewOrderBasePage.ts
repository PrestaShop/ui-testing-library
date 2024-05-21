import type {BOViewOrderBasePageInterface} from '@interfaces/BO/orders/view/viewOrderBasePage';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): BOViewOrderBasePageInterface {
  // >= 1.7.7.9
  if (semver.gte(psVersion, '7.7.0')) {
    return require('@versions/develop/pages/BO/orders/view/viewOrderBasePage').ordersPage;
  }
  return require('@versions/1.7.6/pages/BO/orders/view/viewOrderBasePage');
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
