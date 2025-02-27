import type {BOStoresPageInterface} from '@interfaces/BO/shopParameters/stores';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOStoresPageInterface {
  return require('@versions/develop/pages/BO/shopParameters/stores');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
