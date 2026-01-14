import type {FoCartPageInterface} from '@interfaces/FO/cart';
import testContext from '@utils/test';

const psThemeFO = testContext.getPSThemeFO();

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): FoCartPageInterface {
  if (psThemeFO === 'classic') {
    return require('@pages/FO/classic/cart').default;
  }
  return require('@pages/FO/hummingbird/cart').default;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
