import type {BOTitlesPageInterface} from '@interfaces/BO/shopParameters/customerSettings/titles';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOTitlesPageInterface {
  return require('@versions/develop/pages/BO/shopParameters/customerSettings/titles');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
