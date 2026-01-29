import type {FoModalWishlistPageInterface} from '@interfaces/FO/modal/wishlist';
import testContext from '@utils/test';

const psThemeFO = testContext.getPSThemeFO();

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): FoModalWishlistPageInterface {
  if (psThemeFO === 'classic') {
    return require('@pages/FO/classic/modal/wishlist').default;
  }
  return require('@pages/FO/hummingbird/modal/wishlist').default;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
