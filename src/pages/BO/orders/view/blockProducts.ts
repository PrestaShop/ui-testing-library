import {type BOProductBlockProductsPageInterface} from '@interfaces/BO/orders/view/blockProducts';

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): BOProductBlockProductsPageInterface {
  return require('@versions/develop/pages/BO/orders/view/blockProducts');
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
