import type {FoSearchResultsPageInterface} from '@interfaces/FO/searchResults';
import testContext from '@utils/test';

const psThemeFO = testContext.getPSThemeFO();

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): FoSearchResultsPageInterface {
  if (psThemeFO === 'classic') {
    return require('@pages/FO/classic/searchResults').default;
  }
  return require('@pages/FO/hummingbird/searchResults').default;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
