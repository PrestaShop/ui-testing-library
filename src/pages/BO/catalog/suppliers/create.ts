import type {BOSuppliersCreatePageInterface} from '@interfaces/BO/catalog/suppliers/create';

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): BOSuppliersCreatePageInterface {
  return require('@versions/develop/pages/BO/catalog/suppliers/create');
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
