import {type ModuleProductCommentsBoMainPageInterface} from '@interfaces/BO/modules/productcomments/index';

/* eslint-disable global-require, @typescript-eslint/no-require-imports */
function requirePage(): ModuleProductCommentsBoMainPageInterface {
  return require('@versions/develop/pages/BO/modules/productcomments/index');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports */

export default requirePage();
