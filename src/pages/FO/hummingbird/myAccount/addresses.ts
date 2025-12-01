import {type FoMyAddressesPageInterface} from '@interfaces/FO/myAccount/addresses';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-require-imports */
function requirePage(): FoMyAddressesPageInterface {
  if (semver.lt(psVersion, '9.1.0')) {
    return require('@versions/9.0/pages/FO/hummingbird/myAccount/addresses').foMyAddressesPage;
  }
  return require('@versions/develop/pages/FO/hummingbird/myAccount/addresses').foMyAddressesPage;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports */

export default requirePage();
