import {type ModulePsSupplierListMainPageInterface} from '@interfaces/BO/modules/ps_supplierlist/index';

/* eslint-disable global-require */
function requirePage(): ModulePsSupplierListMainPageInterface {
  return require('@versions/develop/pages/BO/modules/ps_supplierlist/index');
}
/* eslint-enable global-require */

export default requirePage();
