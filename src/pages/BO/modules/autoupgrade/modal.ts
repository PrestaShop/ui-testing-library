import type {ModuleAutoupgradeModalPageInterface} from '@interfaces/BO/modules/autoupgrade/modal';

/* eslint-disable global-require, @typescript-eslint/no-require-imports */
function requirePage(): ModuleAutoupgradeModalPageInterface {
  return require('@versions/develop/pages/BO/modules/autoupgrade/modal').autoupgradeModal;
}

/* eslint-enable global-require, @typescript-eslint/no-require-imports */

export default requirePage();
