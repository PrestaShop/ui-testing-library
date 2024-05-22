import type {BOViewOrderBasePageInterface} from '@interfaces/BO/orders/view/viewOrderBasePage';

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): BOViewOrderBasePageInterface {
  return require('@versions/develop/pages/BO/orders/view/viewOrderBasePage');
}

/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
