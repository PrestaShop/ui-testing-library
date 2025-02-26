import {BOCMSPagesCreatePageInterface} from '@interfaces/BO/design/pages/create';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOCMSPagesCreatePageInterface {
  return require('@versions/develop/pages/BO/design/pages/create');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
