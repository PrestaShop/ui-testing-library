import type {FONewProductsPageInterface} from '@interfaces/FO/newProducts';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): FONewProductsPageInterface {
  return require('@versions/develop/pages/FO/classic/newProducts').foNewProductsPage;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
