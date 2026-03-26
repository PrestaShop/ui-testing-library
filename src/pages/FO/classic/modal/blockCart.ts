import type {FoModalBlockCartPageInterface} from '@interfaces/FO/modal/blockCart';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): FoModalBlockCartPageInterface {
  if (semver.lt(psVersion, '7.1.0')) {
    return require('@versions/1.7.0/pages/FO/classic/modal/blockCart').foModalBlockCartPage;
  }
  return require('@versions/develop/pages/FO/classic/modal/blockCart').foModalBlockCartPage;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
