import {type BOFilesPageInterface} from '@interfaces/BO/catalog/files';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOFilesPageInterface {
  return require('@versions/develop/pages/BO/catalog/files');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
