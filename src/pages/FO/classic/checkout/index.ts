import type {FoCheckoutPageInterface} from '@interfaces/FO/checkout';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): FoCheckoutPageInterface {
  if (semver.lt(psVersion, '7.1.0')) {
    return require('@versions/1.7.0/pages/FO/classic/checkout').checkoutPage;
  }
  return require('@versions/develop/pages/FO/classic/checkout').checkoutPage;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
