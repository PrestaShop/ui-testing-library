import type {ModuleAutoupgradeModalPageInterface} from '@interfaces/BO/modules/autoupgrade/modal';
import semver from 'semver';
import testContext from '@utils/test';

const psVersion = testContext.getPSVersion();

/* eslint-disable global-require, @typescript-eslint/no-require-imports */
function requirePage(): ModuleAutoupgradeModalPageInterface {
  return require('@versions/develop/pages/BO/modules/autoupgrade/modal').autoupgradeModal;
}

/* eslint-enable global-require, @typescript-eslint/no-require-imports */

export default requirePage();
