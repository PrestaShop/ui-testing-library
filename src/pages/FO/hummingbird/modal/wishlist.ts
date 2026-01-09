import type {FoModalWishlistPageInterface} from '@interfaces/FO/modal/wishlist';

/* eslint-disable global-require, @typescript-eslint/no-require-imports */
function requirePage(): FoModalWishlistPageInterface {
  return require('@versions/develop/pages/FO/hummingbird/modal/wishlist').foModalWishlistPage;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports */

export default requirePage();
