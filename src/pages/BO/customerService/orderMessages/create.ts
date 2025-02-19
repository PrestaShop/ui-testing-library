import {type BOOrderMessagesCreatePageInterface} from '@interfaces/BO/customerService/orderMessages/create';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOOrderMessagesCreatePageInterface {
  return require('@versions/develop/pages/BO/customerService/orderMessages/create');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
