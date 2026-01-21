import type {FoMyWishlistsPageInterface} from '@interfaces/FO/myAccount/myWishlists';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): FoMyWishlistsPageInterface {
  return require('@versions/develop/pages/FO/classic/myAccount/myWishlists').foMyWishlistsPage;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
