import type {FoMyWishlistsViewPageInterface} from '@interfaces/FO/myAccount/myWishlists/view';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-require-imports */
function requirePage(): FoMyWishlistsViewPageInterface {
  if (semver.lt(psVersion, '9.1.0')) {
    return require('@versions/9.0/pages/FO/hummingbird/myAccount/myWishlists/view').foMyWishlistsViewPage;
  }
  return require('@versions/develop/pages/FO/hummingbird/myAccount/myWishlists/view').foMyWishlistsViewPage;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports */

export default requirePage();
