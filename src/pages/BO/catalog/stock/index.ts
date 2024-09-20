import type {BOStockPageInterface} from '@interfaces/BO/catalog/stock';

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): BOStockPageInterface {
  return require('@versions/develop/pages/BO/catalog/stock');
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
