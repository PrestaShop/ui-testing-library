import {type BOCustomersViewPageInterface} from '@interfaces/BO/customers/view';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOCustomersViewPageInterface {
  return require('@versions/develop/pages/BO/customers/view');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
