import type {FoMyWishlistsViewPageInterface} from '@interfaces/FO/myAccount/myWishlists/view';
import testContext from '@utils/test';

const psThemeFO = testContext.getPSThemeFO();

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): FoMyWishlistsViewPageInterface {
  if (psThemeFO === 'classic') {
    return require('@pages/FO/classic/myAccount/myWishlists/view').default;
  }
  return require('@pages/FO/hummingbird/myAccount/myWishlists/view').default;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
