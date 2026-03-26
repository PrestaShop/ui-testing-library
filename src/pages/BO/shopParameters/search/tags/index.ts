import type {BOTagsPageInterface} from '@interfaces/BO/shopParameters/search/tags';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOTagsPageInterface {
  return require('@versions/develop/pages/BO/shopParameters/search/tags');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
