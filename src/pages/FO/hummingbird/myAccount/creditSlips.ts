import {type FOMyCreditSlipsPageInterface} from '@interfaces/FO/myAccount/creditSlips';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-require-imports */
function requirePage(): FOMyCreditSlipsPageInterface {
  if (semver.lt(psVersion, '9.1.0')) {
    return require('@versions/9.0/pages/FO/hummingbird/myAccount/creditSlips').foMyCreditSlipsPage;
  }
  return require('@versions/develop/pages/FO/hummingbird/myAccount/creditSlips').foMyCreditSlipsPage;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports */

export default requirePage();
