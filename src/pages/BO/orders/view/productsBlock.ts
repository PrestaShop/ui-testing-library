import type {BOProductBlockPageInterface} from '@interfaces/BO/orders/view/productsBlock';

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): BOProductBlockPageInterface {
  return require('@versions/develop/pages/BO/orders/view/productsBlock');
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
