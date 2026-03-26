import type {FoMyOrderDetailsPageInterface} from '@interfaces/FO/myAccount/orderDetails';

/* eslint-disable global-require, @typescript-eslint/no-require-imports */
function requirePage(): FoMyOrderDetailsPageInterface {
  return require('@versions/develop/pages/FO/hummingbird/myAccount/orderDetails');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports */

export default requirePage();
