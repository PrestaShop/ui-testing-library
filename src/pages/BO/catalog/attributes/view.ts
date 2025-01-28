import type {BOAttributesViewPageInterface} from '@interfaces/BO/catalog/attributes/view';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOAttributesViewPageInterface {
  return require('@versions/develop/pages/BO/catalog/attributes/view');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
