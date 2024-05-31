import type {FoModalBlockCartPageInterface} from '@interfaces/FO/modal/blockCart';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): FoModalBlockCartPageInterface {
  if (semver.gte(psVersion, '0.0.0')) {
    return require('@versions/develop/pages/FO/classic/modal/blockCart').blockCartModal;
  }
  return require('@versions/develop/pages/FO/classic/modal/blockCart').blockCartModal;
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
