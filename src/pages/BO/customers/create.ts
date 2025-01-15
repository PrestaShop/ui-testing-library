import {type BOCustomersCreatePageInterface} from '@interfaces/BO/customers/create';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOCustomersCreatePageInterface {
  return require('@versions/develop/pages/BO/customers/create');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
