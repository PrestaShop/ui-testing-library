import {
  type BOReturnStatusesCreatePageInterface,
} from '@interfaces/BO/shopParameters/orderSettings/orderStatuses/returnStatuses/create';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOReturnStatusesCreatePageInterface {
  return require('@versions/develop/pages/BO/shopParameters/orderSettings/orderStatuses/returnStatuses/create');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
