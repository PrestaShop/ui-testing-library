import type {BOSearchResultsPageInterface} from '@interfaces/BO/searchResults';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOSearchResultsPageInterface {
  return require('@versions/develop/pages/BO/searchResults');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
