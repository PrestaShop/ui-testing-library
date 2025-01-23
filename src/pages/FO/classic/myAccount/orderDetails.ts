import type {FoMyOrderDetailsPageInterface} from '@interfaces/FO/myAccount/orderDetails';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): FoMyOrderDetailsPageInterface {
  return require('@versions/develop/pages/FO/classic/myAccount/orderDetails').myOrderDetailsPage;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
