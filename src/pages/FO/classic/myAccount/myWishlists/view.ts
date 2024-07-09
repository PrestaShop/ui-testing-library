import type {FoMyWishlistsViewPageInterface} from '@interfaces/FO/myAccount/myWishlists/view';

/* eslint-disable global-require */
function requirePage(): FoMyWishlistsViewPageInterface {
  return require('@versions/develop/pages/FO/classic/myAccount/myWishlists/view');
}
/* eslint-enable global-require */

export default requirePage();
