import {BOCMSPagesPageInterface} from '@interfaces/BO/design/pages';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOCMSPagesPageInterface {
  return require('@versions/develop/pages/BO/design/pages');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
