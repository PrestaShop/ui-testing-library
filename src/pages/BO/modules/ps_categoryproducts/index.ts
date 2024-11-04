import type {ModulePsCategoryProductsMainPageInterface} from '@interfaces/BO/modules/ps_categoryproducts';

/* eslint-disable global-require, @typescript-eslint/no-require-imports */
function requirePage(): ModulePsCategoryProductsMainPageInterface {
  return require('@versions/develop/pages/BO/modules/ps_categoryproducts');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports */

export default requirePage();
