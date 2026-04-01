import type {FoCheckoutPageInterface} from '@interfaces/FO/checkout';
import testContext from '@utils/test';

const psThemeFO = testContext.getPSThemeFO();

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): FoCheckoutPageInterface {
  if (psThemeFO === 'classic') {
    return require('@pages/FO/classic/checkout').default;
  }
  return require('@pages/FO/hummingbird/checkout').default;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
