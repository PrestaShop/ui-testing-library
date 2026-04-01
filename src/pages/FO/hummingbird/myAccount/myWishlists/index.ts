import type {FoMyWishlistsPageInterface} from '@interfaces/FO/myAccount/myWishlists';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-require-imports */
function requirePage(): FoMyWishlistsPageInterface {
  if (semver.lt(psVersion, '9.1.0')) {
    return require('@versions/9.0/pages/FO/hummingbird/myAccount/myWishlists').foMyWishlistsPage;
  }
  return require('@versions/develop/pages/FO/hummingbird/myAccount/myWishlists').foMyWishlistsPage;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports */

export default requirePage();
