import type {BOAttributesPageInterface} from '@interfaces/BO/catalog/attributes';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOAttributesPageInterface {
  return require('@versions/develop/pages/BO/catalog/attributes');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
