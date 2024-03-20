import type {BOOrdersPageInterface} from '@interfaces/BO/orders';
import testContext from '@utils/testContext';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require */
function requirePage(): BOOrdersPageInterface {
  // >= 1.7.7.9
  if (semver.gte(psVersion, '7.7.0')) {
    return require('@versions/develop/pages/BO/orders').ordersPage;
  }
  return require('@versions/1.7.6/pages/BO/orders');
}
/* eslint-enable global-require */

export default requirePage();
