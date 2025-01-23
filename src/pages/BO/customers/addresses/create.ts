import {type BOAddressesCreatePageInterface} from '@interfaces/BO/customers/addresses/create';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOAddressesCreatePageInterface {
  return require('@versions/develop/pages/BO/customers/addresses/create');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
