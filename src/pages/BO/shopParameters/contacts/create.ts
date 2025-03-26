import type {BOContactsCreatePageInterface} from '@interfaces/BO/shopParameters/contacts/create';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOContactsCreatePageInterface {
  return require('@versions/develop/pages/BO/shopParameters/contacts/create');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
