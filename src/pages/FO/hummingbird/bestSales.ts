import type {FoBestSalesPageInterface} from '@interfaces/FO/bestSales';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): FoBestSalesPageInterface {
  return require('@versions/develop/pages/FO/hummingbird/bestSales');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
