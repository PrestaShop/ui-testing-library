import type {BOStockMovementsPageInterface} from '@interfaces/BO/catalog/stock/movements';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOStockMovementsPageInterface {
  return require('@versions/develop/pages/BO/catalog/stock/movements');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
