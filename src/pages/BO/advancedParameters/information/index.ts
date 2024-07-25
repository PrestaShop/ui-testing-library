import type {BOInformationPageInterface} from '@interfaces/BO/advancedParameters/information';

/* eslint-disable global-require, @typescript-eslint/no-var-requires */
function requirePage(): BOInformationPageInterface {
  return require('@versions/develop/pages/BO/advancedParameters/information');
}
/* eslint-enable global-require, @typescript-eslint/no-var-requires */

export default requirePage();
