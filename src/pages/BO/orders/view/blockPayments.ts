import {type BOProductBlockPaymentsPageInterface} from '@interfaces/BO/orders/view/blockPayments';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOProductBlockPaymentsPageInterface {
  return require('@versions/develop/pages/BO/orders/view/blockPayments');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
