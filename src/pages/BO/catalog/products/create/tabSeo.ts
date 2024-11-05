import type {BOProductsCreateTabSeoPageInterface} from '@interfaces/BO/catalog/products/create/tabSeo';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOProductsCreateTabSeoPageInterface {
  return require('@versions/develop/pages/BO/catalog/products/create/tabSeo').seoTab;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
