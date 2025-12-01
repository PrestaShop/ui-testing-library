import type {FoMyOrderDetailsPageInterface} from '@interfaces/FO/myAccount/orderDetails';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-require-imports */
function requirePage(): FoMyOrderDetailsPageInterface {
  if (semver.lt(psVersion, '9.1.0')) {
    return require('@versions/9.0/pages/FO/hummingbird/myAccount/orderDetails').foMyOrderDetailsPage;
  }
  return require('@versions/develop/pages/FO/hummingbird/myAccount/orderDetails').foMyOrderDetailsPage;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports */

export default requirePage();
