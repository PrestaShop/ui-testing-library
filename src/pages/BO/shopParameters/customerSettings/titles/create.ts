import type {BOTitlesCreatePageInterface} from '@interfaces/BO/shopParameters/customerSettings/titles/create';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOTitlesCreatePageInterface {
  return require('@versions/develop/pages/BO/shopParameters/customerSettings/titles/create');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
