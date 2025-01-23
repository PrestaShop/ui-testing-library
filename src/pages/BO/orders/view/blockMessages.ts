import {type BOProductBlockMessagesPageInterface} from '@interfaces/BO/orders/view/blockMessages';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOProductBlockMessagesPageInterface {
  return require('@versions/develop/pages/BO/orders/view/blockMessages');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
