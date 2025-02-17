import type {BOBrandsCreatePageInterface} from '@interfaces/BO/catalog/brands/create';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOBrandsCreatePageInterface {
  return require('@versions/develop/pages/BO/catalog/brands/create');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
