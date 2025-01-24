import {type BOOrderMessagesPageInterface} from '@interfaces/BO/customerService/orderMessages';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOOrderMessagesPageInterface {
  return require('@versions/develop/pages/BO/customerService/orderMessages');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
