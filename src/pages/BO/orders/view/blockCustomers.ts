import {type BOProductBlockCustomersPageInterface} from '@interfaces/BO/orders/view/blockCustomers';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOProductBlockCustomersPageInterface {
  return require('@versions/develop/pages/BO/orders/view/blockCustomers');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
