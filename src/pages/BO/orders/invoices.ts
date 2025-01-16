import type {BOInvoicesPageInterface} from '@interfaces/BO/orders/invoices';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOInvoicesPageInterface {
  return require('@versions/develop/pages/BO/orders/invoices');
}

/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
