import type {BOSearchPageInterface} from '@interfaces/BO/shopParameters/search';

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): BOSearchPageInterface {
  return require('@versions/develop/pages/BO/shopParameters/search');
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
