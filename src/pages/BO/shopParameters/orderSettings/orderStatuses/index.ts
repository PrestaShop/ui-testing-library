import type {BOOrderStatusesPageInterface} from '@interfaces/BO/shopParameters/orderSettings/orderStatuses';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOOrderStatusesPageInterface {
  return require('@versions/develop/pages/BO/shopParameters/orderSettings/orderStatuses');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
