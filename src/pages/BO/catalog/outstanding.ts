import {type BOOutstandingPageInterface} from '@interfaces/BO/catalog/outstanding';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOOutstandingPageInterface {
  return require('@versions/develop/pages/BO/catalog/outstanding');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
