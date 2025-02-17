import type {BOBrandsViewPageInterface} from '@interfaces/BO/catalog/brands/view';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOBrandsViewPageInterface {
  return require('@versions/develop/pages/BO/catalog/brands/view');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
