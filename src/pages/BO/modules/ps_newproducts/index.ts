import type {ModulePsNewProductsMainPageInterface} from '@interfaces/BO/modules/ps_newproducts/index';

/* eslint-disable global-require */
function requirePage(): ModulePsNewProductsMainPageInterface {
  return require('@versions/develop/pages/BO/modules/blockwishlist/index');
}
/* eslint-enable global-require */

export default requirePage();
