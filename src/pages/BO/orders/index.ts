import type {BOOrdersPageInterface} from '@interfaces/BO/orders';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): BOOrdersPageInterface {
  if (semver.lt(psVersion, '7.7.0')) {
    return require('@versions/1.7.6/pages/BO/orders');
  }
  if (semver.lt(psVersion, '8.0.0')) {
    return require('@versions/1.7.7/pages/BO/orders');
  }
  return require('@versions/develop/pages/BO/orders').ordersPage;
}

/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
