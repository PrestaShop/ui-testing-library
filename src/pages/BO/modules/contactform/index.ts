import type {ModuleContactFormMainPageInterface} from '@interfaces/BO/modules/contactform';

/* eslint-disable global-require, @typescript-eslint/no-require-imports */
function requirePage(): ModuleContactFormMainPageInterface {
  return require('@versions/develop/pages/BO/modules/contactform');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports */

export default requirePage();
