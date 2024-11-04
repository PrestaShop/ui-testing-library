import type {FoMyWishlistsViewPageInterface} from '@interfaces/FO/myAccount/myWishlists/view';

/* eslint-disable global-require, @typescript-eslint/no-require-imports */
function requirePage(): FoMyWishlistsViewPageInterface {
  return require('@versions/develop/pages/FO/classic/myAccount/myWishlists/view');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports */

export default requirePage();
