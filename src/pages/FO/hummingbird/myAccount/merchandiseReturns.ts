import type {FoMyMerchandiseReturnsPageInterface} from '@interfaces/FO/myAccount/merchandiseReturns';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-require-imports */
function requirePage(): FoMyMerchandiseReturnsPageInterface {
  if (semver.lt(psVersion, '9.1.0')) {
    return require('@versions/9.0/pages/FO/hummingbird/myAccount/merchandiseReturns').foMyMerchandiseReturnsPage;
  }
  return require('@versions/develop/pages/FO/hummingbird/myAccount/merchandiseReturns').foMyMerchandiseReturnsPage;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports */

export default requirePage();
