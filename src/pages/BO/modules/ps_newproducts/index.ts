import type {ModulePsNewProductsMainPageInterface} from '@interfaces/BO/modules/ps_newproducts/index';

/* eslint-disable global-require, @typescript-eslint/no-require-imports */
function requirePage(): ModulePsNewProductsMainPageInterface {
  return require('@versions/develop/pages/BO/modules/ps_newproducts/index');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports */

export default requirePage();
