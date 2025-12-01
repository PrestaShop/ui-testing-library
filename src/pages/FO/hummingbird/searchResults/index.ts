import type {FoSearchResultsPageInterface} from '@interfaces/FO/searchResults';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-require-imports */
function requirePage(): FoSearchResultsPageInterface {
  if (semver.lt(psVersion, '9.1.0')) {
    return require('@versions/9.0/pages/FO/hummingbird/searchResults').foSearchResultsPage;
  }
  return require('@versions/develop/pages/FO/hummingbird/searchResults').foSearchResultsPage;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports */

export default requirePage();
