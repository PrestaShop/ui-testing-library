import type {BOContactsPageInterface} from '@interfaces/BO/shopParameters/contacts';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOContactsPageInterface {
  return require('@versions/develop/pages/BO/shopParameters/contacts');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
