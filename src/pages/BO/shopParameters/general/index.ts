import type {BOShopParametersPageInterface} from '@interfaces/BO/shopParameters/general';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOShopParametersPageInterface {
  return require('@versions/develop/pages/BO/shopParameters/general');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
