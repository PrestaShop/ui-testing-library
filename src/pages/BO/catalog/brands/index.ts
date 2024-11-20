import type {BOBrandsPageInterface} from '@interfaces/BO/catalog/brands';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOBrandsPageInterface {
  return require('@versions/develop/pages/BO/catalog/brands');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
