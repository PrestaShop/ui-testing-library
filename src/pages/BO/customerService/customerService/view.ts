import {type BOCustomerServiceViewPageInterface} from '@interfaces/BO/customerService/customerService/view';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOCustomerServiceViewPageInterface {
  return require('@versions/develop/pages/BO/customerService/customerService/view');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
