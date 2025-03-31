import type {BOQuickAccessCreatePageInterface} from '@interfaces/BO/quickAccess/create';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOQuickAccessCreatePageInterface {
  return require('@versions/develop/pages/BO/quickAccess/create');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
