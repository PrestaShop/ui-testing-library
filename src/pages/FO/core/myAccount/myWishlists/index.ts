import type {FoMyWishlistsPageInterface} from '@interfaces/FO/myAccount/myWishlists';
import testContext from '@utils/test';

const psThemeFO = testContext.getPSThemeFO();

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): FoMyWishlistsPageInterface {
  if (psThemeFO === 'classic') {
    return require('@pages/FO/classic/myAccount/myWishlists').default;
  }
  return require('@pages/FO/hummingbird/myAccount/myWishlists').default;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
