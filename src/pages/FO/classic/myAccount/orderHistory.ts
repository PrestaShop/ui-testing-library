import type {FoOrderHistoryPageInterface} from '@interfaces/FO/myAccount/orderHistory';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): FoOrderHistoryPageInterface {
  return require('@versions/develop/pages/FO/classic/myAccount/orderHistory').orderHistoryPage;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
