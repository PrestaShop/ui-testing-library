import type {BOOrdersCreatePageInterface} from '@interfaces/BO/orders/create';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOOrdersCreatePageInterface {
  return require('@versions/develop/pages/BO/orders/create');
}

/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
