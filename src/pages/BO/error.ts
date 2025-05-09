import type {BOErrorPageInterface} from '@interfaces/BO/error';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOErrorPageInterface {
  return require('@versions/develop/pages/BO/error');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
