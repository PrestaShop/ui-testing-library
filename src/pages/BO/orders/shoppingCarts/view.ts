import {type BOShoppingCartsViewPageInterface} from '@interfaces/BO/orders/shoppingCarts/view';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOShoppingCartsViewPageInterface {
  return require('@versions/develop/pages/BO/orders/shoppingCarts/view');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
