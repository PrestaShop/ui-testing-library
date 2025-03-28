import {type BOWebservicesPageInterface} from '@interfaces/BO/advancedParameters/webservices';

/* eslint-disable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */
function requirePage(): BOWebservicesPageInterface {
  return require('@versions/develop/pages/BO/advancedParameters/webservices');
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires */

export default requirePage();
