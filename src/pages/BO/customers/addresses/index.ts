import {type BOAddressesPageInterface} from '@interfaces/BO/customers/addresses';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOAddressesPageInterface {
  if (semver.lt(psVersion, '7.0.0')) {
    return require('@versions/1.6.1/pages/BO/customers/addresses').boAddressesPage;
  }
  if (semver.lt(psVersion, '7.8.0')) {
    return require('@versions/1.7.7/pages/BO/customers/addresses').boAddressesPage;
  }
  if (semver.lt(psVersion, '8.0.0')) {
    return require('@versions/1.7.8/pages/BO/customers/addresses').boAddressesPage;
  }
  if (semver.lt(psVersion, '9.0.0')) {
    return require('@versions/8.2/pages/BO/customers/addresses').boAddressesPage;
  }
  return require('@versions/develop/pages/BO/customers/addresses').boAddressesPage;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
