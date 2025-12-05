import type {FoCheckoutPageInterface} from '@interfaces/FO/checkout';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): FoCheckoutPageInterface {
  if (semver.lt(psVersion, '9.1.0')) {
    return require('@versions/9.0/pages/FO/hummingbird/checkout').foCheckoutPage;
  }
  return require('@versions/develop/pages/FO/hummingbird/checkout').foCheckoutPage;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
