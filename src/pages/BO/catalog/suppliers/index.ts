import type {BOSuppliersPageInterface} from '@interfaces/BO/catalog/suppliers';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOSuppliersPageInterface {
  return require('@versions/develop/pages/BO/catalog/suppliers');
}

/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
