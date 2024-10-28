import type {ModulePsCategoryProductsMainPageInterface} from '@interfaces/BO/modules/ps_categoryproducts';

/* eslint-disable global-require */
function requirePage(): ModulePsCategoryProductsMainPageInterface {
  return require('@versions/develop/pages/BO/modules/ps_categoryproducts');
}
/* eslint-enable global-require */

export default requirePage();
