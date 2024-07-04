import type {FoModalWishlistPageInterface} from '@interfaces/FO/modal/wishlist';

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): FoModalWishlistPageInterface {
  return require('@versions/develop/pages/FO/classic/modal/wishlist');
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
