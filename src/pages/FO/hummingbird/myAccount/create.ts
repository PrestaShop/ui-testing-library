import type {FoCreateAccountPageInterface} from '@interfaces/FO/myAccount/create';
import semver from 'semver';
import testContext from '@utils/test';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-require-imports */
function requirePage(): FoCreateAccountPageInterface {
  if (semver.lt(psVersion, '9.1.0')) {
    return require('@versions/9.0/pages/FO/hummingbird/myAccount/create').foCreateAccountPage;
  }
  return require('@versions/develop/pages/FO/hummingbird/myAccount/create').foCreateAccountPage;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports */

export default requirePage();
