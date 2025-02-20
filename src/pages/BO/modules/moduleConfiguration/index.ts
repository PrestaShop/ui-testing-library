import type {ModuleConfigurationPageInterface} from '@interfaces/BO/modules/moduleConfiguration';

/* eslint-disable global-require, @typescript-eslint/no-require-imports */
function requirePage(): ModuleConfigurationPageInterface {
  return require('@versions/develop/pages/BO/modules/moduleConfiguration').moduleConfigurationPage;
}
/* eslint-enable global-require, @typescript-eslint/no-require-imports */

export default requirePage();
