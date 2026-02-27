import {type BODiscountsPageInterface} from '@interfaces/BO/catalog/discountsV2';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BODiscountsPageInterface {
  return require('@versions/develop/pages/BO/catalog/discountsV2');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
