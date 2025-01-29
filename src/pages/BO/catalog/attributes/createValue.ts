import type {BOAttributesValueCreatePageInterface} from '@interfaces/BO/catalog/attributes/createValue';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOAttributesValueCreatePageInterface {
  return require('@versions/develop/pages/BO/catalog/attributes/createValue');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
