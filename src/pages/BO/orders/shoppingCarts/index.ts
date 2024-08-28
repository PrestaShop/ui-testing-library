import type {BOShoppingCartsPageInterface} from '@interfaces/BO/orders/shoppingCarts';

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): BOShoppingCartsPageInterface {
  return require('@versions/develop/pages/BO/orders/shoppingCarts');
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
