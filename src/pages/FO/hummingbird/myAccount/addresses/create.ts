import {type FoMyAddressesCreatePageInterface} from '@interfaces/FO/myAccount/addresses/create';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-require-imports */
function requirePage(): FoMyAddressesCreatePageInterface {
  if (semver.lt(psVersion, '9.1.0')) {
    return require('@versions/9.0/pages/FO/hummingbird/myAccount/addresses/create').foMyAddressesCreatePage;
  }
  return require('@versions/develop/pages/FO/hummingbird/myAccount/addresses/create').foMyAddressesCreatePage;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports */

export default requirePage();
