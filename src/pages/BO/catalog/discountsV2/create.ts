import {type BODiscountsCreatePageInterface} from '@interfaces/BO/catalog/discountsV2/create';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BODiscountsCreatePageInterface {
  return require('@versions/develop/pages/BO/catalog/discountsV2/create');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
