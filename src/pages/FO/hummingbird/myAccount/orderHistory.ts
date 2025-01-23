import type {FoMyOrderHistoryPageInterface} from '@interfaces/FO/myAccount/orderHistory';

/* eslint-disable global-require, @typescript-eslint/no-require-imports */
function requirePage(): FoMyOrderHistoryPageInterface {
  return require('@versions/develop/pages/FO/hummingbird/myAccount/orderHistory');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports */

export default requirePage();
