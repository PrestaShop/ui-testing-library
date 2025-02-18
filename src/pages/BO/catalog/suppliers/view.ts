import {type BOSuppliersViewPageInterface} from '@interfaces/BO/catalog/suppliers/view';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOSuppliersViewPageInterface {
  return require('@versions/develop/pages/BO/catalog/suppliers/view');
}

/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
