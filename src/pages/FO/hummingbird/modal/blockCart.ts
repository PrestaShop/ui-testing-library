import type {FoModalBlockCartPageInterface} from '@interfaces/FO/modal/blockCart';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-require-imports */
function requirePage(): FoModalBlockCartPageInterface {
  if (semver.lt(psVersion, '9.1.0')) {
    return require('@versions/9.0/pages/FO/hummingbird/modal/blockCart').foModalBlockCartPage;
  }
  return require('@versions/develop/pages/FO/hummingbird/modal/blockCart').foModalBlockCartPage;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports */

export default requirePage();
