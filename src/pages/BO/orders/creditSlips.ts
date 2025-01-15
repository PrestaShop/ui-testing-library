import type {BOCreditSlipsPageInterface} from '@interfaces/BO/orders/creditSlips';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOCreditSlipsPageInterface {
  return require('@versions/develop/pages/BO/orders/creditSlips');
}

/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
