import {type BOAddressesPageInterface} from '@interfaces/BO/customers/addresses';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOAddressesPageInterface {
  return require('@versions/develop/pages/BO/customers/addresses');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
