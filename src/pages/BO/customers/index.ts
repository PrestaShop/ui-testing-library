import {type BOCustomersPageInterface} from '@interfaces/BO/customers';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOCustomersPageInterface {
  return require('@versions/develop/pages/BO/customers');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
