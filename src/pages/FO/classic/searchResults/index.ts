import type {FoSearchResultsPageInterface} from '@interfaces/FO/searchResults';
import testContext from '@utils/test';
import semver from 'semver';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): FoSearchResultsPageInterface {
  if (semver.lt(psVersion, '8.3.0')) {
    return require('@versions/8.2/pages/FO/classic/searchResults').searchResultsPage;
  }
  return require('@versions/develop/pages/FO/classic/searchResults').searchResultsPage;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
