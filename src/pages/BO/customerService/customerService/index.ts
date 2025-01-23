import {type BOCustomerServicePageInterface} from '@interfaces/BO/customerService/customerService';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOCustomerServicePageInterface {
  return require('@versions/develop/pages/BO/customerService/customerService');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
