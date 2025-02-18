import {type BOFilesCreatePageInterface} from '@interfaces/BO/catalog/files/create';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOFilesCreatePageInterface {
  return require('@versions/develop/pages/BO/catalog/files/create');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
