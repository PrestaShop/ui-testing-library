import type {FoProductPageInterface} from '@interfaces/FO/product';
import testContext from '@utils/test';

const psThemeFO = testContext.getPSThemeFO();

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): FoProductPageInterface {
  if (psThemeFO === 'classic') {
    return require('@pages/FO/classic/product').default;
  }
  return require('@pages/FO/hummingbird/product').default;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
