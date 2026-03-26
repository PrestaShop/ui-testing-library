import type {FoMyWishlistsPageInterface} from '@interfaces/FO/myAccount/myWishlists';

/* eslint-disable global-require, @typescript-eslint/no-require-imports */
function requirePage(): FoMyWishlistsPageInterface {
  return require('@versions/develop/pages/FO/hummingbird/myAccount/myWishlists');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports */

export default requirePage();
