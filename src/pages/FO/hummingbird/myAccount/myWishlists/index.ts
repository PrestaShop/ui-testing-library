import type {FoMyWishlistsPageInterface} from '@interfaces/FO/myAccount/myWishlists';

/* eslint-disable global-require */
function requirePage(): FoMyWishlistsPageInterface {
  return require('@versions/develop/pages/FO/hummingbird/myAccount/myWishlists');
}
/* eslint-enable global-require */

export default requirePage();
