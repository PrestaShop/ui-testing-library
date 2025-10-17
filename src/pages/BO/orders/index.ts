import type {BOOrdersPageInterface} from '@interfaces/BO/orders';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOOrdersPageInterface {
  if (semver.lt(psVersion, '7.0.0')) {
    return require('@versions/1.6.1/pages/BO/orders').ordersPage;
  }
  if (semver.lt(psVersion, '7.3.0')) {
    return require('@versions/1.7.2/pages/BO/orders').ordersPage;
  }
  if (semver.lt(psVersion, '7.7.0')) {
    return require('@versions/1.7.6/pages/BO/orders').ordersPage;
  }
  if (semver.lt(psVersion, '7.8.0')) {
    return require('@versions/1.7.7/pages/BO/orders').ordersPage;
  }
  return require('@versions/develop/pages/BO/orders').ordersPage;
}

/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
