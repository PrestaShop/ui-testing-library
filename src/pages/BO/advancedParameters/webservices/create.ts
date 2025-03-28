import {type BOWebservicesCreatePageInterface} from '@interfaces/BO/advancedParameters/webservices/create';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOWebservicesCreatePageInterface {
  return require('@versions/develop/pages/BO/advancedParameters/webservices/create');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
