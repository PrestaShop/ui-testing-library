import type {BOStoresCreatePageInterface} from '@interfaces/BO/shopParameters/stores/create';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOStoresCreatePageInterface {
  return require('@versions/develop/pages/BO/shopParameters/stores/create');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
