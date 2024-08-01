import type {BOOrdersPageInterface} from '@interfaces/BO/orders';
import utilsTest from '@utils/test';
import semver from 'semver';

const psVersion = utilsTest.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): BOOrdersPageInterface {
  // >= 1.7.7.9
  if (semver.gte(psVersion, '7.7.0')) {
    return require('@versions/develop/pages/BO/orders').ordersPage;
  }
  return require('@versions/1.7.6/pages/BO/orders');
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
