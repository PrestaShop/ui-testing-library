import type {FoSearchResultsPageInterface} from '@interfaces/FO/searchResults';

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): FoSearchResultsPageInterface {
  return require('@versions/develop/pages/FO/classic/searchResults').searchResultsPage;
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
